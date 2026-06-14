"use client"

import { Sparkles } from "lucide-react"
import { RECOMMENDED } from "@/lib/connect-data"
import { RecoCard } from "./reco-card"

export function RecommendedPage() {
  return (
    <div>
      <div className="mb-[22px] flex items-center gap-3.5 rounded-xl bg-accent px-5 py-4">
        <Sparkles className="size-6 shrink-0 text-primary" />
        <div>
          <div className="text-[13px] font-semibold text-primary">
            Conexiones sugeridas por IA
          </div>
          <div className="mt-0.5 text-xs text-[#3b82f6]">
            Basadas en tus metas, industria y desafíos del perfil. Cuanto más completo tu perfil,
            mejores sugerencias.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3">
        {RECOMMENDED.map((r) => (
          <RecoCard key={r.name} reco={r} />
        ))}
      </div>
    </div>
  )
}
