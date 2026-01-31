import { useState } from 'react'

const EMAIL = 'faisins16@gmail.com'
const PHONE = '+91-8891912383'
const LINKEDIN = 'https://www.linkedin.com/in/faisin-s-muhammed-/'
const GITHUB = 'https://github.com/faisin111'

// Replace with your actual Formspree ID e.g., "xmwkloqy"
const FORM_ID = "xykjvnrw"

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (FORM_ID === 'YOUR_FORM_ID_HERE') {
      alert('Please update the FORM_ID in Contact.jsx to your Formspree ID to make this work!')
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      })

      if (response.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">Let's build something great together</p>
      <div className="contact-content">
        <p className="contact-text">
          Have a project in mind or want to chat about Flutter? Reach out — I'd love to hear from you.
        </p>
        <div className="contact-links">
          <a href={`mailto:${EMAIL}`} className="contact-link">{EMAIL}</a>
          <div className="contact-phone">
            <span className="contact-link">{PHONE}</span>
          </div>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        </div>

        {status === 'success' && (
          <div className="popup-overlay">
            <div className="popup-content">
              <span className="popup-icon">🚀</span>
              <h3 className="popup-title">Message Sent!</h3>
              <p className="popup-message">
                Thanks for reaching out! I'll get back to you shortly.
              </p>
              <button onClick={() => setStatus('idle')} className="btn btn-primary">
                Close
              </button>
            </div>
          </div>
        )}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={status === 'submitting'}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'submitting'}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={status === 'submitting'}
          />
          {status === 'error' && <p className="error-msg">Oops! Something went wrong. Please try again.</p>}
          <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

      </div>
    </section>
  )
}
