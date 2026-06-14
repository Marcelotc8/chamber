"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { CONTACTS } from "@/lib/connect-data"
import { useConnect } from "./connect-context"
import { ContactsTable } from "./contacts-table"

const CHIPS = [
  { value: "all", label: "Todos" },
  { value: "Tech", label: "⚡ Tech & Innovación" },
  { value: "Finance", label: "📊 Finance Forum" },
  { value: "Startup", label: "🚀 Startup Mixer" },
  { value: "Real Estate", label: "🏗️ Real Estate Summit" },
]

export function ContactsPage({ pendingOnly }: { pendingOnly: boolean }) {
  const { search } = useConnect()
  const [chip, setChip] = useState("all")

  let contacts = CONTACTS

  if (search.trim()) {
    const q = search.toLowerCase()
    contacts = CONTACTS.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.company.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q),
    )
  } else if (pendingOnly) {
    contacts = CONTACTS.filter((c) => c.status !== "done")
  } else if (chip !== "all") {
    contacts = CONTACTS.filter((c) => c.event.toLowerCase().includes(chip.toLowerCase()))
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      {!pendingOnly && !search.trim() && (
        <div className="flex flex-wrap items-center gap-2 border-b border-gray-100 px-[18px] py-3.5">
          <span className="mr-1 text-[11px] font-medium text-gray-400">Filtrar por evento:</span>
          {CHIPS.map((c) => (
            <button
              key={c.value}
              type="button"
              onClick={() => setChip(c.value)}
              className={cn(
                "rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-medium text-muted-foreground transition-colors hover:border-gray-400 hover:text-secondary-foreground",
                chip === c.value && "border-[#93b4fd] bg-accent text-accent-foreground hover:text-accent-foreground",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}
      <ContactsTable
        contacts={contacts}
        emptyMessage={
          search.trim()
            ? `No se encontraron contactos para "${search}".`
            : "No hay contactos para este filtro."
        }
      />
    </div>
  )
}
