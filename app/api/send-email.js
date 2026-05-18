export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const formData = req.body

    // Validate required fields
    if (!formData.name || !formData.email || !formData.needs) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const recipientEmail = process.env.CONTACT_EMAIL || 'contact.studioyugen@gmail.com'

    // Send email using your preferred service
    if (process.env.SENDGRID_API_KEY) {
      await sendWithSendGrid(formData, recipientEmail)
    } else if (process.env.RESEND_API_KEY) {
      await sendWithResend(formData, recipientEmail)
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}

async function sendWithSendGrid(formData, recipientEmail) {
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

async function sendWithResend(formData, recipientEmail) {
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

function generateEmailHTML(formData) {
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
          minute: '2-digit'
        })}</p>
        <p>Visit <a href="https://studioyugen.com" style="color: #080808; text-decoration: none;">studioyugen.com</a> to reply</p>
      </div>
    </div>
  `
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}
