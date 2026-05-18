import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabaseInstance: any = null

export const supabase = (() => {
  if (!supabaseUrl || !supabaseKey) {
    return {
      from: () => {
        throw new Error(
          '❌ Supabase is not configured. Please set environment variables:\n\n' +
          'Add to app/.env.local:\n' +
          '  VITE_SUPABASE_URL=https://your-project.supabase.co\n' +
          '  VITE_SUPABASE_ANON_KEY=your_anon_key_here\n\n' +
          'Then restart your dev server (npm run dev)'
        )
      },
    } as any
  }

  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseKey)
  }

  return supabaseInstance
})()
