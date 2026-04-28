import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://boreqwodypdvlvuvrvbl.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || 'sb_publishable_8VPz9mxXWtpnbZcw0O0OSg_GC44TBEo'

export const supabase = createClient(supabaseUrl, supabaseKey)
