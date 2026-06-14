"use client"

import { useConnect } from "./connect-context"

const labelClass = "text-xs font-medium text-secondary-foreground"
const fieldClass =
  "rounded-lg border border-border bg-card px-3 py-2.5 text-[13px] text-foreground outline-none focus:border-primary"

export function ProfilePage() {
  const { showToast } = useConnect()

  return (
    <div className="max-w-[680px]">
      <div className="mb-5 flex items-center gap-3.5 rounded-xl bg-accent px-4 py-3.5">
        <div className="flex-1">
          <div className="mb-1.5 text-[13px] font-semibold text-primary">
            Tu perfil está al 93% — ¡casi completo!
          </div>
          <div className="h-1.5 w-full rounded-full bg-[rgba(26,86,219,0.15)]">
            <div className="h-full rounded-full bg-primary" style={{ width: "93%" }} />
          </div>
        </div>
        <div className="whitespace-nowrap text-xs font-semibold text-primary">93%</div>
      </div>

      <div className="mb-5 rounded-2xl border border-border bg-card p-6">
        <div className="mb-4 border-b border-gray-100 pb-2.5 font-display text-sm font-semibold text-foreground">
          Información personal
        </div>
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Nombre completo</label>
            <input type="text" defaultValue="Vanessa Rodríguez" className={fieldClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Email</label>
            <input type="email" defaultValue="vanessa@cortexa.ai" className={fieldClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Empresa</label>
            <input type="text" defaultValue="Cortexa" className={fieldClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Puesto</label>
            <input type="text" defaultValue="Fundadora & CEO" className={fieldClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Industria</label>
            <select className={fieldClass} defaultValue="Tecnología / IA">
              <option>Tecnología / IA</option>
              <option>Finanzas</option>
              <option>Real Estate</option>
              <option>Marketing</option>
              <option>Salud</option>
              <option>Legal</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Tamaño de empresa</label>
            <select className={fieldClass} defaultValue="1–10 empleados">
              <option>1–10 empleados</option>
              <option>11–50</option>
              <option>51–200</option>
              <option>200+</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label className={labelClass}>¿Dónde estudiaste?</label>
            <input
              type="text"
              defaultValue="Florida International University (FIU) — MS Information Systems"
              className={fieldClass}
            />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="mb-4 border-b border-gray-100 pb-2.5 font-display text-sm font-semibold text-foreground">
          Metas y desafíos
        </div>
        <div className="grid grid-cols-1 gap-3.5">
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>¿Cuáles son tus metas principales este año?</label>
            <textarea
              rows={3}
              defaultValue="Escalar Cortexa a 50 clientes B2B, conseguir inversión seed, expandir a nuevos mercados en LATAM."
              className={`${fieldClass} resize-none`}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>¿Cuáles son tus principales desafíos?</label>
            <textarea
              rows={3}
              defaultValue="Financiamiento early stage, encontrar partnerships estratégicos, construir equipo de ventas."
              className={`${fieldClass} resize-none`}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>¿En qué puedes ayudar a otros miembros?</label>
            <textarea
              rows={2}
              defaultValue="Automatización con IA, estrategias de ventas para coaches, tecnología para negocios digitales."
              className={`${fieldClass} resize-none`}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => showToast("Perfil actualizado correctamente")}
          className="mt-4 rounded-lg bg-primary px-3.5 py-2 text-[13px] font-medium text-primary-foreground transition-colors hover:brightness-95"
        >
          Guardar cambios
        </button>
      </div>
    </div>
  )
}
