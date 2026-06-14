"use client"

import { Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Recommendation } from "@/lib/connect-data"
import { useConnect } from "./connect-context"

const TOP_BAR: Record<Recommendation["matchClass"], string> = {
  "match-high": "bg-[#1a56db]",
  "match-med": "bg-[#0d9488]",
  "match-ok": "bg-[#7c3aed]",
}

const PILL: Record<Recommendation["matchClass"], string> = {
  "match-high": "bg-[#e8f0fe] text-[#1a56db]",
  "match-med": "bg-[#e0f7f5] text-[#0d9488]",
  "match-ok": "bg-[#ede9fe] text-[#7c3aed]",
}

export function RecoCard({ reco }: { reco: Recommendation }) {
  const { showToast } = useConnect()

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-[18px] transition-all hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      <div className={cn("absolute inset-x-0 top-0 h-[3px]", TOP_BAR[reco.matchClass])} />
      <div
        className={cn(
          "absolute right-3.5 top-3.5 rounded-full px-2 py-[3px] text-[10px] font-semibold",
          PILL[reco.matchClass],
        )}
      >
        {reco.match}% match
      </div>
      <div
        className="mb-2.5 flex size-[42px] items-center justify-center rounded-full text-sm font-semibold"
        style={{ background: reco.avBg, color: reco.avColor }}
      >
        {reco.initials}
      </div>
      <div className="text-sm font-semibold text-foreground">{reco.name}</div>
      <div className="mb-2.5 text-xs text-muted-foreground">{reco.title}</div>
      <div className="mb-2.5 flex flex-wrap gap-1.5">
        {reco.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-muted px-2 py-[3px] text-[10px] font-medium text-secondary-foreground"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mb-3 flex gap-1.5 rounded-md border-l-2 border-border bg-background p-2.5 text-[11px] italic leading-relaxed text-muted-foreground">
        <Lightbulb className="mt-px size-3.5 shrink-0 not-italic text-amber-500" />
        <span>{reco.why}</span>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => showToast(`Solicitud enviada a ${reco.name}`)}
          className="rounded-md bg-primary px-3 py-1.5 text-[11px] font-medium text-primary-foreground transition-colors hover:brightness-95"
        >
          Conectar
        </button>
        <button
          type="button"
          onClick={() => showToast(`Abriendo perfil de ${reco.name}`)}
          className="rounded-md border border-border bg-card px-3 py-1.5 text-[11px] font-medium text-secondary-foreground transition-colors hover:bg-background"
        >
          Ver perfil
        </button>
      </div>
    </div>
  )
}
