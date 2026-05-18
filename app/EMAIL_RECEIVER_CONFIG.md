# Email Receiver Configuration

This guide explains how to configure where contact form submissions are sent.

## Current Setup

By default, all form submissions are sent to:
```
contact.studioyugen@gmail.com
```

This is controlled by the `CONTACT_EMAIL` environment variable.

## How It Works

### Where Emails Are Sent

The email receiver is defined in two places (for local vs deployed):

**Local (Development):**
```env
VITE_CONTACT_EMAIL=contact.studioyugen@gmail.com
```
(in `.env.local`)

**Deployed (Backend API):**
```env
CONTACT_EMAIL=contact.studioyugen@gmail.com
```
(in Netlify/Vercel environment)

### Flow

```
User submits form
    ↓
Form data sent to database (Supabase)
    ↓
Email notification sent to: $CONTACT_EMAIL
```

## Changing the Email Receiver

### Option 1: Local Development

Edit `app/.env.local`:
```env
VITE_CONTACT_EMAIL=your-email@example.com
CONTACT_EMAIL=your-email@example.com
```

Then restart dev server:
```bash
npm run dev
```

### Option 2: Deployed on Vercel

1. Go to **Vercel dashboard** → Your project
2. Go to **Settings** → **Environment Variables**
3. Update or add:
   ```
   CONTACT_EMAIL=your-email@example.com
   ```
4. Click **Save**
5. Go to **Deployments** and click **Redeploy** on latest build

### Option 3: Deployed on Netlify

1. Go to **Netlify dashboard** → Your site
2. Go to **Site settings** → **Build & deploy** → **Environment**
3. Update or add:
   ```
   CONTACT_EMAIL=your-email@example.com
   ```
4. Click **Save**
5. Trigger new deploy or wait for next push

## Multiple Email Receivers (Advanced)

To send to multiple emails, update the function code:

**For Vercel** (`app/api/send-email.js`):
```javascript
const recipientEmails = (process.env.CONTACT_EMAIL || 'contact@example.com').split(',')

async function sendWithSendGrid(formData, recipientEmails) {
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{ 
        to: recipientEmails.map(email => ({ email: email.trim() }))
      }],
      from: { email: 'noreply@studioyugen.com', name: 'Studio Yugen' },
      subject: `New Project Inquiry from ${formData.name}`,
      html: generateEmailHTML(formData),
    }),
  })
}
```

Then set env var:
```
CONTACT_EMAIL=email1@example.com,email2@example.com,email3@example.com
```

**For Netlify** (`app/netlify/functions/send-email.ts`):
Do the same in `app/netlify/functions/send-email.ts`

## Testing

### Test Email Submission

1. Go to `/contact` on your site
2. Fill out the form with test data
3. Submit
4. Check the configured email inbox
5. Verify submission in Supabase dashboard

### Verify Environment Variable Is Set

**In Vercel:**
- Go to project → Settings → Environment Variables
- Look for `CONTACT_EMAIL`
- Should show your configured email

**In Netlify:**
- Go to site → Site settings → Build & deploy → Environment
- Look for `CONTACT_EMAIL`
- Should show your configured email

**Locally:**
```bash
# Check .env.local
cat app/.env.local | grep CONTACT_EMAIL
```

## Fallback Behavior

If `CONTACT_EMAIL` environment variable is not set:
```javascript
const recipientEmail = process.env.CONTACT_EMAIL || 'contact.studioyugen@gmail.com'
```

It will default to `contact.studioyugen@gmail.com`

## Important Notes

1. **Email must be valid** - Otherwise SendGrid/Resend will reject it
2. **Verify sender domain** - If using SendGrid/Resend, verify the sending domain (`noreply@studioyugen.com`)
3. **Check spam folder** - Test emails might go to spam
4. **One receiver at a time** - Currently set up for single email per environment variable
5. **Case sensitive** - Keep environment variable names exactly as shown

## Troubleshooting

### Email not received

Check:
1. ✅ Environment variable is set correctly
2. ✅ Email address is valid and accessible
3. ✅ Check spam/junk folder
4. ✅ Email service is configured (SendGrid/Resend)
5. ✅ Domain is verified in email service

### "Failed to send email"

Check in function logs:
1. Go to Vercel/Netlify dashboard
2. View function logs
3. Look for error messages
4. Common issues:
   - Invalid email address
   - Email service API key invalid
   - Domain not verified

## Reference

| Location | Variable | Value |
|----------|----------|-------|
| Local dev | `VITE_CONTACT_EMAIL` | your@email.com |
| Deployed (backend) | `CONTACT_EMAIL` | your@email.com |
| Form field | N/A | Shows "Email Address" field |
| Email template | From field | noreply@studioyugen.com |

## Next Steps

1. ✅ Set `CONTACT_EMAIL` to your email
2. ✅ Test form submission
3. ✅ Verify email received
4. ✅ Check Supabase for data

---

Need help? See `VERCEL_DEPLOYMENT.md` or `TROUBLESHOOTING.md`
