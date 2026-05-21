import aboutVideo from '../assets/video/about.mp4'

const creds = [
  { icon: '🏅', title: 'Licensed Therapist',  desc: 'Licensed Marriage and Family Therapist in Texas' },
  { icon: '🤍', title: 'Compassionate Care',   desc: 'Client-centered approach focused on your unique needs' },
  { icon: '🛡️', title: 'Safe & Confidential', desc: 'HIPAA-compliant, judgment-free environment' },
]

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
