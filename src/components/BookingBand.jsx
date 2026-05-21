export default function BookingBand({ onBookClick }) {
  return (
    <section className="py-24 transition-colors duration-500" style={{ background: 'var(--color-sage)' }}>
      <div className="container-custom">
        <div className="reveal text-center max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4 text-white"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.15)' }}>
            Ready to take the first step?
          </h2>
          <p className="text-lg leading-relaxed mb-10 text-white/80">
            Schedule your 50-minute online session today. Finding the right therapist
            is a journey, and I'm here to help you begin.
          </p>
          <div className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-xl mx-auto"
            style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)' }}>
            <div className="text-left">
              <p className="font-heading font-bold text-lg text-white">Online Sessions</p>
              <p className="text-sm mt-1 text-white/80">📍 Available to clients located in Texas only.</p>
            </div>
            <button onClick={onBookClick}
              className="flex-shrink-0 px-7 py-3 rounded-full font-bold transition-all hover:-translate-y-0.5 whitespace-nowrap"
              style={{ background: 'rgba(255,255,255,0.95)', color: '#2F4F4F' }}>
              Book a Session
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
