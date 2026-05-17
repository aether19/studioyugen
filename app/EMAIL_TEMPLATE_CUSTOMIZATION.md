# Email Template Customization Guide

This guide shows how to customize the email template that's sent to you when someone submits the contact form.

## Current Email Template

The email is generated in `netlify/functions/send-email.ts` in the `generateEmailHTML()` function.

Current template features:
- Dark header with branding
- Client information section
- Project details section
- Submission timestamp

## Customizing the Template

### 1. Edit the HTML Template

Open `netlify/functions/send-email.ts` and find the `generateEmailHTML()` function:

```typescript
function generateEmailHTML(formData: ContactData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      {/* Header */}
      {/* Sections */}
    </div>
  `
}
```

### 2. Customization Examples

#### Example 1: Change Header Color

```typescript
// Before:
<div style="background: linear-gradient(135deg, #080808 0%, #1a1a1a 100%); ...">

// After: (your brand color)
<div style="background: linear-gradient(135deg, #0066cc 0%, #004499 100%); ...">
```

#### Example 2: Add Company Logo

```typescript
<div style="...">
  <img src="https://your-domain.com/logo.png" 
       alt="Studio Yugen" 
       style="width: 200px; margin-bottom: 20px;" />
  <h1>New Project Inquiry</h1>
</div>
```

#### Example 3: Add Sections for Additional Fields

```typescript
// If you add new form fields, add them to the email:
<p><strong>Timeline:</strong> ${escapeHtml(formData.timeline)}</p>
<p><strong>Services:</strong> ${escapeHtml(formData.services)}</p>
```

#### Example 4: Change Colors to Match Brand

```typescript
// Define your brand colors at the top:
const colors = {
  primary: '#080808',
  secondary: '#1a1a1a',
  accent: '#e8e2d8',
  background: '#f9f9f9',
  text: '#333',
  lightText: '#666',
}

// Then use them in the template:
<div style={`background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%); ...`}>
```

## Advanced Customization

### Add Dynamic Content

```typescript
function generateEmailHTML(formData: ContactData): string {
  const urgencyLevel = formData.budget === '$10,000+' ? '🔴 HIGH' : 'Normal'
  
  return `
    <div>
      <p><strong>Priority:</strong> ${urgencyLevel}</p>
      ...
    </div>
  `
}
```

### Add Call-to-Action Button

```typescript
<div style="text-align: center; margin: 30px 0;">
  <a href="https://your-domain.com/admin/inquiries" 
     style="display: inline-block; background-color: #0066cc; 
            color: white; padding: 12px 24px; text-decoration: none; 
            border-radius: 4px; font-weight: bold;">
    View in Dashboard
  </a>
</div>
```

### Add Custom Styling

```typescript
const emailStyles = `
  <style>
    .container { max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; }
    .header { background: linear-gradient(135deg, #080808 0%, #1a1a1a 100%); 
              color: #e8e2d8; padding: 40px; }
    .section { background: #f9f9f9; padding: 30px; margin-bottom: 30px; border-radius: 8px; }
    .footer { border-top: 1px solid #e0e0e0; padding-top: 20px; font-size: 12px; color: #999; }
  </style>
`

// Then use:
<div class="container">
  <div class="header">...</div>
  <div class="section">...</div>
  <div class="footer">...</div>
</div>
```

## Different Templates for Different Services

### SendGrid Template

In `netlify/functions/send-email.ts`, the `sendWithSendGrid()` function builds the email.

You can also use SendGrid's dynamic templates:

```typescript
// Instead of HTML string, use template ID:
body: JSON.stringify({
  personalizations: [{ to: [{ email: recipientEmail }] }],
  from: { email: 'noreply@studioyugen.com', name: 'Studio Yugen' },
  template_id: 'd-1234567890abcdef', // Your SendGrid template ID
  dynamic_template_data: {
    name: formData.name,
    business: formData.business,
    needs: formData.needs,
    budget: formData.budget,
  }
})
```

### Resend Template

For Resend, you can use React components:

```typescript
// In Resend dashboard, create an email using React components
// Then reference it:
body: JSON.stringify({
  from: 'noreply@studioyugen.com',
  to: recipientEmail,
  template: 'contact-inquiry', // Your template slug
  props: {
    name: formData.name,
    business: formData.business,
    needs: formData.needs,
    budget: formData.budget,
  }
})
```

## Best Practices

1. **Keep it Simple**: Don't make the email too complex
2. **Mobile Friendly**: Use `max-width: 600px` for email containers
3. **Test**: Send test emails from Supabase → copy to gmail/outlook
4. **Brand Consistency**: Use your brand colors and fonts
5. **Clear CTA**: Include a clear call-to-action
6. **Responsive**: Test on mobile and desktop

## Email Template Variables

Available variables in the email template:

```typescript
formData.name        // Client's name
formData.business    // Business name
formData.needs       // Project description
formData.budget      // Budget range
formData.submittedAt // Submission timestamp
```

## Testing Changes

1. Make changes to `generateEmailHTML()` function
2. Test by submitting the form
3. Check email in your inbox
4. Iterate until it looks good

## Adding Reply-To Address

To allow replies to go to the form submitter:

```typescript
const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
  method: 'POST',
  headers: { ... },
  body: JSON.stringify({
    personalizations: [{
      to: [{ email: recipientEmail }],
      reply_to: { email: recipientEmail } // ← Add this
    }],
    from: { email: 'noreply@studioyugen.com', name: 'Studio Yugen' },
    subject: `New Project Inquiry from ${formData.name}`,
    html: generateEmailHTML(formData),
  })
})
```

## Example Custom Template

Here's a complete custom template example:

```typescript
function generateEmailHTML(formData: ContactData): string {
  return `
    <div style="font-family: 'Sora', sans-serif; max-width: 600px; margin: 0 auto;">
      
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #0066cc 0%, #004499 100%); 
                  color: white; padding: 50px 40px; text-align: center;">
        <img src="https://your-domain.com/logo-white.png" alt="Logo" style="width: 150px; margin-bottom: 20px;">
        <h1 style="margin: 0; font-size: 32px; font-weight: 300;">New Inquiry Received</h1>
      </div>

      <!-- Main Content -->
      <div style="background: white; padding: 40px;">
        
        <h2 style="color: #0066cc; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
          Client Details
        </h2>
        <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(formData.business || 'Not specified')}</p>
        <p><strong>Budget:</strong> ${escapeHtml(formData.budget)}</p>

        <h2 style="color: #0066cc; margin-top: 30px; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
          Project Description
        </h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 4px; 
                    white-space: pre-wrap; line-height: 1.6;">
          ${escapeHtml(formData.needs)}
        </div>

        <!-- CTA Button -->
        <div style="text-align: center; margin: 40px 0;">
          <a href="https://your-domain.com/admin" 
             style="display: inline-block; background-color: #0066cc; color: white; 
                    padding: 15px 40px; text-decoration: none; border-radius: 4px; 
                    font-weight: bold; font-size: 16px;">
            Respond to Inquiry
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f5f5f5; padding: 30px 40px; text-align: center; font-size: 12px; color: #999;">
        <p>Submitted: ${new Date(formData.submittedAt).toLocaleString()}</p>
        <p>From: <a href="https://studioyugen.com" style="color: #0066cc; text-decoration: none;">studioyugen.com</a></p>
      </div>

    </div>
  `
}
```

---

For more help, see `SETUP_INSTRUCTIONS.md` and `QUICK_START.md`.
