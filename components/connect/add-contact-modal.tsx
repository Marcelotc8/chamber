"use client"


import { useState } from "react"
import { supabase } from "@/lib/supabase" // Importamos tu conexión
const labelClass = "text-xs font-medium text-secondary-foreground"

const fieldClass =

"rounded-lg border border-border bg-card px-3 py-2.5 text-[13px] text-foreground outline-none focus:border-primary placeholder:text-muted-foreground"



export function AddContactModal({

open,

onClose,

onSave,

}: {

open: boolean

onClose: () => void

onSave: () => void

}) {

if (!open) return null



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

<div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">

<div className="flex flex-col gap-1.5">

<label className={labelClass}>Nombre</label>

<input type="text" placeholder="Nombre completo" className={fieldClass} />

</div>

<div className="flex flex-col gap-1.5">

<label className={labelClass}>Empresa</label>

<input type="text" placeholder="Empresa donde trabaja" className={fieldClass} />

</div>

<div className="flex flex-col gap-1.5">

<label className={labelClass}>Puesto</label>

<input type="text" placeholder="Director, CEO, etc." className={fieldClass} />

</div>

<div className="flex flex-col gap-1.5">

<label className={labelClass}>Evento</label>

<select className={fieldClass} defaultValue="Tech & Innovación Night">

<option>Tech & Innovación Night</option>

<option>Finance &amp; Growth Forum</option>

<option>Startup &amp; Founders Mixer</option>

<option>Real Estate Summit</option>

<option>Health &amp; Wellness Biz</option>

</select>

</div>

<div className="flex flex-col gap-1.5 sm:col-span-2">

<label className={labelClass}>¿Para qué te sirve este contacto?</label>

<input

type="text"

placeholder="Ej: Potencial cliente, alianza estratégica, inversor..."

className={fieldClass}

/>

</div>

<div className="flex flex-col gap-1.5">

<label className={labelClass}>¿Cuándo contactarlo?</label>

<input type="text" placeholder="Ej: Esta semana, en 30 días..." className={fieldClass} />

</div>

<div className="flex flex-col gap-1.5">

<label className={labelClass}>Estado</label>

<select className={fieldClass} defaultValue="Por contactar">

<option>Por contactar</option>

<option>Contactado</option>

<option>En proceso</option>

</select>

</div>

</div>

<div className="mt-5 flex justify-end gap-2.5">

<button

type="button"

onClick={onClose}

className="rounded-lg border border-border bg-card px-3.5 py-2 text-[13px] font-medium text-secondary-foreground transition-colors hover:bg-background"

>

Cancelar

</button>

<button

type="button"

onClick={onSave}

className="rounded-lg bg-primary px-3.5 py-2 text-[13px] font-medium text-primary-foreground transition-colors hover:brightness-95"

>

Guardar contacto

</button>

</div>

</div>

</div>

)

} 

