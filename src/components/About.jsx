import React, { useState, useEffect, useRef } from 'react'
import aboutVideo from '../assets/video/about.mp4'

const creds = [
  { icon: '🏅', title: 'Licensed Therapist',  desc: 'Licensed Marriage and Family Therapist in Texas' },
  { icon: '🤍', title: 'Compassionate Care',   desc: 'Client-centered approach focused on your unique needs' },
  { icon: '🛡️', title: 'Safe & Confidential', desc: 'HIPAA-compliant, judgment-free environment' },
]

function InstagramBlock() {
  const [step, setStep] = useState(0)
  const ref = useRef(null)
  const hasTriggered = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true
          setStep(1)
        }
      },
      { threshold: 0.8 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (step === 1) {
      // спалах відбувається на 95% анімації (10s * 0.95 = 9.5s)
      setTimeout(() => setStep(2), 9500 + 1000)
    }
    if (step === 2) {
      setTimeout(() => setStep(3), 400)
    }
  }, [step])

  return (
    <div ref={ref} className="mt-4 h-20 flex items-center">
      {step >= 1 && (
        <div className="flex items-center">

          {/* Instagram CSS icon */}
          <div style={{
            height: '64px',
            width: '64px',
            overflow: 'hidden',
            borderRadius: '14px',
            position: 'relative',
            flexShrink: 0,
            animation: step === 1 ? 'ig_animate_logo 10s forwards' : 'none',
            transform: step >= 2 ? 'scale(1)' : undefined,
          }}>
            {/* gradient background */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%',
              height: '2000px',
              background: 'linear-gradient(135deg, #5335cf 0%, #de005e 25%, #f66e48 50%, #de005e 75%, #5335cf 100%)',
              animation: step === 1 ? 'ig_animate_bg 10s forwards linear' : 'none',
            }} />

            {/* border */}
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              border: '3px #fff solid',
              borderRadius: '14px',
              width: '74%', height: '74%',
              marginTop: '-37%', marginLeft: '-37%',
              zIndex: 2,
              animation: step === 1 ? 'ig_animate_border 10s forwards' : 'none',
              transform: step >= 2 ? 'scale(1)' : undefined,
            }} />

            {/* circle */}
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              border: '3px #fff solid',
              borderRadius: '50%',
              width: '48%', height: '48%',
              marginTop: '-24%', marginLeft: '-24%',
              zIndex: 2,
              animation: step === 1 ? 'ig_animate_circle 10s forwards' : 'none',
              transform: step >= 2 ? 'scale(1)' : undefined,
            }} />

            {/* light dot */}
            <div style={{
              position: 'absolute',
              border: '2px #fff solid',
              borderRadius: '50%',
              width: '12%', height: '12%',
              right: '18%', top: '18%',
              zIndex: 2,
              animation: step === 1 ? 'ig_animate_light 10s forwards' : 'none',
              opacity: step >= 2 ? 1 : undefined,
            }} />
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
                maxWidth: step === 3 ? '200px' : '0px',
                opacity: step === 3 ? 1 : 0,
                transition: 'max-width 0.4s ease, opacity 0.4s ease',
                marginLeft: '8px',
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

      <style>{`
        @keyframes ig_animate_bg {
          0% { top: 0; }
          50% { top: -1800px; }
          95% { top: 0; }
          100% { top: 0; }
        }
        @keyframes ig_animate_logo {
          0% { transform: scale(0); border-radius: 14px; }
          5% { transform: scale(1.1); border-radius: 50%; }
          10% { transform: scale(1); border-radius: 14px; }
          94% { transform: scale(1); border-radius: 14px; }
          100% { transform: scale(1); border-radius: 14px; }
        }
        @keyframes ig_animate_border {
          0% { border-radius: 50%; transform: scale(0); opacity: 0; }
          2% { opacity: 0; }
          18% { border-radius: 14px; transform: scale(1); opacity: 1; }
          100% { border-radius: 14px; transform: scale(1); opacity: 1; }
        }
        @keyframes ig_animate_circle {
          0% { transform: scale(0); opacity: 0; }
          5% { transform: scale(0); opacity: 0; }
          10% { transform: scale(1.3); opacity: 1; }
          15% { transform: scale(1); }
          94% { transform: scale(1); background-color: transparent; }
          97% { transform: scale(1.2); background-color: #ffffff; }
          100% { transform: scale(1); background-color: transparent; }
        }
        @keyframes ig_animate_light {
          0% { opacity: 0; }
          20% { opacity: 0; }
          25% { opacity: 1; }
          94% { opacity: 1; }
          100% { opacity: 1; }
        }
      `}</style>
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
