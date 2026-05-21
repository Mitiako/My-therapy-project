export default function Toast({ toast, onHide }) {
  if (!toast.visible) return null

  return (
    <div
      className={`fixed bottom-8 right-8 z-[200] max-w-sm p-5 rounded-2xl shadow-lg
        transition-all duration-400
        ${toast.isError ? 'bg-red-600' : 'bg-deep-forest'} text-white`}>
      <p className="font-heading font-semibold text-sm mb-1">{toast.title}</p>
      <p className="text-xs text-white/80">{toast.message}</p>
    </div>
  )
}
