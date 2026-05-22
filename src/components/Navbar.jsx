import { useState, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'

const links = [
  { href: '#about',        label: 'About' },
  { href: '#services',     label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq',          label: 'FAQ' },
  { href: '#booking',      label: 'Book a Session' },
]

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex items-center gap-1 px-1 py-1 rounded-full transition-all duration-500"
      style={{
        width: '64px',
        height: '32px',
        background: theme === 'dark'
          ? 'linear-gradient(135deg, #1a2b2b, #243535)'
          : 'linear-gradient(135deg, #87CEEB, #FDB97D)',
        border: '1.5px solid var(--color-border)',
        boxShadow: theme === 'dark'
          ? 'inset 0 1px 4px rgba(0,0,0,0.4)'
          : 'inset 0 1px 4px rgba(0,0,0,0.1)',
      }}
    >
      {/* Sun icon */}
      <span className="absolute left-1.5 text-[13px] transition-all duration-500"
        style={{ opacity: theme === 'dark' ? 0.3 : 1, transform: theme === 'dark' ? 'scale(0.7)' : 'scale(1)' }}>
        ☀️
      </span>

      {/* Moon icon */}
      <span className="absolute right-1.5 text-[13px] transition-all duration-500"
        style={{ opacity: theme === 'dark' ? 1 : 0.3, transform: theme === 'dark' ? 'scale(1)' : 'scale(0.7)' }}>
        🌙
      </span>

      {/* Sliding circle */}
      <div className="absolute top-[3px] w-[24px] h-[24px] rounded-full transition-all duration-500 flex items-center justify-center shadow-md"
        style={{
          left: theme === 'dark' ? 'calc(100% - 27px)' : '3px',
          background: theme === 'dark'
            ? 'linear-gradient(135deg, #2F4F4F, #1a2b2b)'
            : 'linear-gradient(135deg, #fff, #FFF8E7)',
        }}>
        <span className="text-[10px]">{theme === 'dark' ? '🌕' : '🌤'}</span>
      </div>
    </button>
  )
}

export default function Navbar({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4
        border-b border-theme transition-all duration-300 ${scrolled ? 'shadow-theme' : ''}`}
        style={{ background: 'var(--color-navbar)', backdropFilter: 'blur(16px)' }}>

        <a href="#" className="flex items-center gap-3" onClick={e => handleLink(e, '#hero')}>
          
<span style={{
  fontFamily: "'Fleur De Leah', cursive",
  fontSize: '42px',
  background: 'linear-gradient(135deg, #4A7C59, #C97A63, #E8A87C)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}}>
  HarmoniaVitalis
</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => handleLink(e, l.href)}
              className="text-sm text-muted hover:text-theme transition-colors font-body">{l.label}</a>
          ))}

          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          <button onClick={onBookClick}
            className="px-5 py-2.5 rounded-full text-sm font-semibold font-body transition-all hover:-translate-y-0.5"
            style={{
              background: theme === 'dark' ? 'var(--color-sage)' : 'var(--color-forest)',
              color: theme === 'dark' ? 'var(--color-forest)' : '#fff',
            }}>
            Get in Touch
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button className="flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span className={`block w-6 h-0.5 rounded transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
              style={{ background: 'var(--color-text)' }} />
            <span className={`block w-6 h-0.5 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              style={{ background: 'var(--color-text)' }} />
            <span className={`block w-6 h-0.5 rounded transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
              style={{ background: 'var(--color-text)' }} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed top-[68px] left-0 right-0 z-40 border-b border-theme flex flex-col lg:hidden"
          style={{ background: 'var(--color-navbar)', backdropFilter: 'blur(16px)' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => handleLink(e, l.href)}
              className="px-6 py-4 text-theme font-medium border-b border-theme hover:bg-theme-alt transition-colors">{l.label}</a>
          ))}
          <button onClick={() => { setMenuOpen(false); onBookClick() }}
            className="mx-6 my-4 py-3 rounded-full font-semibold text-center"
            style={{ background: theme === 'dark' ? 'var(--color-sage)' : 'var(--color-forest)', color: theme === 'dark' ? 'var(--color-forest)' : '#fff' }}>
            Get in Touch
          </button>
        </div>
      )}
    </>
  )
}
