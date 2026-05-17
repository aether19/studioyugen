import { Handler } from '@netlify/functions'

interface ContactFormData {
  name: string
  email: string
  business: string
  needs: string
  budget: string
  submittedAt: string
}

const handler: Handler = async (event) => {
  // Only accept POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const formData: ContactFormData = JSON.parse(event.body || '{}')

    // Validate required fields
    if (!formData.name || !formData.needs) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      }
    }

    const recipientEmail = process.env.CONTACT_EMAIL || 'contact.studioyugen@gmail.com'

    // Send email using your preferred service
    await sendEmail(formData, recipientEmail)

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Email sent successfully' }),
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    }
  }
}

async function sendEmail(formData: ContactFormData, recipientEmail: string) {
  const apiKey = process.env.SENDGRID_API_KEY || process.env.RESEND_API_KEY

  if (!apiKey) {
    throw new Error('Email service API key not configured')
  }

  // Example: SendGrid
  if (process.env.SENDGRID_API_KEY) {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: recipientEmail }] }],
        from: { email: 'noreply@studioyugen.com', name: 'Studio Yugen' },
        subject: `New Project Inquiry from ${formData.name}`,
        html: generateEmailHTML(formData),
      }),
    })

    if (!response.ok) {
      throw new Error(`SendGrid error: ${response.statusText}`)
    }
  }
  // Example: Resend
  else if (process.env.RESEND_API_KEY) {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@studioyugen.com',
        to: recipientEmail,
        subject: `New Project Inquiry from ${formData.name}`,
        html: generateEmailHTML(formData),
      }),
    })

    if (!response.ok) {
      throw new Error(`Resend error: ${response.statusText}`)
    }
  }
}

function generateEmailHTML(formData: ContactFormData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background: linear-gradient(135deg, #080808 0%, #1a1a1a 100%); color: #e8e2d8; padding: 40px; border-radius: 8px; margin-bottom: 30px;">
        <h1 style="margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 2px;">New Project Inquiry</h1>
      </div>

      <div style="background: #f9f9f9; padding: 30px; border-radius: 8px; margin-bottom: 30px;">
        <h2 style="color: #080808; margin-top: 0; font-size: 18px;">Client Information</h2>
        <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(formData.email)}" style="color: #080808; text-decoration: none;">${escapeHtml(formData.email)}</a></p>
        <p><strong>Business:</strong> ${formData.business ? escapeHtml(formData.business) : 'Not specified'}</p>
        <p><strong>Budget Range:</strong> ${escapeHtml(formData.budget)}</p>
      </div>

      <div style="background: #f9f9f9; padding: 30px; border-radius: 8px; margin-bottom: 30px;">
        <h2 style="color: #080808; margin-top: 0; font-size: 18px;">Project Details</h2>
        <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">
          ${escapeHtml(formData.needs)}
        </p>
      </div>

      <div style="border-top: 1px solid #e0e0e0; padding-top: 20px; font-size: 12px; color: #999;">
        <p>Submitted: ${new Date(formData.submittedAt).toLocaleString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric', 
          hour: '2-digit', 
          minute: '2-digit',
          timeZone: 'UTC'
        })} UTC</p>
        <p>Visit <a href="https://studioyugen.com" style="color: #080808; text-decoration: none;">studioyugen.com</a> to reply</p>
      </div>
    </div>
  `
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

export { handler }
