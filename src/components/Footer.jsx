const quickLinks = ['About', 'Services', 'Testimonials', 'FAQ', 'Book a Session', 'Contact']
const legal = ['Privacy Policy', 'Terms of Service', 'Good Faith Estimate', 'HIPAA Notice']

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
            <a key={l} href="#" className="block text-sm text-white/60 hover:text-white transition-colors mb-3">{l}</a>
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
