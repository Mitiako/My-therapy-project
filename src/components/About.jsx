import React, { useState, useEffect, useRef, Suspense } from 'react'
import instagramAnimation from '../assets/animations/Instagram.json'
import aboutVideo from '../assets/video/about.mp4'

const Lottie = React.lazy(() => import('lottie-react'))

const creds = [
  { icon: '🏅', title: 'Licensed Therapist',  desc: 'Licensed Marriage and Family Therapist in Texas' },
  { icon: '🤍', title: 'Compassionate Care',   desc: 'Client-centered approach focused on your unique needs' },
  { icon: '🛡️', title: 'Safe & Confidential', desc: 'HIPAA-compliant, judgment-free environment' },
]

function InstagramBlock() {
  const [step, setStep] = useState(0)
  // 0 = hidden, 1 = lottie playing, 2 = pill expanding, 3 = done
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && step === 0) setStep(1)
      },
      { threshold: 0.8 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [step])

  useEffect(() => {
    if (step === 1) {
      setTimeout(() => setStep(2), 750 + 500)
    }
    if (step === 2) {
      setTimeout(() => setStep(3), 400)
    }
  }, [step])

  return (
    <div ref={ref} className="mt-4 h-14 flex items-center">
      {step === 0 && null}

      {step >= 1 && (
        <div className="relative flex items-center">
          {/* Lottie Instagram icon */}
          <div className="w-14 h-14 flex-shrink-0">
            <Suspense fallback={<div className="w-14 h-14" />}>
  <Lottie
    animationData={instagramAnimation}
    loop={false}
    autoplay={true}
  />
</Suspense>
          </div>

          {/* Liquid glass pill */}
          {step >= 2 && (
            <a href="https://www.instagram.com/harmonia_vitalis"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center overflow-hidden rounded-full"
              style={{
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.3)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)',
                maxWidth: step === 3 ? '180px' : '0px',
                opacity: step === 3 ? 1 : 0,
                transition: 'max-width 0.4s ease, opacity 0.4s ease',
                marginLeft: '-8px',
                paddingLeft: '16px',
                paddingRight: '16px',
                height: '40px',
                whiteSpace: 'nowrap',
              }}>
              <span className="text-sm font-medium"
                style={{ color: 'var(--color-text)' }}>
                @harmonia_vitalis
              </span>
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-py transition-colors duration-500" style={{ background: 'var(--color-bg)' }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="reveal from-left">
  <div className="relative w-full overflow-hidden rounded-2xl" style={{ height: '400px', boxShadow: 'var(--shadow-md)' }}>
    <video src={aboutVideo} autoPlay muted loop playsInline
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
  </div>

  {/* Instagram animated block */}
  <InstagramBlock />
</div>

          <div className="reveal from-right">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-terra)' }}>About Me</p>
            <h2 className="font-heading font-bold text-theme text-4xl lg:text-5xl leading-tight mb-6">
              Meet Vitalina Tarasenko
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              With years of experience in marriage and family therapy, I am dedicated to helping individuals,
              couples, and families navigate life's challenges with compassion and evidence-based practices.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              My therapeutic approach integrates cognitive-behavioral therapy, emotionally focused therapy,
              and systemic family therapy to create personalized treatment plans that honor your unique story and goals.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              I provide online-only sessions to clients throughout Texas, ensuring accessibility and convenience
              while maintaining the highest standards of professional care.
            </p>

            <div className="flex flex-col gap-5">
              {creds.map((c, i) => (
                <div key={i} className={`reveal delay-${i + 1} flex items-start gap-4`}>
                  <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center text-xl"
                    style={{ background: 'var(--color-forest-soft)' }}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-theme mb-1">{c.title}</p>
                    <p className="text-sm text-muted">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
