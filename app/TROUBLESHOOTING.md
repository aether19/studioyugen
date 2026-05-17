# Troubleshooting Contact Form Issues

## Common Errors & Solutions

### 1. "Failed to fetch" Error

**What it means:** Your app can't connect to Supabase.

**Causes:**
- ❌ Environment variables not set
- ❌ Wrong Supabase URL or key
- ❌ Dev server not restarted after adding env vars
- ❌ Supabase server is down

**How to fix:**

**Step 1: Verify .env.local exists**
```bash
# In the app/ directory, check if .env.local file exists
ls -la .env.local

# If not, create it:
cp .env.example .env.local
```

**Step 2: Check your credentials**

Open `app/.env.local` and verify it has:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

❌ NOT like this:
```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

**Step 3: Get correct credentials**

If you're not sure about your Supabase credentials:

1. Go to **https://supabase.com** and sign in
2. Click your project
3. Go to **⚙️ Settings** (gear icon on left)
4. Click **API** tab
5. You'll see:
   - **Project URL** - Copy this
   - **Project API Keys** section → Click **Anon public** → Copy it

Paste both into `.env.local`

**Step 4: Restart dev server**

```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

**Step 5: Test again**

Go to `/contact` and try submitting the form.

---

### 2. "Supabase Configuration Required" Error

**What it means:** Environment variables are completely missing.

**How to fix:**

```bash
cd app

# Create .env.local from template
cp .env.example .env.local

# Edit it with your Supabase credentials
# Then restart: npm run dev
```

---

### 3. Form Submits But No Data Appears in Supabase

**Causes:**
- Table not created
- Wrong table name
- RLS policy blocking inserts
- Wrong Supabase project

**How to fix:**

**Check 1: Table exists**

1. Go to Supabase dashboard
2. Click **Table Editor** (left sidebar)
3. Look for `contact_submissions` table

If it doesn't exist, create it:

1. Go to **SQL Editor**
2. Copy and paste this:

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

3. Click **Run**

**Check 2: RLS Policies**

1. Go to **Table Editor** → `contact_submissions`
2. Click **RLS** button (top right)
3. You should see policy: "Allow public inserts"
4. If not, add it:

```sql
CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT WITH CHECK (true);
```

**Check 3: You're using the right project**

Make sure your `.env.local` has the correct project URL and key from the same Supabase project where you created the table.

---

### 4. Email Not Being Sent

This is optional - email only works if you set up SendGrid/Resend.

**Check:**
- Do you have `VITE_SENDGRID_API_KEY` or `VITE_RESEND_API_KEY` set?
- If not, that's OK - form data still saves to Supabase
- Email is optional, not required

To enable email:
1. Sign up at SendGrid or Resend
2. Get an API key
3. Add to `.env.local`
4. Restart dev server

---

### 5. Form Loads But I See Blank Page / Errors in Console

**Check the browser console:**

1. Press **F12** to open Developer Tools
2. Click **Console** tab
3. Look for red error messages

**Common console errors:**

| Error | Solution |
|-------|----------|
| `Cannot find module '@supabase/supabase-js'` | Run `npm install` in app/ |
| `Uncaught TypeError: supabase is undefined` | Check Supabase initialization |
| `TypeError: Failed to fetch` | See section 1 above |

---

## Debug Checklist

Before contacting support, verify:

- [ ] `.env.local` file exists in `app/` directory
- [ ] `VITE_SUPABASE_URL` is filled in (not empty)
- [ ] `VITE_SUPABASE_ANON_KEY` is filled in (not empty)
- [ ] Both values were copied from Supabase dashboard
- [ ] Dev server was restarted after editing `.env.local`
- [ ] Supabase table `contact_submissions` exists
- [ ] RLS policy "Allow public inserts" is enabled
- [ ] Browser console shows no red errors

---

## Quick Verification Steps

### Verify Supabase URL is correct

Open your `.env.local`:
- Should look like: `https://abcdef123456.supabase.co`
- NOT like: `https://your-project.supabase.co` (placeholder)

### Verify Key is correct

Open your `.env.local`:
- Should be a long string starting with `eyJ...`
- NOT empty or showing placeholder text

### Check if table exists

In Supabase dashboard:
```
Table Editor → contact_submissions → should exist
```

If not, run this in SQL Editor:
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
CREATE POLICY "Allow public inserts" ON contact_submissions FOR INSERT WITH CHECK (true);
```

### View Browser Console

Press **F12** and look at the Console tab for detailed error messages.

---

## Getting Help

When asking for help, provide:

1. **Error message** from browser console (F12)
2. **Screenshot** of Supabase Settings → API
3. **Confirmation** that you've followed troubleshooting steps above

---

## Still Stuck?

1. Check the **browser console** (F12 → Console) - it has detailed error messages
2. Verify **all checklist items** above
3. Try **restarting the dev server** (stop and run `npm run dev` again)
4. Clear your **browser cache** (Ctrl+Shift+Delete)
5. Check **Supabase status** at https://status.supabase.com

---

## File Locations Reference

```
app/
├── .env.local           ← Your secret credentials (don't commit!)
├── .env.example         ← Template (safe to commit)
├── src/
│   └── lib/
│       ├── supabase.ts  ← Supabase client config
│       └── contact.ts   ← Form submission logic
└── SETUP_INSTRUCTIONS.md  ← Full setup guide
```

---

Last updated: 2024
For more help, see `SETUP_INSTRUCTIONS.md` or `QUICK_START.md`
