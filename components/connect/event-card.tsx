"use client"

import { Users } from "lucide-react"
import type { ChamberEvent } from "@/lib/connect-data"
import { useConnect } from "./connect-context"

export function EventCard({ event }: { event: ChamberEvent }) {
  const { navigate } = useConnect()
  const Icon = event.icon

  return (
    <button
      type="button"
      onClick={() => navigate("event-detail", { eventId: event.id })}
      className="block overflow-hidden rounded-2xl border border-border bg-card text-left transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
    >
      <div
        className="flex h-[90px] flex-col items-center justify-center gap-1.5"
        style={{ background: event.bg }}
      >
        <Icon className="size-[30px]" style={{ color: event.color }} />
        <div
          className="text-[10px] font-bold uppercase tracking-wider"
          style={{ color: event.textColor }}
        >
          {event.topic}
        </div>
      </div>
      <div className="px-4 py-3.5">
        <div className="text-[13px] font-semibold text-foreground">{event.name}</div>
        <div className="mb-2.5 text-[11px] text-gray-400">{event.date}</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Users className="size-[13px]" />
            {event.count} contactos guardados
          </div>
          <span className="rounded-md border border-border px-2.5 py-1 text-[10px] text-muted-foreground">
            Ver →
          </span>
        </div>
      </div>
    </button>
  )
}
