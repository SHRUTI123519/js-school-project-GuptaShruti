import { createPortal } from "react-dom"

interface EventModalProps {
  isOpen: boolean
  onClose: () => void
  content: string
}

export default function EventModal({ isOpen, onClose, content }: EventModalProps) {
  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 px-2 py-1 bg-gray-200 rounded"
        >
          ❌
        </button>
        <p>{content}</p>
      </div>
    </div>,
    document.body
  )
}
