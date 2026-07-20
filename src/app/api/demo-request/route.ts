import { NextResponse } from 'next/server';
import { validateDemoRequest, hasErrors, type DemoRequestPayload } from '@/lib/demoRequest';

export const runtime = 'nodejs';

/**
 * Demo-request endpoint. This is the single integration seam to the client's
 * real delivery service. It does NOT fake success:
 *
 *  - If DEMO_REQUEST_ENDPOINT is set, the validated payload is forwarded there
 *    (email service / CRM / HubSpot Forms / scheduler webhook). The client's
 *    response determines success or failure.
 *  - If it is NOT set, the request is validated and logged server-side, and the
 *    response is explicitly flagged `devFallback: true` so the UI can say so.
 *
 * No real email is ever claimed to have been sent unless a downstream service
 * actually accepted the request.
 */
export async function POST(request: Request) {
  let body: Partial<DemoRequestPayload>;
  try {
    body = (await request.json()) as Partial<DemoRequestPayload>;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot: silently accept but do nothing for obvious bots.
  if (body.company_hp && body.company_hp.trim() !== '') {
    return NextResponse.json({ ok: true, message: 'Request received.' });
  }

  const errors = validateDemoRequest(body);
  if (hasErrors(errors)) {
    return NextResponse.json({ error: 'Validation failed.', fields: errors }, { status: 422 });
  }

  const payload: DemoRequestPayload = {
    fullName: body.fullName!.trim(),
    workEmail: body.workEmail!.trim(),
    organization: body.organization!.trim(),
    role: body.role!,
    recordSize: body.recordSize!,
    phone: body.phone?.trim() || undefined,
    preferredTime: body.preferredTime || undefined,
    message: body.message?.trim() || undefined,
  };

  const endpoint = process.env.DEMO_REQUEST_ENDPOINT;

  // ---- Development fallback: no delivery configured. -----------------------
  if (!endpoint) {
    console.info('[demo-request] (dev fallback — not delivered) new request:', {
      ...payload,
      workEmail: payload.workEmail,
      receivedAt: new Date().toISOString(),
    });
    return NextResponse.json({
      ok: true,
      devFallback: true,
      message:
        'Thank you. Your request has been recorded. A case consultant will follow up to schedule your private demonstration.',
    });
  }

  // ---- Real delivery. ------------------------------------------------------
  try {
    const auth = process.env.DEMO_REQUEST_API_KEY;
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(auth ? { Authorization: `Bearer ${auth}` } : {}),
      },
      body: JSON.stringify({ source: 'merlin.law/trust', receivedAt: new Date().toISOString(), ...payload }),
    });

    if (!res.ok) {
      console.error('[demo-request] delivery endpoint returned', res.status);
      return NextResponse.json(
        { error: 'We could not submit your request right now. Please try again shortly.' },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message:
        'Thank you. Your request has been received. A case consultant will follow up to schedule your private demonstration.',
    });
  } catch (err) {
    console.error('[demo-request] delivery error', err);
    return NextResponse.json(
      { error: 'We could not submit your request right now. Please try again shortly.' },
      { status: 502 },
    );
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}
