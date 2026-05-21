import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
  const [state, handleSubmit] = useForm('mykvwypb')

  const inputStyle = {
    background: 'var(--color-bg)',
    border: '1.5px solid var(--color-border)',
    color: 'var(--color-text)'
  }

  return (
    <section id="contact" className="section-py transition-colors duration-500" style={{ background: 'var(--color-bg-alt)' }}>
      <div className="container-custom">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-theme text-4xl lg:text-5xl mb-4">Get in Touch</h2>
          <p className="text-muted text-lg">Have questions or need more information? I'm here to help.</p>
        </div>
        <div className="rounded-3xl overflow-hidden reveal grid grid-cols-1 lg:grid-cols-[1fr_1.3fr]" style={{ boxShadow: 'var(--shadow-lg)' }}>

          {/* Info panel */}
          <div className="p-10 flex flex-col gap-8" style={{ background: '#2F4F4F' }}>
            <div>
              <h3 className="font-heading font-bold text-white text-2xl mb-3">Contact Information</h3>
              <p className="text-white/70 text-sm leading-relaxed">Whether you're ready to book a session or just have a few questions, fill out the form and I'll get back to you within 48 hours.</p>
            </div>
            {[
              { icon: '✉', label: 'Email', value: 'vitalinatarasenko@gmail.com' },
              { icon: '📹', label: 'Location', value: 'Online sessions only\nNo in-person office. Licensed in Texas.' },
            ].map((d, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center">{d.icon}</div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1">{d.label}</p>
                  <p className="text-white text-sm whitespace-pre-line">{d.value}</p>
                </div>
              </div>
            ))}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
              <h4 className="font-heading font-semibold text-white text-sm mb-4">Office Hours (CT)</h4>
              {[['Monday – Friday', '9:00 AM – 7:00 PM'], ['Saturday', '10:00 AM – 4:00 PM'], ['Sunday', 'Closed']].map(([day, hrs]) => (
                <div key={day} className="flex justify-between text-sm mb-2 last:mb-0">
                  <span className="text-white/70">{day}</span>
                  <span className="text-white font-semibold">{hrs}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="p-10" style={{ background: 'var(--color-surface)' }}>
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12">
                <div className="text-5xl">✅</div>
                <h3 className="font-heading font-bold text-theme text-2xl">Message Sent!</h3>
                <p className="text-muted text-center">Thank you for reaching out. I'll get back to you within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-theme mb-1.5">Name *</label>
                    <input type="text" name="name" placeholder="Jane Doe" required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none font-body" style={inputStyle} />
                    <ValidationError field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-theme mb-1.5">Email *</label>
                    <input type="email" name="email" placeholder="jane@example.com" required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none font-body" style={inputStyle} />
                    <ValidationError field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-theme mb-1.5">Subject *</label>
                  <input type="text" name="subject" placeholder="How can I help you?" required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none font-body" style={inputStyle} />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-theme mb-1.5">Message *</label>
                  <textarea name="message" rows={6} placeholder="Please share a brief overview of what you're looking for..." required
                    className="w-full px-4 py-3 rounded-2xl text-sm outline-none font-body resize-none" style={inputStyle} />
                  <ValidationError field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
                <button type="submit" disabled={state.submitting}
                  className="w-full py-4 text-white rounded-full font-semibold transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  style={{ background: '#2F4F4F', color: '#fff' }}>
                  {state.submitting ? 'Sending...' : 'Send Message'}
                  {!state.submitting && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                  )}
                </button>
                <p className="text-xs text-faint text-center">Please do not include sensitive medical information in this form.</p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
