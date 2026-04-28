import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://boreqwodypdvlvuvrvbl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvcmVxd29keXBkdmx2dXZydmJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyNzg5MTMsImV4cCI6MjA5Mjg1NDkxM30.jm7KX3TfFR6dV_BxfOi2EOzyS0GSUj-bzL_9WZYRRqo'

export const supabase = createClient(supabaseUrl, supabaseKey)
