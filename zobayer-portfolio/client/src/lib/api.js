export async function sendContact({ name, email, subject, message, website }) {
  if (website) return { ok: true } // bot trap

  const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const user_id = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  if (!service_id || !template_id || !user_id) {
    throw new Error('Contact form is not set up yet. Please email me directly.')
  }

  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id,
      template_id,
      user_id,
      template_params: { name, email, subject, message },
    }),
  })
  if (!res.ok) throw new Error('Message could not be sent. Please try again or email me directly.')
  return { ok: true }
}