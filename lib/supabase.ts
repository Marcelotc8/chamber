import { createClient } from '@supabase/supabase-js'

// Vercel inyectará estas variables automáticamente gracias a la integración
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Creamos y exportamos el cliente para poder usarlo en toda la app
export const supabase = createClient(supabaseUrl, supabaseKey)