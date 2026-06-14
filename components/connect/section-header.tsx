"use client"

import type { ReactNode } from "react"

export function SectionHeader({
  icon,
  title,
  linkLabel,
  onLink,
}: {
  icon?: ReactNode
  title: string
  linkLabel?: string
  onLink?: () => void
}) {
  return (
    <div className="mb-3.5 flex items-center justify-between">
      <h2 className="flex items-center gap-2 font-display text-[15px] font-semibold text-foreground">
        {icon}
        {title}
      </h2>
      {linkLabel && (
        <button
          type="button"
          onClick={onLink}
          className="text-xs font-medium text-primary hover:underline"
        >
          {linkLabel}
        </button>
      )}
    </div>
  )
}
