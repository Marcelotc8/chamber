"use client"

import { ChevronLeft } from "lucide-react"
import { CONTACTS, getEventById } from "@/lib/connect-data"
import { useConnect } from "./connect-context"
import { ContactsTable } from "./contacts-table"
import { SectionHeader } from "./section-header"

export function EventDetail({ eventId }: { eventId: number }) {
  const { navigate } = useConnect()
  const event = getEventById(eventId)
  if (!event) return null

  const Icon = event.icon
  const eventContacts = CONTACTS.filter((c) => c.eventId === eventId)

  return (
    <div>
      <button
        type="button"
        onClick={() => navigate("events")}
        className="mb-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-secondary-foreground"
      >
        <ChevronLeft className="size-3.5" />
        Volver a eventos
      </button>

      <div
        className="mb-5 flex items-center gap-5 rounded-2xl px-6 py-7"
        style={{ background: event.bg }}
      >
        <div className="flex size-[60px] shrink-0 items-center justify-center rounded-2xl bg-card">
          <Icon className="size-8" style={{ color: event.color }} />
        </div>
        <div>
          <div
            className="mb-1 text-[11px] font-bold uppercase tracking-wider"
            style={{ color: event.textColor }}
          >
            {event.topic}
          </div>
          <div className="font-display text-xl font-bold text-foreground">{event.name}</div>
          <div className="mt-1 text-[13px] text-muted-foreground">
            {event.date} · {event.count} contactos guardados
          </div>
        </div>
      </div>

      <SectionHeader title="Contactos de este evento" />
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <ContactsTable
          contacts={eventContacts}
          showEvent={false}
          emptyMessage="No tienes contactos guardados de este evento todavía."
        />
      </div>
    </div>
  )
}
