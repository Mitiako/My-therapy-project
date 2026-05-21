import { useState } from 'react'

export function useModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [serviceType, setServiceType] = useState('Individual Therapy')

  const openModal = (type = 'Individual Therapy') => {
    setServiceType(type)
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }

  return { isOpen, serviceType, openModal, closeModal }
}
