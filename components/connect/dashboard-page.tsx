"use client"

import { Users, Calendar, Clock, Star } from "lucide-react"
import { CONTACTS, EVENTS, RECOMMENDED } from "@/lib/connect-data"
import { useConnect } from "./connect-context"
import { SectionHeader } from "./section-header"
import { RecoCard } from "./reco-card"
import { ContactsTable } from "./contacts-table"
import { EventCard } from "./event-card"

interface Metric {
  icon: typeof Users
  iconBg: string
  iconColor: string
  value: string
  label: string
  delta: string
  deltaColor: string
}

const METRICS: Metric[] = [
  {
    icon: Users,
    iconBg: "#EEF2FF",
    iconColor: "#4F46E5",
    value: "84",
    label: "Total contactos",
    delta: "↑ 12 este mes",
    deltaColor: "text-[#16a34a]",
  },
  {
    icon: Calendar,
    iconBg: "#E0F7F5",
    iconColor: "#0D9488",
    value: "7",
    label: "Eventos asistidos",
    delta: "↑ 2 últimos 90 días",
    deltaColor: "text-[#16a34a]",
  },
  {
    icon: Clock,
    iconBg: "#FEF3C7",
    iconColor: "#D97706",
    value: "14",
    label: "Por contactar",
    delta: "Recordatorios activos",
    deltaColor: "text-[#d97706]",
  },
  {
    icon: Star,
    iconBg: "#E8F0FE",
    iconColor: "#1A56DB",
    value: "8",
    label: "Nuevas conexiones sugeridas",
    delta: "Basado en tu perfil",
    deltaColor: "text-[#16a34a]",
  },
]

export function DashboardPage() {
  const { navigate } = useConnect()

  return (
    <div>
      <div className="mb-7 grid grid-cols-2 gap-3.5 lg:grid-cols-4">
        {METRICS.map((m) => {
          const Icon = m.icon
          return (
            <div key={m.label} className="rounded-xl border border-border bg-card px-5 py-[18px]">
              <div
                className="mb-3 flex size-9 items-center justify-center rounded-lg"
                style={{ background: m.iconBg }}
              >
                <Icon className="size-[18px]" style={{ color: m.iconColor }} />
              </div>
              <div className="font-display text-[26px] font-bold leading-none text-foreground">
                {m.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
              <div className={`mt-1.5 text-[11px] font-medium ${m.deltaColor}`}>{m.delta}</div>
            </div>
          )
        })}
      </div>

      <SectionHeader
        icon={<Star className="size-4 text-primary" />}
        title="Contactos recomendados para ti"
        linkLabel="Ver todos →"
        onLink={() => navigate("recommended")}
      />
      <div className="mb-7 grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3">
        {RECOMMENDED.slice(0, 3).map((r) => (
          <RecoCard key={r.name} reco={r} />
        ))}
      </div>

      <SectionHeader
        icon={<Users className="size-4 text-muted-foreground" />}
        title="Contactos recientes"
        linkLabel="Ver todos →"
        onLink={() => navigate("contacts")}
      />
      <div className="mb-7 overflow-hidden rounded-2xl border border-border bg-card">
        <ContactsTable contacts={CONTACTS.slice(0, 3)} />
      </div>

      <SectionHeader
        icon={<Calendar className="size-4 text-muted-foreground" />}
        title="Eventos recientes"
        linkLabel="Ver todos →"
        onLink={() => navigate("events")}
      />
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3">
        {EVENTS.slice(0, 3).map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </div>
    </div>
  )
}
