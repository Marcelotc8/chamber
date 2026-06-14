"use client"

import { EVENTS } from "@/lib/connect-data"
import { EventCard } from "./event-card"

export function EventsPage() {
  return (
    <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3">
      {EVENTS.map((e) => (
        <EventCard key={e.id} event={e} />
      ))}
    </div>
  )
}
