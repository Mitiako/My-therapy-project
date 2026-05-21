import { useState, useCallback } from 'react'

export function useToast() {
  const [toast, setToast] = useState({ visible: false, title: '', message: '', isError: false })

  const showToast = useCallback((title, message, isError = false) => {
    setToast({ visible: true, title, message, isError })
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 4000)
  }, [])

  const hideToast = useCallback(() => {
    setToast(t => ({ ...t, visible: false }))
  }, [])

  return { toast, showToast, hideToast }
}
