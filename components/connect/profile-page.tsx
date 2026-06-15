"use client"

import { useState } from "react"
import { useConnect } from "./connect-context"
// Usamos ruta relativa por seguridad para evitar errores de compilación
import { supabase } from "../../lib/supabase" 

const labelClass = "text-xs font-medium text-secondary-foreground"
const fieldClass =
  "rounded-lg border border-border bg-card px-3 py-2.5 text-[13px] text-foreground outline-none focus:border-primary"

export function ProfilePage() {
  const { showToast } = useConnect()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      nombre_completo: formData.get("nombre_completo"),
      email: formData.get("email"),
      empresa: formData.get("empresa"),
      puesto: formData.get("puesto"),
      industria: formData.get("industria"),
      tamano_empresa: formData.get("tamano_empresa"),
      educacion: formData.get("educacion"),
      metas: formData.get("metas"),
      desafios: formData.get("desafios"),
      ayuda: formData.get("ayuda")
    }

    const { error } = await supabase.from('users').insert([data])

    setIsSubmitting(false)

    if (error) {
      console.error("Error guardando perfil:", error)
      showToast("Hubo un error al guardar el perfil")
    } else {
      showToast("Perfil guardado correctamente en la base de datos")
    }
  }

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

      <form onSubmit={handleSubmit}>
        <div className="mb-5 rounded-2xl border border-border bg-card p-6">
          <div className="mb-4 border-b border-gray-100 pb-2.5 font-display text-sm font-semibold text-foreground">
            Información personal
          </div>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Nombre completo</label>
              <input name="nombre_completo" type="text" defaultValue="Vanessa Rodríguez" className={fieldClass} required />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Email</label>
              <input name="email" type="email" defaultValue="vanessa@cortexa.ai" className={fieldClass} required />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Empresa</label>
              <input name="empresa" type="text" defaultValue="Cortexa" className={fieldClass} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Puesto</label>
              <input name="puesto" type="text" defaultValue="Fundadora & CEO" className={fieldClass} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Industria</label>
              <select name="industria" className={fieldClass} defaultValue="Tecnología / IA">
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
              <select name="tamano_empresa" className={fieldClass} defaultValue="1–10 empleados">
                <option>1–10 empleados</option>
                <option>11–50</option>
                <option>51–200</option>
                <option>200+</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className={labelClass}>¿Dónde estudiaste?</label>
              <input
                name="educacion"
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
                name="metas"
                rows={3}
                defaultValue="Escalar Cortexa a 50 clientes B2B, conseguir inversión seed, expandir a nuevos mercados en LATAM."
                className={`${fieldClass} resize-none`}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>¿Cuáles son tus principales desafíos?</label>
              <textarea
                name="desafios"
                rows={3}
                defaultValue="Financiamiento early stage, encontrar partnerships estratégicos, construir equipo de ventas."
                className={`${fieldClass} resize-none`}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>¿En qué puedes ayudar a otros miembros?</label>
              <textarea
                name="ayuda"
                rows={2}
                defaultValue="Automatización con IA, estrategias de ventas para coaches, tecnología para negocios digitales."
                className={`${fieldClass} resize-none`}
              />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 rounded-lg bg-primary px-3.5 py-2 text-[13px] font-medium text-primary-foreground transition-colors hover:brightness-95 disabled:opacity-50"
          >
            {isSubmitting ? "Guardando..." : "Guardar cambios"}
          </button>
        </div>
      </form>
    </div>
  )
}