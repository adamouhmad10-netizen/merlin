'use client';

import { useId, useRef, useState } from 'react';
import { demoForm } from '@/content/trust';
import { CTA } from '@/content/site';
import { validateDemoRequest, hasErrors, type DemoRequestPayload, type FieldErrors } from '@/lib/demoRequest';
import { submitDemoRequest } from '@/lib/submitDemoRequest';
import { Arrow } from './ui/Button';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function DemoRequestForm() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverMessage, setServerMessage] = useState('');
  const [devFallback, setDevFallback] = useState(false);

  const fid = (name: string) => `${uid}-${name}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload: DemoRequestPayload = {
      fullName: String(fd.get('fullName') ?? ''),
      workEmail: String(fd.get('workEmail') ?? ''),
      organization: String(fd.get('organization') ?? ''),
      role: String(fd.get('role') ?? ''),
      recordSize: String(fd.get('recordSize') ?? ''),
      phone: String(fd.get('phone') ?? ''),
      preferredTime: String(fd.get('preferredTime') ?? ''),
      message: String(fd.get('message') ?? ''),
      company_hp: String(fd.get('company_hp') ?? ''),
    };

    const clientErrors = validateDemoRequest(payload);
    setErrors(clientErrors);
    if (hasErrors(clientErrors)) {
      // Focus the first invalid field.
      const firstKey = Object.keys(clientErrors)[0];
      document.getElementById(fid(firstKey))?.focus();
      setStatus('error');
      setServerMessage('Please correct the highlighted fields.');
      return;
    }

    setStatus('submitting');
    setServerMessage('');
    const result = await submitDemoRequest(payload);
    if (result.ok) {
      setStatus('success');
      setServerMessage(result.message);
      setDevFallback(Boolean(result.devFallback));
      form.reset();
    } else {
      setStatus('error');
      setServerMessage(result.message);
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-[10px] border border-bronze/40 bg-bronze/[0.06] p-8 text-center" role="status">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-bronze/50 text-bronze">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
            <path d="M5 12.5 10 17l9-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="font-serif text-2xl text-ivory">Request received.</h3>
        <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-steel">{serverMessage}</p>
        {devFallback && (
          <p className="mx-auto mt-4 max-w-md rounded-[6px] border border-white/10 bg-white/[0.03] p-3 font-mono text-[0.68rem] leading-relaxed text-steel">
            Development mode: no delivery endpoint is configured, so this request was logged
            server-side only. Set DEMO_REQUEST_ENDPOINT to enable real delivery.
          </p>
        )}
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="flex flex-col gap-6" aria-describedby={`${uid}-warning`}>
      {/* Privacy warning above the message field per requirement, surfaced early. */}
      <p
        id={`${uid}-warning`}
        role="note"
        className="flex items-start gap-3 rounded-[8px] border border-gold/30 bg-gold/[0.06] p-4 text-[0.85rem] leading-relaxed text-ivory/85"
      >
        <span aria-hidden="true" className="mt-0.5 text-gold">
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
            <path d="M10 2.5 18 16H2L10 2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M10 8v3.5M10 13.6v.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </span>
        {demoForm.privacyWarning}
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={fid('fullName')} name="fullName" label="Full name" required error={errors.fullName} autoComplete="name" />
        <Field id={fid('workEmail')} name="workEmail" label="Work email" type="email" required error={errors.workEmail} autoComplete="email" />
        <Field id={fid('organization')} name="organization" label="Law firm or company" required error={errors.organization} autoComplete="organization" />
        <SelectField id={fid('role')} name="role" label="Role" required error={errors.role} options={demoForm.roleOptions} />
        <SelectField id={fid('recordSize')} name="recordSize" label="Typical record size" required error={errors.recordSize} options={demoForm.recordSizeOptions} />
        <Field id={fid('phone')} name="phone" label="Phone" type="tel" optional autoComplete="tel" />
        <SelectField id={fid('preferredTime')} name="preferredTime" label="Preferred consultation time" optional options={demoForm.consultationTimes} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={fid('message')} className="flex items-baseline justify-between text-[0.82rem] font-medium text-ivory/90">
          <span>Message</span>
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-steel">Optional · non-sensitive</span>
        </label>
        <textarea
          id={fid('message')}
          name="message"
          rows={4}
          maxLength={1000}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${fid('message')}-err` : undefined}
          placeholder="How can we help? Please do not include case-specific or confidential details."
          className="rounded-[8px] border border-white/15 bg-white/[0.03] px-4 py-3 text-[0.95rem] text-ivory placeholder:text-steel/60 focus:border-bronze focus:outline-none focus-visible:outline-none"
        />
        {errors.message && (
          <p id={`${fid('message')}-err`} className="text-[0.78rem] text-gold">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot (visually hidden, ignored by users, catches bots) */}
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={fid('company_hp')}>Company (leave blank)</label>
        <input id={fid('company_hp')} name="company_hp" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' && serverMessage && (
        <p role="alert" className="rounded-[8px] border border-red-400/40 bg-red-500/[0.08] px-4 py-3 text-[0.88rem] text-red-200">
          {serverMessage}
        </p>
      )}

      <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="group inline-flex items-center justify-center gap-2.5 rounded-[6px] bg-bronze px-7 py-[0.95rem] text-[0.85rem] font-medium text-obsidian shadow-[0_10px_24px_-12px_rgba(201,130,63,0.7)] transition-all duration-300 ease-editorial hover:-translate-y-[1px] hover:bg-gold disabled:cursor-wait disabled:opacity-70"
        >
          {status === 'submitting' ? 'Submitting…' : CTA.primary}
          {status !== 'submitting' && <Arrow />}
        </button>
        <p className="font-mono text-[0.66rem] leading-relaxed text-steel">Confidential · No obligation</p>
      </div>
    </form>
  );
}

/* ------------------------------------------------------------------ fields */
function baseInputClass(hasError?: boolean) {
  return `rounded-[8px] border bg-white/[0.03] px-4 py-3 text-[0.95rem] text-ivory placeholder:text-steel/60 focus:outline-none focus-visible:outline-none ${
    hasError ? 'border-gold' : 'border-white/15 focus:border-bronze'
  }`;
}

function Labels({ id, label, required, optional }: { id: string; label: string; required?: boolean; optional?: boolean }) {
  return (
    <label htmlFor={id} className="flex items-baseline justify-between text-[0.82rem] font-medium text-ivory/90">
      <span>{label}</span>
      {required && <span className="text-[0.62rem] font-normal text-bronze">Required</span>}
      {optional && <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-steel">Optional</span>}
    </label>
  );
}

function Field({
  id,
  name,
  label,
  type = 'text',
  required,
  optional,
  error,
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Labels id={id} label={label} required={required} optional={optional} />
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-err` : undefined}
        className={baseInputClass(Boolean(error))}
      />
      {error && (
        <p id={`${id}-err`} className="text-[0.78rem] text-gold">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  id,
  name,
  label,
  options,
  required,
  optional,
  error,
}: {
  id: string;
  name: string;
  label: string;
  options: readonly string[];
  required?: boolean;
  optional?: boolean;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Labels id={id} label={label} required={required} optional={optional} />
      <div className="relative">
        <select
          id={id}
          name={name}
          defaultValue=""
          aria-required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-err` : undefined}
          className={`${baseInputClass(Boolean(error))} w-full appearance-none pr-10 text-ivory [color-scheme:dark]`}
        >
          <option value="" disabled>
            Select…
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <span aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-steel">
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      {error && (
        <p id={`${id}-err`} className="text-[0.78rem] text-gold">
          {error}
        </p>
      )}
    </div>
  );
}
