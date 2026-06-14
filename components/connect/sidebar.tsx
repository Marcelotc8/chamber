"use client"

import {
  LayoutGrid,
  Users,
  Star,
  Calendar,
  Clock,
  User,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useConnect, type Page, type NavigateOptions } from "./connect-context"

interface NavLink {
  page: Page
  label: string
  icon: LucideIcon
  badge?: number
  options?: NavigateOptions
}

const PRINCIPAL: NavLink[] = [
  { page: "dashboard", label: "Dashboard", icon: LayoutGrid },
  { page: "contacts", label: "Mis contactos", icon: Users },
  { page: "recommended", label: "Recomendados", icon: Star, badge: 8 },
  { page: "events", label: "Eventos", icon: Calendar },
]

const SEGUIMIENTO: NavLink[] = [
  {
    page: "contacts",
    label: "Por contactar",
    icon: Clock,
    badge: 14,
    options: { pendingOnly: true },
  },
  { page: "profile", label: "Mi perfil", icon: User },
]

function NavButton({ link }: { link: NavLink }) {
  const { page, navigate } = useConnect()
  const Icon = link.icon
  // "Por contactar" and "Mis contactos" both map to the contacts page; only
  // highlight the plain contacts link to avoid two active items at once.
  const isActive = page === link.page && !link.options?.pendingOnly

  return (
    <button
      type="button"
      onClick={() => navigate(link.page, link.options)}
      className={cn(
        "flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-[13px] font-normal text-sidebar-foreground transition-colors hover:bg-white/5 hover:text-white",
        isActive && "bg-sidebar-accent font-medium text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
      )}
    >
      <Icon className="size-4 shrink-0" />
      {link.label}
      {link.badge != null && (
        <span className="ml-auto rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-semibold text-primary-foreground">
          {link.badge}
        </span>
      )}
    </button>
  )
}

export function Sidebar() {
  return (
    <aside className="flex w-[230px] shrink-0 flex-col overflow-y-auto bg-sidebar">
      <div className="border-b border-sidebar-border px-5 pb-5 pt-6">
        <div className="mb-1 flex items-center gap-2.5">
          <div className="flex size-[34px] items-center justify-center rounded-lg bg-primary">
            <Users className="size-[18px] text-primary-foreground" />
          </div>
          <span className="font-display text-[17px] font-bold tracking-tight text-white">
            ConnectCGC
          </span>
        </div>
        <div className="pl-11 text-[11px] text-sidebar-foreground">
          Miami Chamber of Commerce
        </div>
      </div>

      <nav className="flex-1 px-2.5 py-4">
        <div className="px-2.5 pb-1.5 pt-3 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
          Principal
        </div>
        {PRINCIPAL.map((link) => (
          <NavButton key={link.label} link={link} />
        ))}
        <div className="px-2.5 pb-1.5 pt-3 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
          Seguimiento
        </div>
        {SEGUIMIENTO.map((link) => (
          <NavButton key={link.label} link={link} />
        ))}
      </nav>

      <div className="flex items-center gap-2.5 border-t border-sidebar-border p-4">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
          VR
        </div>
        <div>
          <div className="text-xs font-medium text-white">Vanessa R.</div>
          <div className="text-[11px] text-gray-500">Fundadora · Cortexa</div>
        </div>
      </div>
    </aside>
  )
}
