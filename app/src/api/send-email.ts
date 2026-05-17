// This file demonstrates how to set up email sending
// You can deploy this as a serverless function on Vercel, Netlify, or use Supabase Edge Functions

interface ContactData {
  name: string
  business: string
  needs: string
  budget: string
  submittedAt: string
}

export async function sendEmailNotification(formData: ContactData) {
  const recipientEmail = import.meta.env.VITE_CONTACT_EMAIL || 'contact.studioyugen@gmail.com'

  try {
    // Option 1: Using SendGrid (recommended for production)
    if (import.meta.env.VITE_SENDGRID_API_KEY) {
      return await sendWithSendGrid(formData, recipientEmail)
    }

    // Option 2: Using Resend
    if (import.meta.env.VITE_RESEND_API_KEY) {
      return await sendWithResend(formData, recipientEmail)
    }

    // Option 3: Using Email.js (client-side)
    return await sendWithEmailJS(formData, recipientEmail)
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}

async function sendWithSendGrid(formData: ContactData, recipientEmail: string) {
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: recipientEmail }],
        },
      ],
      from: {
        email: 'noreply@studioyugen.com',
        name: 'Studio Yugen',
      },
      subject: `New Project Inquiry from ${formData.name}`,
      html: generateEmailHTML(formData),
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to send email with SendGrid')
  }
  return response
}

async function sendWithResend(formData: ContactData, recipientEmail: string) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_RESEND_API_KEY}`,
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
    throw new Error('Failed to send email with Resend')
  }
  return response
}

async function sendWithEmailJS(formData: ContactData, recipientEmail: string) {
  // Email.js requires initialization on the frontend
  // This is a placeholder - use the emailjs library in your component
  console.log('Using Email.js for email sending', { formData, recipientEmail })
  return { ok: true }
}

function generateEmailHTML(formData: ContactData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #080808; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
        New Project Inquiry
      </h2>
      
      <div style="margin: 20px 0;">
        <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
        <p><strong>Business:</strong> ${escapeHtml(formData.business)}</p>
        <p><strong>Budget Range:</strong> ${escapeHtml(formData.budget)}</p>
      </div>

      <div style="margin: 20px 0;">
        <h3 style="color: #080808;">Project Details:</h3>
        <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 10px; border-radius: 4px;">
          ${escapeHtml(formData.needs)}
        </p>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ccc; font-size: 12px; color: #666;">
        <p>Submitted on: ${new Date(formData.submittedAt).toLocaleString()}</p>
        <p>From: <a href="mailto:${escapeHtml(formData.name)}">contact.studioyugen.com</a></p>
      </div>
    </div>
  `
}

function escapeHtml(text: string): string {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}
