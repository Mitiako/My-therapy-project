import { useForm, ValidationError } from '@formspree/react'

export default function Booking() {
  const [state, handleSubmit] = useForm('mkoernqd')

  const inputStyle = {
    background: 'var(--color-bg)',
    border: '1.5px solid var(--color-border)',
    color: 'var(--color-text)'
  }

  return (
    <section id="booking" className="section-py transition-colors duration-500" style={{ background: 'var(--color-bg)' }}>
      <div className="container-custom">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-theme text-4xl lg:text-5xl mb-4">Book Your Session</h2>
          <p className="text-muted text-lg leading-relaxed">Take the first step towards healing and growth. Schedule your 50-minute online therapy session today.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Info */}
          <div className="reveal from-left space-y-6">
            <div className="rounded-3xl p-8" style={{ background: 'var(--color-bg-alt)' }}>
              <h3 className="font-heading font-semibold text-theme text-xl mb-6">Session Details</h3>
              {[
                { icon: '⏱', title: '50-Minute Sessions', desc: 'Each session is designed to provide focused, meaningful therapeutic work.' },
                { icon: '💻', title: 'Online Only', desc: 'Secure video sessions from the comfort of your home.' },
                { icon: '📍', title: 'Texas Residents Only', desc: 'Available to clients physically located in Texas.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 mb-5 last:mb-0">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center text-xl" style={{ background: 'var(--color-forest-soft)' }}>{item.icon}</div>
                  <div>
                    <p className="font-heading font-semibold text-theme text-sm mb-1">{item.title}</p>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-3xl p-8" style={{ background: 'rgba(201,122,99,0.08)', border: '2px solid rgba(201,122,99,0.2)' }}>
              <h3 className="font-heading font-semibold text-theme text-lg mb-4">What to Expect</h3>
              <ul className="space-y-2">
                {['Confirmation email within 24 hours', 'Secure video link sent before your session', 'Confidential and HIPAA-compliant platform', 'Flexible scheduling options available'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <span style={{ color: 'var(--color-terra)' }}>•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="reveal from-right">
            {state.succeeded ? (
              <div className="rounded-3xl p-8 flex flex-col items-center justify-center gap-4 py-16"
                style={{ background: 'var(--color-bg-alt)', boxShadow: 'var(--shadow-md)' }}>
                <div className="text-5xl">✅</div>
                <h3 className="font-heading font-bold text-theme text-2xl">Booking Request Sent!</h3>
                <p className="text-muted text-center">Thank you! We will contact you within 24 hours to confirm your session.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-3xl p-8 space-y-5"
                style={{ background: 'var(--color-bg-alt)', boxShadow: 'var(--shadow-md)' }}>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-theme mb-1.5">Full Name *</label>
                  <input type="text" name="clientName" placeholder="Jane Doe" required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none font-body" style={inputStyle} />
                  <ValidationError field="clientName" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-theme mb-1.5">Email Address *</label>
                  <input type="email" name="email" placeholder="jane@example.com" required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none font-body" style={inputStyle} />
                  <ValidationError field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-theme mb-1.5">Phone Number *</label>
                  <input type="tel" name="clientPhone" placeholder="+1 (555) 000-0000" required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none font-body" style={inputStyle} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-theme mb-1.5">Preferred Date *</label>
                    <input type="date" name="preferredDate" required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none font-body" style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-theme mb-1.5">Preferred Time *</label>
                    <input type="time" name="preferredTime" required
  step="900"
  className="w-full px-4 py-3 rounded-xl text-sm outline-none font-body" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-theme mb-1.5">Session Type *</label>
                  <select name="sessionType" required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none font-body" style={inputStyle}>
                    <option value="">Select a session type</option>
                    <option>Individual Therapy</option>
                    <option>Couples Therapy</option>
                    <option>Family Therapy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-theme mb-1.5">Additional Notes (Optional)</label>
                  <textarea name="additionalNotes" rows={4} placeholder="Anything you'd like me to know..."
                    className="w-full px-4 py-3 rounded-2xl text-sm outline-none font-body resize-none" style={inputStyle} />
                </div>
                <button type="submit" disabled={state.submitting}
                  className="w-full py-4 rounded-full font-semibold transition-all disabled:opacity-50"
                  style={{ background: 'var(--color-sage)', color: 'var(--color-forest)' }}>
                  {state.submitting ? 'Submitting...' : 'Submit Booking Request'}
                </button>
                <p className="text-xs text-faint text-center">* Required fields</p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
