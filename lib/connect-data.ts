import type { LucideIcon } from "lucide-react"
import {
  Activity,
  DollarSign,
  Rocket,
  Home,
  HeartPulse,
  Scale,
} from "lucide-react"

export type ContactStatus = "done" | "pending" | "todo"

export interface ChamberEvent {
  id: number
  name: string
  topic: string
  date: string
  /** Primary accent color (hex) for the category */
  color: string
  /** Soft background tint (hex) for the category */
  bg: string
  /** Readable text color (hex) for the category */
  textColor: string
  icon: LucideIcon
  count: number
}

export interface Contact {
  id: number
  name: string
  initials: string
  avBg: string
  avColor: string
  company: string
  role: string
  event: string
  eventId: number
  purpose: string
  status: ContactStatus
  next: string
  edu: string
  tags: string[]
  linkedin: string
  phone: string
}

export interface Recommendation {
  name: string
  initials: string
  avBg: string
  avColor: string
  title: string
  match: number
  matchClass: "match-high" | "match-med" | "match-ok"
  tags: string[]
  why: string
}

export const EVENTS: ChamberEvent[] = [
  {
    id: 1,
    name: "Tech & Innovación Night",
    topic: "TECNOLOGÍA E INNOVACIÓN",
    date: "12 mayo 2025",
    color: "#1a56db",
    bg: "#E8F0FE",
    textColor: "#1a56db",
    icon: Activity,
    count: 18,
  },
  {
    id: 2,
    name: "Finance & Growth Forum",
    topic: "FINANZAS Y NEGOCIOS",
    date: "3 abril 2025",
    color: "#d97706",
    bg: "#FEF3C7",
    textColor: "#d97706",
    icon: DollarSign,
    count: 34,
  },
  {
    id: 3,
    name: "Startup & Founders Mixer",
    topic: "EMPRENDIMIENTO",
    date: "20 marzo 2025",
    color: "#16a34a",
    bg: "#DCFCE7",
    textColor: "#16a34a",
    icon: Rocket,
    count: 22,
  },
  {
    id: 4,
    name: "Real Estate Summit",
    topic: "BIENES RAÍCES",
    date: "10 febrero 2025",
    color: "#7c3aed",
    bg: "#EDE9FE",
    textColor: "#7c3aed",
    icon: Home,
    count: 27,
  },
  {
    id: 5,
    name: "Health & Wellness Biz",
    topic: "SALUD Y BIENESTAR",
    date: "15 enero 2025",
    color: "#0d9488",
    bg: "#E0F7F5",
    textColor: "#0d9488",
    icon: HeartPulse,
    count: 15,
  },
  {
    id: 6,
    name: "Legal & Business Night",
    topic: "LEGAL Y CORPORATIVO",
    date: "5 enero 2025",
    color: "#4b5563",
    bg: "#F3F4F6",
    textColor: "#374151",
    icon: Scale,
    count: 19,
  },
]

