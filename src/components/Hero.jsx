export default function Hero({ onBookClick }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-[68px]">
      <div className="absolute inset-0 z-0 transition-all duration-500"
        style={{
          background: `
            radial-gradient(ellipse at 15% 60%, rgba(201,122,99,0.15) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 20%, rgba(175,199,178,0.20) 0%, transparent 55%),
            var(--color-bg)
          `
        }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest font-medium mb-6
          border border-theme text-muted
          opacity-0 animate-[fadeUp_0.8s_ease_0.1s_forwards]">
          Online Therapy in Texas
        </span>

        <h1 className="font-heading font-bold leading-tight mb-2 text-theme
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          opacity-0 animate-[fadeUp_0.8s_ease_0.3s_forwards]">
          Find clarity and{' '}
          <span className="font-semibold italic"
            style={{ color: 'var(--color-terra)' }}>
            emotional safety.
          </span>
        </h1>

        <p className="mt-6 mb-8 text-base sm:text-lg text-muted max-w-xl mx-auto leading-relaxed
          opacity-0 animate-[fadeUp_0.8s_ease_0.7s_forwards]">
          Compassionate online therapy for individuals, couples, and families.
          A dedicated space to heal, grow, and reconnect from the comfort of your home.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center
          opacity-0 animate-[fadeUp_0.8s_ease_0.9s_forwards]">
          <button onClick={onBookClick}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 text-white
              rounded-full font-semibold text-base transition-all
              hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            style={{ background: 'var(--color-forest)' }}>
            Book a Session
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button onClick={() => scrollTo('#contact')}
            className="w-full sm:w-auto flex items-center justify-center px-6 py-3.5 border-2 rounded-full
              font-semibold text-base transition-all hover:-translate-y-0.5"
            style={{ borderColor: 'var(--color-terra)', color: 'var(--color-terra)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-terra)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-terra)' }}>
            Free Consultation
          </button>
        </div>

        <p className="mt-5 text-xs text-faint tracking-wide
          opacity-0 animate-[fadeUp_0.8s_ease_1.1s_forwards]">
          Available to clients located in Texas only · Online sessions
        </p>
      </div>

      {/* Hide scroll hint on mobile to avoid overlap */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1
        opacity-0 animate-[fadeUp_0.8s_ease_1.5s_forwards]">
        <span className="text-[10px] tracking-[0.15em] text-faint">SCROLL</span>
        <div className="w-px h-12 scroll-line"
          style={{ background: 'linear-gradient(to bottom, var(--color-text-faint), transparent)' }} />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}