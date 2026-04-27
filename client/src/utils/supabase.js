import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eytcfmgpyckmaosmsgam.supabase.co'
const supabaseKey = 'sb_publishable_8VPz9mxXWtpnbZcw0O0OSg_GC44TBEo'

export const supabase = createClient(supabaseUrl, supabaseKey)
