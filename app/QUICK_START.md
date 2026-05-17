# Quick Start: Contact Form with Supabase + Email

## 🎯 What's Implemented

Your contact form now:
- ✅ Stores submissions in Supabase database
- ✅ Sends email notifications when form is submitted
- ✅ Shows loading/success/error states
- ✅ Supports multiple email providers (SendGrid, Resend, EmailJS)

## 📋 Setup Checklist (5 minutes)

### 1️⃣ Set Up Supabase (2 min)

1. Go to [supabase.com](https://supabase.com) and create a project
2. Copy your **Project URL** and **Anon Key** from Settings
3. Go to SQL Editor and run this:

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

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT WITH CHECK (true);
```

### 2️⃣ Choose Email Service (1 min)

**Option A: SendGrid** (Recommended)
- Sign up: https://sendgrid.com
- Get API key from Settings > API Keys
- Free tier: 100 emails/day

**Option B: Resend**
- Sign up: https://resend.com
- Get API key from dashboard
- Free tier: 100 emails/day

**Option C: EmailJS** (No backend needed)
- Sign up: https://emailjs.com
- Run: `npm install @emailjs/browser`
- Set up email service & template in dashboard

### 3️⃣ Add Environment Variables (1 min)

Edit `app/.env.local`:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
VITE_CONTACT_EMAIL=contact.studioyugen@gmail.com
VITE_SENDGRID_API_KEY=your_sendgrid_key_here
```

### 4️⃣ Test Locally (1 min)

```bash
cd app
npm run dev
```

Go to `/contact` and submit the form. Check:
- ✅ Success toast message appears
- ✅ Form clears
- ✅ Email received in inbox
- ✅ Data appears in Supabase dashboard

### 5️⃣ Deploy (1 min)

**For Netlify:**
- Add same env vars to Site settings > Environment
- Function at `netlify/functions/send-email.ts` auto-deploys

**For Vercel:**
- Add same env vars to Settings > Environment Variables
- Create `api/send-email.ts` with Netlify function code

**For EmailJS:**
- No backend needed, just deploy normally

## 🔑 Environment Variables Needed

| Variable | Required | Where to Get |
|----------|----------|--------------|
| `VITE_SUPABASE_URL` | ✅ Yes | Supabase Settings |
| `VITE_SUPABASE_ANON_KEY` | ✅ Yes | Supabase Settings |
| `VITE_CONTACT_EMAIL` | ✅ Yes | Your email |
| `VITE_SENDGRID_API_KEY` | If using SendGrid | SendGrid Settings |
| `VITE_RESEND_API_KEY` | If using Resend | Resend Dashboard |

## 📁 Files Created

```
app/
├── .env.local                              # Your env vars (don't commit!)
├── .env.example                            # Template (commit this)
├── SETUP_INSTRUCTIONS.md                   # Detailed guide
├── QUICK_START.md                          # This file
├── netlify/
│   └── functions/
│       └── send-email.ts                   # Email function
├── src/
│   ├── lib/
│   │   ├── supabase.ts                     # Supabase client
│   │   ├── contact.ts                      # Form submission logic
│   │   └── emailjs-integration.ts          # Optional EmailJS
│   └── sections/
│       └── contact/
│           └── ContactFormSection.tsx      # Updated form
```

## 🚀 How It Works

```
User fills form → Click "Send Message"
    ↓
submitContactForm() runs
    ↓
  ├→ Saves to Supabase
  ├→ Sends email via SendGrid/Resend/EmailJS
  ├→ Shows toast "Thank you!"
  └→ Clears form
```

## ❓ Troubleshooting

| Problem | Solution |
|---------|----------|
| "env var not found" | Restart dev server after changing `.env.local` |
| Submissions not in Supabase | Check URL & key, verify RLS policy allows inserts |
| Email not received | Check API key, verify sender domain in email service |
| 404 on email function | Netlify function not deployed, check build logs |
| Form still shows loading | Check browser console for errors |

## 📞 Need Help?

1. Check `app/SETUP_INSTRUCTIONS.md` for detailed steps
2. Verify all env vars are set: `echo $VITE_SUPABASE_URL`
3. Check browser console: F12 → Console tab
4. Check function logs:
   - Netlify: Site settings → Logs
   - Vercel: Dashboard → Functions logs

## 💡 What's Next?

✅ Form is ready to use
- Test it at `/contact`
- Submissions saved to Supabase
- Emails sent automatically

Optional enhancements:
- Add spam protection (reCAPTCHA)
- Add rate limiting
- Customize email template
- Add file upload support
- Set up webhooks for other integrations

---

**Status**: ✅ Ready to use
**Test URL**: http://localhost:3000/contact (after `npm run dev`)
