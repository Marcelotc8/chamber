"use client"

import { createContext, useContext } from "react"

export type Page =
  | "dashboard"
  | "contacts"
  | "recommended"
  | "events"
  | "profile"
  | "event-detail"
  | "contact-detail"

export interface NavigateOptions {
  pendingOnly?: boolean
  contactId?: number
  eventId?: number
}

interface ConnectContextValue {
  page: Page
  navigate: (page: Page, options?: NavigateOptions) => void
  showToast: (message: string) => void
  openAddContact: () => void
  search: string
  setSearch: (value: string) => void
}

export const ConnectContext = createContext<ConnectContextValue | null>(null)

export function useConnect() {
  const ctx = useContext(ConnectContext)
  if (!ctx) {
    throw new Error("useConnect must be used within ConnectContext.Provider")
  }
  return ctx
}
