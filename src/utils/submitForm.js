import { company } from '../config/company'

/**
 * Backend integration point for forms (e.g. a future Spring Boot API).
 *
 * This NEVER reports success unless a real API responded with a 2xx status.
 * If VITE_API_BASE_URL is not set, it returns { ok: false, reason: 'not-configured' }
 * so the UI can honestly say the form is not connected yet.
 *
 * Expected API contract (POST, JSON): body is the form payload; any 2xx = success.
 */
export async function submitForm(endpoint, payload) {
  if (!company.api.baseUrl) {
    return { ok: false, reason: 'not-configured' }
  }

  try {
    const response = await fetch(`${company.api.baseUrl.replace(/\/$/, '')}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!response.ok) {
      return { ok: false, reason: 'server-error', status: response.status }
    }
    return { ok: true }
  } catch {
    return { ok: false, reason: 'network-error' }
  }
}
