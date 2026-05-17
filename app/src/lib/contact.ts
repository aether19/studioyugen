import { supabase } from './supabase'

export interface ContactFormData {
  name: string
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
        console.error('📋 Supabase Configuration Required')
        console.log('Please follow these steps:')
        console.log('1. Go to supabase.com and create a project')
        console.log('2. Copy your Project URL and Anon Key')
        console.log('3. Create/edit app/.env.local with:')
        console.log('   VITE_SUPABASE_URL=your_url')
        console.log('   VITE_SUPABASE_ANON_KEY=your_key')
        console.log('4. Restart the dev server')
        throw new Error(e.message)
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
