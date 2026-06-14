"use client"

import { cn } from "@/lib/utils"
import { getEventById, type Contact, type ContactStatus } from "@/lib/connect-data"
import { useConnect } from "./connect-context"

function StatusBadge({ status }: { status: ContactStatus }) {
  const config = {
    done: { color: "text-[#16a34a]", dot: "bg-[#16a34a]", label: "Contactado" },
    pending: { color: "text-[#d97706]", dot: "bg-[#d97706]", label: "Pendiente" },
    todo: { color: "text-gray-400", dot: "bg-gray-400", label: "Por contactar" },
  }[status]

  return (
    <span className={cn("inline-flex items-center gap-1.5 text-[11px] font-medium", config.color)}>
      <span className={cn("size-1.5 rounded-full", config.dot)} />
      {config.label}
    </span>
  )
}

function NextDate({ next }: { next: string }) {
  if (next === "—") return <span className="text-[11px] font-medium text-gray-300">—</span>
  if (next === "Esta semana")
    return <span className="text-[11px] font-medium text-[#16a34a]">Esta semana</span>
  return <span className="text-[11px] font-medium text-[#d97706]">{next}</span>
}

function EventChip({ contact }: { contact: Contact }) {
  const ev = getEventById(contact.eventId)
  if (!ev) return <>{contact.event}</>
  return (
    <span
      className="inline-block rounded-full px-2.5 py-[3px] text-[10px] font-semibold"
      style={{ background: ev.bg, color: ev.textColor }}
    >
      {contact.event}
    </span>
  )
}

function ContactRow({ contact, showEvent }: { contact: Contact; showEvent: boolean }) {
  const { navigate } = useConnect()
  return (
    <tr className="border-b border-gray-100 transition-colors last:border-b-0 hover:bg-background">
      <td className="px-4 py-3 align-middle">
        <div className="flex items-center gap-2.5">
          <div
            className="flex size-[30px] shrink-0 items-center justify-center rounded-full text-[11px] font-semibold"
            style={{ background: contact.avBg, color: contact.avColor }}
          >
            {contact.initials}
          </div>
          <div>
            <div className="text-[13px] font-medium text-foreground">{contact.name}</div>
            <div className="text-[11px] text-gray-400">{contact.edu}</div>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 align-middle">
        <div className="text-[13px] font-medium">{contact.company}</div>
        <div className="text-[11px] text-gray-400">{contact.role}</div>
      </td>
      {showEvent && (
        <td className="px-4 py-3 align-middle">
          <EventChip contact={contact} />
        </td>
      )}
      <td className="max-w-[130px] px-4 py-3 align-middle text-xs text-secondary-foreground">
        {contact.purpose}
      </td>
      <td className="px-4 py-3 align-middle">
        <StatusBadge status={contact.status} />
      </td>
      <td className="px-4 py-3 align-middle">
        <NextDate next={contact.next} />
      </td>
      <td className="px-4 py-3 align-middle">
        <button
          type="button"
          onClick={() => navigate("contact-detail", { contactId: contact.id })}
          className="rounded-md border border-border px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:bg-background hover:text-secondary-foreground"
        >
          Ver →
        </button>
      </td>
    </tr>
  )
}

export function ContactsTable({
  contacts,
  showEvent = true,
  emptyMessage,
}: {
  contacts: Contact[]
  showEvent?: boolean
  emptyMessage?: string
}) {
  const headClass =
    "border-b border-border bg-background px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wide text-muted-foreground"
  const colSpan = showEvent ? 7 : 6

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className={headClass}>Contacto</th>
          <th className={headClass}>Empresa · Puesto</th>
          {showEvent && <th className={headClass}>Evento</th>}
          <th className={headClass}>Propósito</th>
          <th className={headClass}>Estado</th>
          <th className={headClass}>Próximo contacto</th>
          <th className={headClass} />
        </tr>
      </thead>
      <tbody>
        {contacts.length > 0 ? (
          contacts.map((c) => <ContactRow key={c.id} contact={c} showEvent={showEvent} />)
        ) : (
          <tr>
            <td colSpan={colSpan} className="px-4 py-8 text-center text-muted-foreground">
              {emptyMessage ?? "No hay contactos para mostrar."}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
