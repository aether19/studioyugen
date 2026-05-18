import { supabase } from './supabase'

export interface ContactFormData {
  name: string
  email: string
  business: string
  needs: string
  budget: string
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Insert into Supabase
    let data = null
    let error = null

    try {
      const result = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            business: formData.business,
            needs: formData.needs,
            budget: formData.budget,
            submitted_at: new Date().toISOString(),
          },
        ])
        .select()

      data = result.data
      error = result.error
    } catch (e: any) {
      // If Supabase is not configured, show helpful error
      if (e.message && e.message.includes('Supabase is not configured')) {
        const message = '❌ Supabase Configuration Required\n\nPlease follow these steps:\n1. Go to supabase.com and create a project\n2. Copy your Project URL and Anon Key\n3. Create/edit app/.env.local with:\n   VITE_SUPABASE_URL=your_url\n   VITE_SUPABASE_ANON_KEY=your_key\n4. Restart the dev server'
        console.error(message)
        throw new Error(message)
      }

      // Handle network/fetch errors (usually CORS or bad credentials)
      if (e.message && e.message.includes('Failed to fetch')) {
        const message = '❌ Cannot connect to Supabase\n\nThis usually means:\n1. Your VITE_SUPABASE_URL is incorrect\n2. Your VITE_SUPABASE_ANON_KEY is incorrect\n3. The Supabase server is down\n\nPlease verify your .env.local credentials are correct and restart the dev server.'
        console.error(message)
        throw new Error(message)
      }

      throw e
    }

    if (error) {
      throw new Error(`Failed to submit form: ${error.message}`)
    }

    // Send email notification
    // Try different API endpoints depending on deployment platform
    const emailEndpoints = [
      '/.netlify/functions/send-email',
      '/api/send-email',
      '/api/contact/send-email',
    ]

    for (const endpoint of emailEndpoints) {
      try {
        const emailResponse = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            business: formData.business,
            needs: formData.needs,
            budget: formData.budget,
            submittedAt: new Date().toISOString(),
          }),
        })

        if (emailResponse.ok) {
          break
        }
      } catch (error) {
        console.debug(`Email endpoint ${endpoint} not available`, error)
      }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    throw error
  }
}
