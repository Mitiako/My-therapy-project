const quickLinks = ['About', 'Services', 'Testimonials', 'FAQ', 'Book a Session', 'Contact']
const legal = [
  { label: 'Privacy Policy', href: 'https://docs.google.com/document/d/1YbtLDygmy0Uu2FceE53X51ZizoxQcSRSLOVtIWW1ByI/preview' },
  { label: 'Terms of Service', href: 'https://docs.google.com/document/d/1ysm7HVlVsMph4Xyg_Ah5iqBQokrI2hH0xP2qYVYueIk/preview' },
  { label: 'Good Faith Estimate', href: '#' },
  { label: 'HIPAA Notice', href: '#' },
]
export default function Footer() {
  const scrollTo = (id) => {
    const el = document.querySelector(`#${id.toLowerCase().replace(/ /g, '')}`)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' })
  }

  return (
    <footer className="py-16 px-8 transition-colors duration-500" style={{ background: '#1a2e2e', color: 'rgba(255,255,255,0.75)' }}>
      <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-12">
        <div className="flex flex-col gap-4">
  <div className="flex items-center gap-3">
    <div className="w-9 h-9 rounded-full bg-white/12 flex items-center justify-center font-heading font-bold text-white">H</div>
    <span className="font-heading font-semibold text-white text-lg">HarmoniaVitalis</span>
  </div>
  <p className="text-sm leading-relaxed max-w-xs">Professional online therapy for individuals, couples, and families. Creating a safe space for healing and growth.</p>
  <span className="inline-block px-3 py-1 border border-white/20 rounded-full text-xs text-white/50 w-fit">Licensed in Texas</span>

  {/* Contact info */}
  <div className="flex flex-col gap-2 mt-2">
    <a href="tel:+13854197573"
      className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors w-fit">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
      +1 (385) 419-7573
    </a>

    {/* Instagram */}
    <a href="https://www.instagram.com/harmonia_vitalis" target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-all w-fit group">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        className="transition-all duration-300 group-hover:stroke-[#E1306C] group-hover:scale-110">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
      <span className="transition-colors duration-300 group-hover:text-[#E1306C]">@harmonia_vitalis</span>
    </a>
  </div>
</div>
        <div>
          <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest mb-5">Quick Links</h4>
          {quickLinks.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              className="block text-sm text-white/60 hover:text-white transition-colors mb-3 text-left bg-transparent border-none cursor-pointer">
              {l}
            </button>
          ))}
        </div>
        <div>
          <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest mb-5">Legal</h4>
       {legal.map(l => (
  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
    className="block text-sm text-white/60 hover:text-white transition-colors mb-3">
    {l.label}
  </a>
))}
        </div>
      </div>
      <div className="max-w-container mx-auto mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/35"
        style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <span>© 2026 HarmoniaVitalis. All rights reserved.</span>
        <span>Designed with ❤ for Serenity.</span>
      </div>
    </footer>
  )
}
