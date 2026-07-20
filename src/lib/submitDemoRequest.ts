import type { DemoRequestPayload } from './demoRequest';

export interface SubmitResult {
  ok: boolean;
  message: string;
  /** Present in development when no delivery endpoint is configured. */
  devFallback?: boolean;
}

/**
 * Client-side submission adapter. Posts to the internal API route, which is the
 * single seam to the client's real delivery service (email / CRM / HubSpot /
 * scheduler). Swapping providers only requires editing the API route — this
 * adapter never changes.
 */
export async function submitDemoRequest(payload: DemoRequestPayload): Promise<SubmitResult> {
  try {
    const res = await fetch('/api/demo-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = (await res.json().catch(() => ({}))) as Partial<SubmitResult> & {
      error?: string;
    };

    if (!res.ok) {
      return {
        ok: false,
        message: data.error ?? 'We could not submit your request. Please try again.',
      };
    }

    return {
      ok: true,
      message: data.message ?? 'Request received.',
      devFallback: data.devFallback,
    };
  } catch {
    return {
      ok: false,
      message: 'A network error occurred. Please try again, or contact us directly.',
    };
  }
}
