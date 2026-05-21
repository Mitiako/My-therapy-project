import { useState } from 'react'
import { faqs } from '../data'
import chairImg from '../assets/images/chair-pillow.webp'

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid var(--color-border)' }}>
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-5 text-left
          font-heading font-semibold text-theme text-base transition-colors"
        style={{ background: 'none', border: 'none' }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--color-terra)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text)'}>
        {faq.question}
        <svg className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          style={{ color: 'var(--color-terra)' }}>
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-400 ${open ? 'max-h-48 pb-5' : 'max-h-0'}`}>
        <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section-py transition-colors duration-500" style={{ background: 'var(--color-bg-alt)' }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <div className="reveal from-left">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-terra)' }}>FAQ</p>
            <h2 className="font-heading font-bold text-theme text-4xl lg:text-5xl leading-tight mb-4">Common Questions</h2>
            <p className="text-muted leading-relaxed mb-8">
              Starting therapy can bring up many questions. I've compiled some of the most
              common ones to help you feel prepared and comfortable.
            </p>
            <div className="w-full overflow-hidden rounded-2xl" style={{ height: '280px', boxShadow: 'var(--shadow-md)' }}>
              <img src={chairImg} alt="Cozy therapy space" className="w-full h-full object-cover object-center" />
            </div>
          </div>
          <div className="reveal from-right pt-2">
            {faqs.map(faq => <FAQItem key={faq.id} faq={faq} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
