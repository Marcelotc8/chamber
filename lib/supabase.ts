import { createClient } from '@supabase/supabase-js'

// Vercel inyectará estas variables automáticamente gracias a la integración
const supabaseUrl = process.env.sb_publishable_b44gHBIM65dlsg61kb_9Ow_jn_x-Ylr!
const supabaseKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtdGlwcXZjbmh5ZGZlZWV0Y3p3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyMjY5OTgsImV4cCI6MjA5NTgwMjk5OH0.iQHS6kBupK4MYN_TEQKWzH3c_dTD3hzfqtI7XmY3kbY!

// Creamos y exportamos el cliente para poder usarlo en toda la app
export const supabase = createClient(supabaseUrl, supabaseKey)