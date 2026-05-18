# Configuration Setup

## Required Environment Variables

The contact form requires Supabase configuration to work. Follow these steps:

### Step 1: Set Up Supabase

1. Go to [supabase.com](https://supabase.com)
2. Sign up and create a new project
3. Wait for the project to be provisioned (about 2 minutes)
4. Go to **Settings** → **API** in the left sidebar
5. Copy these two values:
   - **Project URL** (looks like `https://xxxxxxxxxxxx.supabase.co`)
   - **Anon Key** (a long string)

### Step 2: Create .env.local

In the `app` directory, create a file named `.env.local` (copy from `.env.example`):

```bash
cd app
cp .env.example .env.local
```

### Step 3: Add Your Credentials

Edit `app/.env.local` and replace the values:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here_a_very_long_string
VITE_CONTACT_EMAIL=contact.studioyugen@gmail.com
```

**Don't forget:**
- Save the file
- Restart your dev server: `npm run dev`

### Step 4: Create Database Table (One-time Setup)

1. In Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Paste this SQL and click **Run**:

```sql
CREATE TABLE contact_submissions (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
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
```

### Step 5: Test

1. Go to `http://localhost:3000/contact`
2. Fill out the form and click "Send Message"
3. Check Supabase dashboard → **Table Editor** → `contact_submissions` to see your submission

## Troubleshooting

### Error: "supabaseUrl is required"

**Solution:** You haven't configured environment variables.

```bash
# 1. Create .env.local
cp .env.example .env.local

# 2. Edit with your Supabase credentials
# 3. Save the file
# 4. Restart: npm run dev
```

### Environment variables not loading

```bash
# Restart the dev server after editing .env.local
npm run dev
```

### Can't see my Supabase credentials

```
Supabase Dashboard → Settings (⚙️) → API → 
  - Project URL ← copy this
  - Project API Keys → Anon public ← copy this
```

### Form submits but data doesn't appear in Supabase

1. Check that the table was created (SQL Editor → `contact_submissions`)
2. Check RLS policies: Table Editor → `contact_submissions` → RLS settings
3. Verify credentials in `.env.local` are correct

## Environment Variables Reference

| Variable | Required | Example |
|----------|----------|---------|
| `VITE_SUPABASE_URL` | ✅ Yes | `https://abcxyz123.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | ✅ Yes | `eyJhbGciOiJIUzI1NiIs...` |
| `VITE_CONTACT_EMAIL` | ❌ Optional | `contact@example.com` |

## Next Steps

✅ Configured Supabase → Test the form
✅ Form works locally → Deploy to Netlify/Vercel

See `app/QUICK_START.md` for deployment instructions.
