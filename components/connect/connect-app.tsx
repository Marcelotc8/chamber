"use client"

import { useCallback, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { ConnectContext, type NavigateOptions, type Page } from "./connect-context"
import { Sidebar } from "./sidebar"
import { Topbar } from "./topbar"
import { DashboardPage } from "./dashboard-page"
import { ContactsPage } from "./contacts-page"
import { RecommendedPage } from "./recommended-page"
import { EventsPage } from "./events-page"
import { ContactDetail } from "./contact-detail"
import { EventDetail } from "./event-detail"
import { ProfilePage } from "./profile-page"
import { AddContactModal } from "./add-contact-modal"

export function ConnectApp() {
  const [page, setPage] = useState<Page>("dashboard")
  const [pendingOnly, setPendingOnly] = useState(false)
  const [activeContact, setActiveContact] = useState<number | null>(null)
  const [activeEvent, setActiveEvent] = useState<number | null>(null)
  const [search, setSearch] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const navigate = useCallback((next: Page, options?: NavigateOptions) => {
    setPage(next)
    setPendingOnly(Boolean(options?.pendingOnly))
    if (options?.contactId != null) setActiveContact(options.contactId)
    if (options?.eventId != null) setActiveEvent(options.eventId)
    if (next !== "contacts") setSearch("")
    contentRef.current?.scrollTo(0, 0)
  }, [])

  const showToast = useCallback((message: string) => {
    setToast(message)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 2800)
  }, [])

  const openAddContact = useCallback(() => setModalOpen(true), [])

  return (
    <ConnectContext.Provider
      value={{ page, navigate, showToast, openAddContact, search, setSearch }}
    >
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Topbar />
          <main ref={contentRef} className="flex-1 overflow-y-auto px-7 py-6">
            {page === "dashboard" && <DashboardPage />}
            {page === "contacts" && <ContactsPage pendingOnly={pendingOnly} />}
            {page === "recommended" && <RecommendedPage />}
            {page === "events" && <EventsPage />}
            {page === "profile" && <ProfilePage />}
            {page === "contact-detail" && activeContact != null && (
              <ContactDetail contactId={activeContact} />
            )}
            {page === "event-detail" && activeEvent != null && (
              <EventDetail eventId={activeEvent} />
            )}
          </main>
        </div>
      </div>

      <AddContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={() => {
          setModalOpen(false)
          showToast("Contacto guardado correctamente")
        }}
      />

      <div
        className={cn(
          "fixed bottom-5 right-5 z-[60] rounded-xl bg-foreground px-4 py-3 text-[13px] font-medium text-background transition-all",
          toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-20 opacity-0",
        )}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
    </ConnectContext.Provider>
  )
}
