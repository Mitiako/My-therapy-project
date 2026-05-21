import { useState, useEffect } from 'react'

export default function Modal({ isOpen, serviceType, onClose, onSuccess }) {
  const [form, setForm] = useState({ clientName: '', clientEmail: '', clientPhone: '', preferredDate: '', preferredTime: '', sessionTypePreference: serviceType || '', additionalNotes: '' })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => { setForm(f => ({ ...f, sessionTypePreference: serviceType || '' })) }, [serviceType])
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = async e => {
    e.preventDefault(); setSubmitting(true)
    await new Promise(r => setTimeout(r, 1200))
    onClose()
    onSuccess('Booking Request Sent ✓', 'Thank you! We will contact you within 24 hours to confirm your session.')
    setForm({ clientName: '', clientEmail: '', clientPhone: '', preferredDate: '', preferredTime: '', sessionTypePreference: '', additionalNotes: '' })
    setSubmitting(false)
  }

  if (!isOpen) return null

  const inputStyle = { background: 'var(--color-bg)', border: '1.5px solid var(--color-border)', color: 'var(--color-text)' }

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
            style={{ background: 'var(--color-forest-soft)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-forest)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-forest-soft)'; e.currentTarget.style.color = 'var(--color-text)' }}>
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          {[
            { label: 'Full Name *', name: 'clientName', type: 'text', placeholder: 'Jane Doe' },
            { label: 'Email Address *', name: 'clientEmail', type: 'email', placeholder: 'jane@example.com' },
            { label: 'Phone Number *', name: 'clientPhone', type: 'tel', placeholder: '+1 (555) 000-0000' },
          ].map(f => (
            <div key={f.name}>
              <label className="block text-xs font-semibold uppercase tracking-wide text-theme mb-1.5">{f.label}</label>
              <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange}
                placeholder={f.placeholder} required
                className="w-full px-4 py-3 rounded-xl text-sm outline-none font-body" style={inputStyle} />
            </div>
          ))}
          <div className="grid grid-cols-2 gap-4">
            {[{ label: 'Date *', name: 'preferredDate', type: 'date' }, { label: 'Time *', name: 'preferredTime', type: 'time' }].map(f => (
              <div key={f.name}>
                <label className="block text-xs font-semibold uppercase tracking-wide text-theme mb-1.5">{f.label}</label>
                <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none font-body" style={inputStyle} />
              </div>
            ))}
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-theme mb-1.5">Session Type *</label>
            <select name="sessionTypePreference" value={form.sessionTypePreference} onChange={handleChange} required
              className="w-full px-4 py-3 rounded-xl text-sm outline-none font-body" style={inputStyle}>
              <option value="">Select a type</option>
              <option>Individual Therapy</option>
              <option>Couples Therapy</option>
              <option>Family Therapy</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-theme mb-1.5">Notes (Optional)</label>
            <textarea name="additionalNotes" value={form.additionalNotes} onChange={handleChange} rows={3}
              placeholder="Anything you'd like me to know..."
              className="w-full px-4 py-3 rounded-2xl text-sm outline-none font-body resize-none" style={inputStyle} />
          </div>
          <button type="submit" disabled={submitting}
            className="w-full py-4 rounded-full font-semibold transition-all disabled:opacity-50"
            style={{ background: 'var(--color-sage)', color: 'var(--color-forest)' }}>
            {submitting ? 'Submitting...' : 'Submit Booking Request'}
          </button>
          <p className="text-xs text-faint text-center">* Required fields · We will confirm within 24 hours</p>
        </form>
      </div>
    </div>
  )
}
