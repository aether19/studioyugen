# Deploying to Vercel

Complete guide to deploy your contact form with Supabase to Vercel.

## Prerequisites

- [Vercel account](https://vercel.com/signup) (free)
- [Supabase project](https://supabase.com) with contact_submissions table created
- GitHub repository with your code pushed

## Step 1: Create Vercel Project

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New..."** → **"Project"**
3. Select your GitHub repository (studioyugen)
4. Click **"Import"**
5. Click **"Deploy"** (keep default settings)
6. Wait for deployment to complete (~2 minutes)

## Step 2: Add Environment Variables

After deployment completes:

1. Go to **Settings** → **Environment Variables**
2. Add these variables:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
VITE_CONTACT_EMAIL=contact.studioyugen.com
CONTACT_EMAIL=contact.studioyugen.com
SENDGRID_API_KEY=your_sendgrid_key  (optional)
RESEND_API_KEY=your_resend_key      (optional)
```

3. Click **"Save"**
4. Go to **Deployments** and click **"Redeploy"** on the latest deployment
5. Wait for redeploy to complete

## Step 3: Test It

1. Go to your Vercel project URL (e.g., `studioyugen.vercel.app`)
2. Navigate to `/contact`
3. Fill out the form and submit
4. Check:
   - ✅ Success toast appears
   - ✅ Data in Supabase dashboard
   - ✅ Email received (if SendGrid/Resend configured)

## Step 4: Set Custom Domain (Optional)

1. In Vercel project settings → **Domains**
2. Enter your domain (e.g., `studioyugen.com`)
3. Follow DNS instructions for your domain registrar
4. Wait for DNS to propagate (~24 hours)

## Environment Variables Reference

| Variable | Where to Get | Required |
|----------|--------------|----------|
| `VITE_SUPABASE_URL` | Supabase → Settings → API | ✅ Yes |
| `VITE_SUPABASE_ANON_KEY` | Supabase → Settings → API | ✅ Yes |
| `VITE_CONTACT_EMAIL` | Your email | ❌ Optional |
| `SENDGRID_API_KEY` | SendGrid dashboard | ❌ If using SendGrid |
| `RESEND_API_KEY` | Resend dashboard | ❌ If using Resend |

## API Endpoint Location

Your email API endpoint is automatically available at:
```
https://your-domain.vercel.app/api/send-email
```

The form will try this endpoint automatically.

## Troubleshooting

### Deploy Failed

Check build logs:
1. Go to **Deployments** tab
2. Click the failed deployment
3. Look for error messages
4. Common fixes:
   - Missing dependencies: Run `npm install` locally and push again
   - Build errors: Check TypeScript errors with `npm run build`

### Form Still Not Working After Deploy

1. **Clear environment variables and redeploy**
   - Make sure all env vars were saved
   - Redeploy the latest commit
   
2. **Check API endpoint**
   - Open browser DevTools (F12)
   - Go to Network tab
   - Submit the form
   - Look for POST to `/api/send-email`
   - Check response status (should be 200)

3. **Check Supabase connection**
   - Verify credentials are correct in environment variables
   - Check Supabase project is accessible
   - Verify table `contact_submissions` exists

### Email Not Sending

1. **SendGrid issues**
   - Verify API key is valid (copy-paste again)
   - Check sender domain is verified in SendGrid
   - Check SendGrid rate limits

2. **Resend issues**
   - Verify API key is valid
   - Check domain is added in Resend dashboard

3. **No email service configured**
   - This is OK! Form data still saves to Supabase
   - Email is optional, not required

## Verifying Deployment

### Check Status
```bash
# View deployment logs
vercel logs

# Check latest deployment status
vercel status
```

### Test Endpoint Manually

In browser console:
```javascript
fetch('https://your-domain.vercel.app/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test',
    email: 'test@example.com',
    business: 'Test Co',
    needs: 'Test project',
    budget: '$1,500 - $5,000',
    submittedAt: new Date().toISOString()
  })
}).then(r => r.json()).then(console.log)
```

Should return: `{ success: true, message: 'Email sent successfully' }`

## Auto-Deploy on Push

Vercel automatically redeploys when you push to GitHub. To see deployments:

1. Push code: `git push`
2. Go to Vercel dashboard → **Deployments**
3. New deployment should appear
4. Wait for it to complete (usually 2-3 minutes)

## Database Backups

Your Supabase data is automatically backed up. To export:

1. Go to Supabase dashboard
2. Click **Database** → **Backups**
3. Backups auto-created daily

## Security

✅ **What's Secure:**
- API keys in environment variables (never in code)
- Supabase RLS policies control database access
- Email API calls server-side (hidden from browser)

❌ **Don't do:**
- Don't commit `.env.local` to git (already in .gitignore)
- Don't share your API keys
- Don't expose Supabase keys in client code

## File Structure

```
app/
├── api/
│   └── send-email.js          ← Vercel API route
├── src/
│   └── lib/
│       ├── supabase.ts
│       └── contact.ts
└── .env.local                 ← Local (don't commit)
```

## Next Steps

- ✅ Deploy to Vercel
- ✅ Add environment variables
- ✅ Test the form
- ✅ Set custom domain (optional)

---

**Questions?** Check `TROUBLESHOOTING.md` or `SETUP_GUIDE.md` for more help.
