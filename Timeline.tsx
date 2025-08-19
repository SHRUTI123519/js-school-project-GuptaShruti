import { useState } from "react"
import EventMarker from "./EventMarker"
import EventModal from "./EventModal"

interface Event {
  year: number
  title: string
  description: string
}

const events: Event[] = [
  { year: 1990, title: "Event A", description: "Details of event A" },
  { year: 2000, title: "Event B", description: "Details of event B" },
  { year: 2010, title: "Event C", description: "Details of event C" },
]

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  return (
    <div className="p-4 space-y-4 flex-1">
      {events.map((e) => (
        <EventMarker
          key={e.year}
          year={e.year}
          title={e.title}
          onClick={() => setSelectedEvent(e)}
        />
      ))}

      <EventModal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        content={selectedEvent?.description || ""}
      />
    </div>
  )
}
