import { useRef } from 'react'
import { services } from '../data'
import singleVideo from '../assets/video/single.mp4'
import coupleVideo from '../assets/video/couple.mp4'
import familyVideo from '../assets/video/family.mp4'

const videoMap = { individual: singleVideo, couples: coupleVideo, family: familyVideo }

function ServiceCard({ service, onBookClick, delay }) {
  const videoRef = useRef(null)
  const handleMouseEnter = () => videoRef.current?.play()
  const handleMouseLeave = () => {
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0 }
  }

  return (
    <div className={`reveal delay-${delay} rounded-2xl overflow-hidden flex flex-col
      hover:-translate-y-2 transition-all duration-300`}
      style={{ background: 'var(--color-surface)', boxShadow: 'var(--shadow-soft)' }}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="relative overflow-hidden" style={{ height: '240px' }}>
        <video ref={videoRef} src={videoMap[service.id]} muted loop playsInline
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-theme text-xl mb-3">{service.name}</h3>
        <p className="text-sm text-muted leading-relaxed flex-1 mb-6">{service.shortDescription}</p>
        <button onClick={() => onBookClick(service.name)}
          className="w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all text-white"
          style={{ background: 'var(--color-sage)', color: 'var(--color-forest)' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-forest)'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-sage)'; e.currentTarget.style.color = 'var(--color-forest)' }}>
          {service.cta}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function Services({ onBookClick }) {
  return (
    <section id="services" className="section-py transition-colors duration-500" style={{ background: 'var(--color-bg-alt)' }}>
      <div className="container-custom">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-theme text-4xl lg:text-5xl mb-4">Areas of Support</h2>
          <p className="text-muted text-lg leading-relaxed">
            Tailored therapeutic approaches designed to meet you exactly where you are,
            whether you're seeking individual clarity or relational harmony.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} onBookClick={onBookClick} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
