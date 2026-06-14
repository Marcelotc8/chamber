"use client"

import { Plus, Search } from "lucide-react"
import { useConnect, type Page } from "./connect-context"

const TITLES: Record<Page, string> = {
  dashboard: "Dashboard",
  contacts: "Mis contactos",
  recommended: "Recomendados",
  events: "Eventos",
  profile: "Mi perfil",
  "event-detail": "Evento",
  "contact-detail": "Contacto",
}

export function Topbar() {
  const { page, navigate, openAddContact, search, setSearch } = useConnect()

  function handleSearch(value: string) {
    setSearch(value)
    if (value && page !== "contacts") navigate("contacts")
  }

  return (
    <header className="flex shrink-0 items-center justify-between border-b border-border bg-card px-7 py-3.5">
      <h1 className="font-display text-lg font-semibold text-foreground">
        {TITLES[page]}
      </h1>
      <div className="flex items-center gap-2.5">
        <div className="flex w-[220px] items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
          <Search className="size-[15px] shrink-0 text-muted-foreground" />
          <input
            type="text"
            value={search}
            placeholder="Buscar miembro..."
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full border-none bg-transparent text-[13px] text-foreground outline-none placeholder:text-muted-foreground"
            aria-label="Buscar miembro"
          />
        </div>
        <button
          type="button"
          onClick={openAddContact}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-[13px] font-medium text-primary-foreground transition-colors hover:brightness-95"
        >
          <Plus className="size-[15px]" />
          Agregar contacto
        </button>
      </div>
    </header>
  )
}
