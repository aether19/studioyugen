// Alternative: EmailJS integration (client-side only, no backend needed)
// Sign up at https://emailjs.com for a free account
// Install with: npm install @emailjs/browser

let emailjs: any = null
let emailjsLoaded = false

async function loadEmailJS() {
  if (emailjsLoaded) return emailjs !== null

  if (!emailjs) {
    try {
      // @ts-ignore
      const module = await import('@emailjs/browser')
      emailjs = module.default
    } catch (error) {
      console.warn('EmailJS not installed. Run: npm install @emailjs/browser')
      emailjsLoaded = true
      return false
    }
  }
  emailjsLoaded = true
  return true
}

export async function initializeEmailJS() {
  const loaded = await loadEmailJS()
  if (!loaded) return false

  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (publicKey) {
    emailjs.init(publicKey)
    return true
  }

  return false
}

export async function sendEmailViaEmailJS(formData: {
  name: string
  business: string
  needs: string
  budget: string
}) {
  const loaded = await loadEmailJS()
  if (!loaded) return false

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

  if (!serviceID || !templateID) {
    console.error('EmailJS configuration missing')
    return false
  }

  try {
    const response = await emailjs.send(
      serviceID,
      templateID,
      {
        to_email: import.meta.env.VITE_CONTACT_EMAIL || 'contact.studioyugen@gmail.com',
        from_name: formData.name,
        from_email: formData.name,
        business_name: formData.business || 'Not specified',
        budget: formData.budget || 'Not specified',
        message: formData.needs,
        submitted_at: new Date().toLocaleString(),
      }
    )

    return response.status === 200
  } catch (error) {
    console.error('EmailJS error:', error)
    return false
  }
}