export const CONTACTS: Contact[] = [
  {
    id: 1,
    name: "Jorge Ramírez",
    initials: "JR",
    avBg: "#E8F0FE",
    avColor: "#1a56db",
    company: "Meridian Capital",
    role: "CFO",
    event: "Finance Forum",
    eventId: 2,
    purpose: "Potencial inversor Serie A",
    status: "pending",
    next: "15 jun",
    edu: "University of Miami",
    tags: ["Finanzas", "Inversión", "VC"],
    linkedin: "linkedin.com/in/jorgeramirez",
    phone: "+1 305 555 0121",
  },
  {
    id: 2,
    name: "Sofía Méndez",
    initials: "SM",
    avBg: "#DCFCE7",
    avColor: "#16a34a",
    company: "Nova Solutions",
    role: "Head of Sales",
    event: "Tech & Innovación",
    eventId: 1,
    purpose: "Partnership canal de ventas",
    status: "done",
    next: "—",
    edu: "FIU",
    tags: ["SaaS", "Ventas", "B2B"],
    linkedin: "linkedin.com/in/sofiamendez",
    phone: "+1 786 555 0234",
  },
  {
    id: 3,
    name: "Carlos Montoya",
    initials: "CM",
    avBg: "#EDE9FE",
    avColor: "#7c3aed",
    company: "BrightPath Consulting",
    role: "Fundador",
    event: "Startup Mixer",
    eventId: 3,
    purpose: "Referidos coaches online",
    status: "todo",
    next: "Esta semana",
    edu: "University of Florida",
    tags: ["Coaching", "Consultoría", "Online"],
    linkedin: "linkedin.com/in/carlosmontoya",
    phone: "+1 305 555 0345",
  },
  {
    id: 4,
    name: "Patricia Vega",
    initials: "PV",
    avBg: "#FEF3C7",
    avColor: "#d97706",
    company: "Coral Real Estate",
    role: "VP Desarrollo",
    event: "Real Estate Summit",
    eventId: 4,
    purpose: "Alianza en proyectos residenciales",
    status: "pending",
    next: "20 jun",
    edu: "FAU",
    tags: ["Real Estate", "Desarrollos", "Miami"],
    linkedin: "linkedin.com/in/patriciavega",
    phone: "+1 954 555 0456",
  },
  {
    id: 5,
    name: "Diego Fuentes",
    initials: "DF",
    avBg: "#E0F7F5",
    avColor: "#0d9488",
    company: "HealthTech Brickell",
    role: "CEO",
    event: "Health & Wellness Biz",
    eventId: 5,
    purpose: "Integración tecnológica en salud",
    status: "todo",
    next: "Esta semana",
    edu: "MIT",
    tags: ["HealthTech", "Startup", "Wellness"],
    linkedin: "linkedin.com/in/diegofuentes",
    phone: "+1 786 555 0567",
  },
  {
    id: 6,
    name: "Laura Bermúdez",
    initials: "LB",
    avBg: "#F3F4F6",
    avColor: "#374151",
    company: "Bermúdez & Assoc.",
    role: "Managing Partner",
    event: "Legal & Business Night",
    eventId: 6,
    purpose: "Asesoría corporativa para expansión",
    status: "done",
    next: "—",
    edu: "Harvard Law",
    tags: ["Legal", "Corporativo", "M&A"],
    linkedin: "linkedin.com/in/laurabermudez",
    phone: "+1 305 555 0678",
  },
]

export const RECOMMENDED: Recommendation[] = [
  {
    name: "Marco Solís",
    initials: "MS",
    avBg: "#E8F0FE",
    avColor: "#0C447C",
    title: "Director de Expansión · TechSouth LLC",
    match: 94,
    matchClass: "match-high",
    tags: ["Fintech", "SaaS B2B", "25–50 emp."],
    why: "Comparte tu meta de escalar ventas B2B y busca alianzas tecnológicas en Miami.",
  },
  {
    name: "Laura Pérez",
    initials: "LP",
    avBg: "#DCFCE7",
    avColor: "#166534",
    title: "CEO · Bloom Digital Agency",
    match: 88,
    matchClass: "match-med",
    tags: ["Marketing", "Coaches", "1–10 emp."],
    why: "Trabaja exclusivamente con coaches de alto ticket, mismo segmento que Cortexa.",
  },
  {
    name: "Andrés Torres",
    initials: "AT",
    avBg: "#FEF3C7",
    avColor: "#92400e",
    title: "Inversionista Ángel · FIU Alumni",
    match: 81,
    matchClass: "match-ok",
    tags: ["AI Startups", "Seed", "VC"],
    why: "Invierte en startups de IA — tu desafío principal es financiamiento early stage.",
  },
  {
    name: "Natalia Ríos",
    initials: "NR",
    avBg: "#EDE9FE",
    avColor: "#4c1d95",
    title: "CMO · Latam Growth Partners",
    match: 79,
    matchClass: "match-ok",
    tags: ["Expansión LATAM", "B2B", "Mkt"],
    why: "Especialista en expansión B2B en LATAM — uno de tus objetivos para este año.",
  },
  {
    name: "Ricardo Ochoa",
    initials: "RO",
    avBg: "#E0F7F5",
    avColor: "#065f46",
    title: "Partner · Brickell Ventures",
    match: 77,
    matchClass: "match-med",
    tags: ["VC", "Pre-Seed", "EdTech/SaaS"],
    why: "Fondo enfocado en SaaS pre-seed en Miami — tu ronda objetivo.",
  },
  {
    name: "Camila Vargas",
    initials: "CV",
    avBg: "#F3F4F6",
    avColor: "#374151",
    title: "Directora Comercial · CoachPro LatAm",
    match: 74,
    matchClass: "match-ok",
    tags: ["Coaches", "High-ticket", "Automatización"],
    why: "Red de más de 200 coaches premium — posible canal de distribución para Cortexa.",
  },
]

export function getEventById(id: number): ChamberEvent | undefined {
  return EVENTS.find((e) => e.id === id)
}

export const STATUS_LABELS: Record<ContactStatus, string> = {
  done: "Contactado",
  pending: "Pendiente",
  todo: "Por contactar",
}
