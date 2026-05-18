# Contact Form Setup Instructions

This guide walks you through setting up Supabase and email notifications for the contact form.

## Step 1: Set Up Supabase

### 1.1 Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Create a new project
3. Copy your **Project URL** and **Anon Key** from the project settings

### 1.2 Create the Database Table
In your Supabase dashboard, go to SQL Editor and run this query:

```sql
CREATE TABLE contact_submissions (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  business VARCHAR(255),
  needs TEXT NOT NULL,
  budget VARCHAR(100),
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public inserts
CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Allow public reads (optional, for viewing submissions)
CREATE POLICY "Allow public reads" ON contact_submissions
  FOR SELECT USING (true);
```

## Step 2: Configure Email Service

Choose one of the following email services:

### Option A: SendGrid (Recommended)
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create an API key in Settings > API Keys
3. Add the API key to your environment variables

### Option B: Resend
1. Sign up at [resend.com](https://resend.com)
2. Create an API key in your dashboard
3. Add the API key to your environment variables

### Option C: Email.js (Frontend-only, no backend needed)
1. Sign up at [emailjs.com](https://emailjs.com)
2. Create an email service and template
3. Install EmailJS: `npm install @emailjs/browser`
4. See integration below

## Step 3: Set Environment Variables

### Local Development
Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

Then update `.env.local`:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
VITE_SENDGRID_API_KEY=your_sendgrid_key_here
# OR
VITE_RESEND_API_KEY=your_resend_key_here
```

### Deployment

**Netlify:**
1. Go to Site settings > Build & deploy > Environment
2. Add the same variables as above

**Vercel:**
1. Go to Settings > Environment Variables
2. Add the same variables

## Step 4: Deploy Email Function

### For Netlify:
1. The function is in `netlify/functions/send-email.ts`
2. Deploy using Netlify CLI: `netlify deploy`
3. The function will be available at `/.netlify/functions/send-email`

### For Vercel:
Create `api/send-email.ts`:

```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const formData = req.body

    // Send email logic here (similar to Netlify function)
    
    res.status(200).json({ success: true })
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' })
  }
}
```

## Step 5: Test the Form

1. Start the dev server: `npm run dev`
2. Go to `/contact` page
3. Fill out the form and submit
4. Check your email for the notification
5. Check Supabase dashboard to verify the submission was saved

## Troubleshooting

### Form submissions not appearing in Supabase
- Check browser console for errors
- Verify `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are correct
- Check Supabase project settings and RLS policies

### Emails not being sent
- Verify your email service API key is correct
- Check the function logs in Netlify/Vercel dashboard
- Make sure the email service is properly configured

### CORS Errors
- This typically means the backend function isn't deployed properly
- For local testing, you may need to adjust CORS headers in the function

## Security Notes

1. Never commit `.env.local` to git - it's already in `.gitignore`
2. Keep API keys secure - use environment variables
3. The email function should validate/sanitize all inputs
4. Consider rate limiting to prevent form spam
5. Use RLS policies in Supabase to control data access

## Optional: Add Rate Limiting

To prevent spam, add this to your email function:

```typescript
const redis = require('@upstash/redis')

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 h'), // 5 requests per hour
})

const { success } = await ratelimit.limit('contact-form')
if (!success) {
  return res.status(429).json({ error: 'Too many requests' })
}
```

## Support

For more information:
- [Supabase Docs](https://supabase.com/docs)
- [SendGrid Docs](https://docs.sendgrid.com)
- [Resend Docs](https://resend.com/docs)
- [Netlify Functions](https://docs.netlify.com/functions/overview)
- [Vercel Functions](https://vercel.com/docs/concepts/functions/serverless-functions)
