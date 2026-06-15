"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase" // Importamos tu conexión

const labelClass = "text-xs font-medium text-secondary-foreground"
const fieldClass =
  "rounded-lg border border-border bg-card px-3 py-2.5 text-[13px] text-foreground outline-none focus:border-primary placeholder:text-muted-foreground disabled:opacity-50"

export function AddContactModal({
  open,
  onClose,
  onSave,
}: {
  open: boolean
  onClose: () => void
  onSave: () => void
}) {
  // 1. Creamos estados para cada campo del formulario
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [role, setRole] = useState("")
  const [eventId, setEventId] = useState(1) // Por defecto: 1 (Tech & Innovación)
  const [purpose, setPurpose] = useState("")
  const [next, setNext] = useState("")
  const [status, setStatus] = useState("todo") // todo | pending | done
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!open) return null

  // 2. Función que se ejecuta al darle a "Guardar"
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault() // Evita que la página recargue
    setIsSubmitting(true)

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: name,
            company: company,
            role: role,
            event_id: eventId,
            purpose: purpose,
            next: next,
            status: status
          }
        ])

      if (error) throw error

      // Limpiamos el formulario para la próxima vez
      setName("")
      setCompany("")
      setRole("")
      setPurpose("")
      setNext("")
      
      // Avisamos a la tabla que recargue y cerramos el modal
      onSave() 
      onClose()

    } catch (error) {
      console.error('Error al guardar:', error)
      alert('Hubo un error al guardar. Intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Agregar contacto"
    >
      <div className="max-h-[80vh] w-[480px] max-w-full overflow-y-auto rounded-2xl bg-card p-7">
        <div className="font-display text-[17px] font-bold text-foreground">Agregar contacto</div>
        <div className="mb-5 text-xs text-gray-400">
          Guarda a alguien que conociste en un evento del Chamber
        </div>
        
        {/* 3. Envolvemos los campos en un <form> y le asignamos nuestro handleSubmit */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Nombre</label>
              <input 
                type="text" 
                placeholder="Nombre completo" 
                className={fieldClass}
                required
                value={name}
                onChange={(e) => setName(e.target.value)} 
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Empresa</label>
              <input 
                type="text" 
                placeholder="Empresa donde trabaja" 
                className={fieldClass}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Puesto</label>
              <input 
                type="text" 
                placeholder="Director, CEO, etc." 
                className={fieldClass}
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Evento</label>
              {/* Usamos los IDs de tu array EVENTS para el valor real */}
              <select 
                className={fieldClass} 
                value={eventId}
                onChange={(e) => setEventId(Number(e.target.value))}
              >
                <option value={1}>Tech & Innovación Night</option>
                <option value={2}>Finance &amp; Growth Forum</option>
                <option value={3}>Startup &amp; Founders Mixer</option>
                <option value={4}>Real Estate Summit</option>
                <option value={5}>Health &amp; Wellness Biz</option>
                <option value={6}>Legal &amp; Business Night</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className={labelClass}>¿Para qué te sirve este contacto?</label>
              <input
                type="text"
                placeholder="Ej: Potencial cliente, alianza estratégica, inversor..."
                className={fieldClass}
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>¿Cuándo contactarlo?</label>
              <input 
                type="text" 
                placeholder="Ej: Esta semana, en 30 días..." 
                className={fieldClass}
                value={next}
                onChange={(e) => setNext(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Estado</label>
              {/* El value debe ser el string en inglés que definiste en tu type ContactStatus */}
              <select 
                className={fieldClass} 
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="todo">Por contactar</option>
                <option value="pending">En proceso (Pendiente)</option>
                <option value="done">Contactado</option>
              </select>
            </div>
          </div>
          <div className="mt-5 flex justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="rounded-lg border border-border bg-card px-3.5 py-2 text-[13px] font-medium text-secondary-foreground transition-colors hover:bg-background"
            >
              Cancelar
            </button>
            {/* 4. Cambiamos el tipo de botón a "submit" */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-primary px-3.5 py-2 text-[13px] font-medium text-primary-foreground transition-colors hover:brightness-95 disabled:opacity-70"
            >
              {isSubmitting ? "Guardando..." : "Guardar contacto"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}