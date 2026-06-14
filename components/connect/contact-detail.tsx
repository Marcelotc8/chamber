"use client"

import { useState } from "react"
import { ChevronLeft, MapPin, Phone, Mail, GraduationCap } from "lucide-react"
import { CONTACTS, getEventById, STATUS_LABELS } from "@/lib/connect-data"
import { useConnect } from "./connect-context"

function deriveEmail(name: string, company: string) {
  const handle = name.toLowerCase().replace(" ", ".")
  const domain = company.toLowerCase().replace(/[^a-z0-9]/g, "")
  return `${handle}@${domain}.com`
}

export function ContactDetail({ contactId }: { contactId: number }) {
  const { navigate, showToast } = useConnect()
  const contact = CONTACTS.find((c) => c.id === contactId)
  const ev = contact ? getEventById(contact.eventId) : undefined
  const [notes, setNotes] = useState(
    contact
      ? `Lo conocí en el panel de ${contact.event}. Muy interesado en colaboraciones. Mencionó que busca ${contact.purpose.toLowerCase()}. Seguimiento pendiente.`
      : "",
  )

  if (!contact) return null

  const metaItem = "flex items-center gap-1.5 text-xs text-muted-foreground"

  return (
    <div>
      <button
        type="button"
        onClick={() => navigate("contacts")}
        className="mb-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-secondary-foreground"
      >
        <ChevronLeft className="size-3.5" />
        Volver a contactos
      </button>

      <div className="mb-5 flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-start">
        <div
          className="flex size-16 shrink-0 items-center justify-center rounded-full text-[22px] font-semibold"
          style={{ background: contact.avBg, color: contact.avColor }}
        >
          {contact.initials}
        </div>
        <div className="flex-1">
          <div className="font-display text-xl font-bold text-foreground">{contact.name}</div>
          <div className="mb-3 text-[13px] text-muted-foreground">
            {contact.role} · {contact.company}
          </div>
          <div className="mb-3 flex flex-wrap gap-4">
            <span className={metaItem}>
              <MapPin className="size-3.5" /> Miami, FL
            </span>
            <span className={metaItem}>
              <Phone className="size-3.5" /> {contact.phone}
            </span>
            <span className={metaItem}>
              <Mail className="size-3.5" /> {deriveEmail(contact.name, contact.company)}
            </span>
            <span className={metaItem}>
              <GraduationCap className="size-3.5" /> {contact.edu}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {contact.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-muted px-2 py-[3px] text-[10px] font-medium text-secondary-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={() => showToast(`Acción registrada para ${contact.name}`)}
            className="rounded-lg bg-primary px-3.5 py-2 text-[13px] font-medium text-primary-foreground transition-colors hover:brightness-95"
          >
            Marcar como contactado
          </button>
          <button
            type="button"
            onClick={() => showToast("Recordatorio guardado")}
            className="rounded-lg border border-border bg-card px-3.5 py-2 text-[13px] font-medium text-secondary-foreground transition-colors hover:bg-background"
          >
            Agregar recordatorio
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-[18px]">
          <div className="mb-3.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Información del contacto
          </div>
          {[
            ["Empresa", contact.company],
            ["Puesto", contact.role],
            ["Conocido en", contact.event],
            ["Estado", STATUS_LABELS[contact.status]],
            ["Próximo contacto", contact.next],
            ["Propósito", contact.purpose],
          ].map(([key, val], i, arr) => (
            <div
              key={key}
              className={`flex justify-between py-1.5 text-[13px] ${
                i < arr.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <span className="text-gray-400">{key}</span>
              <span
                className="font-medium text-foreground"
                style={key === "Conocido en" && ev ? { color: ev.textColor } : undefined}
              >
                {val}
              </span>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-card p-[18px]">
          <div className="mb-3.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Notas privadas
          </div>
          <textarea
            rows={8}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Escribe aquí tus notas sobre este contacto..."
            className="w-full resize-none rounded-lg border border-border bg-background p-3 text-[13px] text-secondary-foreground outline-none focus:border-primary focus:bg-card"
          />
          <button
            type="button"
            onClick={() => showToast("Notas guardadas")}
            className="mt-2.5 rounded-lg border border-border bg-card px-3.5 py-2 text-xs font-medium text-secondary-foreground transition-colors hover:bg-background"
          >
            Guardar notas
          </button>
        </div>
      </div>
    </div>
  )
}
