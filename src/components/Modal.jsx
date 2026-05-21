import { useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react'

export default function Modal({ isOpen, serviceType, onClose }) {
  const [state, handleSubmit] = useForm('mkoernqd')

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Auto close after success
  useEffect(() => {
    if (state.succeeded) {
      setTimeout(() => onClose(), 3000)
    }
  }, [state.succeeded, onClose])

  if (!isOpen) return null

  const inputStyle = {
    background: 'var(--color-bg)',
    border: '1.5px solid var(--color-border)',
    color: 'var(--color-text)'
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-enter rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        style={{ background: 'var(--color-surface)', boxShadow: 'var(--shadow-lg)' }}>

        <div className="flex items-start justify-between p-8 pb-0">
          <div>
            <h2 className="font-heading font-bold text-theme text-2xl">Book a Session</h2>
            <p className="text-sm text-faint mt-1">{serviceType}</p>
          </div>
          <button onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-theme text-xl font-light transition-all"
            style={{ background: 'var(--color-forest-soft)' }}>×</button>
        </div>

        <div className="p-8">
          {state.succeeded ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <div className="text-5xl">✅</div>
              <h3 className="font-heading font-bold text-theme text-xl">Booking Request Sent!</h3>
              <p className="text-muted text-center text-sm">Thank you! We will contact you within 24 hours to confirm your session.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="sessionType" value={serviceType} />
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-theme mb-1.5">Full Name *</label>
                <input type="text" name="clientName" placeholder="Jane Doe" required
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none font-body" style={inputStyle} />
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
                  <label className="block text-xs font-semibold uppercase tracking-wide text-theme mb-1.5">Date *</label>
                  <input type="date" name="preferredDate" required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none font-body" style={inputStyle} />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-theme mb-1.5">Time *</label>
                  <input type="time" name="preferredTime" required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none font-body" style={inputStyle} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-theme mb-1.5">Notes (Optional)</label>
                <textarea name="additionalNotes" rows={3} placeholder="Anything you'd like me to know..."
                  className="w-full px-4 py-3 rounded-2xl text-sm outline-none font-body resize-none" style={inputStyle} />
              </div>
              <button type="submit" disabled={state.submitting}
                className="w-full py-4 rounded-full font-semibold transition-all disabled:opacity-50"
                style={{ background: 'var(--color-sage)', color: 'var(--color-forest)' }}>
                {state.submitting ? 'Submitting...' : 'Submit Booking Request'}
              </button>
              <p className="text-xs text-faint text-center">* Required fields · We will confirm within 24 hours</p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
