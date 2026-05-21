import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import BookingBand from './components/BookingBand'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Toast from './components/Toast'
import { useModal } from './hooks/useModal'
import { useToast } from './hooks/useToast'

export default function App() {
  const { isOpen, serviceType, openModal, closeModal } = useModal()
  const { toast, showToast, hideToast } = useToast()

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    const elements = document.querySelectorAll('.reveal')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar onBookClick={() => openModal('Individual Therapy')} />
      <main>
        <Hero onBookClick={() => openModal('Individual Therapy')} />
        <About />
        <Services onBookClick={openModal} />
        <BookingBand onBookClick={() => openModal('Individual Therapy')} />
        <Testimonials />
        <FAQ />
        <Booking onSuccess={showToast} />
        <Contact onSuccess={showToast} />
      </main>
      <Footer />
      <Modal
        isOpen={isOpen}
        serviceType={serviceType}
        onClose={closeModal}
        onSuccess={showToast}
      />
      <Toast toast={toast} onHide={hideToast} />
    </>
  )
}
