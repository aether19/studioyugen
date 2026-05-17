# 🚀 Contact Form Setup - Quick Guide

## The Error You're Seeing

```
Error: supabaseUrl is required.
```

This means **you need to configure Supabase**. Don't worry, it's easy!

---

## 3 Simple Steps

### 1️⃣ Get Supabase Credentials (2 minutes)

1. Go to **https://supabase.com** and sign up (free)
2. Click **"New Project"** 
3. Wait for it to provision (about 2 minutes)
4. Go to **⚙️ Settings** → **API** in the left menu
5. Copy these two things:
   ```
   Your Project URL:   https://xxx.supabase.co
   Your Anon Key:      eyJhbGciOi...
   ```

### 2️⃣ Add Them to Your Project (1 minute)

Create a file in the `app` folder called **`.env.local`** and paste:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
VITE_CONTACT_EMAIL=contact.studioyugen@gmail.com
```

**Save the file** ✅

### 3️⃣ Restart and Test (1 minute)

1. Stop your dev server (Ctrl+C)
2. Run: `npm run dev`
3. Go to http://localhost:3000/contact
4. **Fill out the form and click "Send Message"**
5. ✅ Form should work now!

---

## Verify It Worked

### Check Your Data Saved

1. Go to **supabase.com** → Your project
2. Click **Table Editor** in left sidebar
3. Click `contact_submissions` 
4. You should see your form data there ✅

---

## Still Getting an Error?

### Issue: "Can't find my Supabase URL"

Go to Supabase dashboard:
```
Settings (⚙️ icon) → API → 
  ↓
  Project URL ← copy this
  
  Anon public ← copy this
```

### Issue: "Environment variables not loading"

1. Make sure file is named **exactly**: `.env.local` (not `.env` or `.env.txt`)
2. Save the file
3. **Restart your dev server** (`npm run dev`)

### Issue: "Form submits but no data in Supabase"

Create the database table:

1. In Supabase, go to **SQL Editor**
2. Copy this entire SQL code:

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

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT WITH CHECK (true);
```

3. Click **Run** ✅

---

## What You'll Have

✅ Form saves to Supabase database  
✅ Email notifications (optional, comes later)  
✅ Form clears after submission  
✅ Success/error messages  

---

## Next Steps

Once this works locally:

1. **Deploy** to Netlify or Vercel
2. **Set environment variables** in deployment dashboard
3. See `app/SETUP_INSTRUCTIONS.md` for email setup

---

## File Locations Reference

```
your-project/
├── app/
│   ├── .env.local           ← Create this file here
│   ├── .env.example         ← Copy from this
│   └── src/
│       └── lib/
│           ├── supabase.ts  ← Configuration
│           └── contact.ts   ← Form logic
```

---

**Status**: You should be ready to go! 🎉

If stuck, check the browser console (F12 → Console) for helpful error messages.
