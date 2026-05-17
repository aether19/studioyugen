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
    const { data, error } = await supabase
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
