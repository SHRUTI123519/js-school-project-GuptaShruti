interface EventMarkerProps {
  year: number
  title: string
  onClick: () => void
}

export default function EventMarker({ year, title, onClick }: EventMarkerProps) {
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={onClick}>
      <div className="w-3 h-3 rounded-full bg-blue-600" />
      <span>{year} – {title}</span>
    </div>
  )
}
