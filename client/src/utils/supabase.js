import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://boreqwodypdvlvuvrvbl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5dGNmbWdweWNrbWFvc21zZ2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczMTMwNzIsImV4cCI6MjA5Mjg4OTA3Mn0.GQyIzlwwWNb_G-OSCxW-LLa7pZI51qTnuzUdm54LJkQ'

export const supabase = createClient(supabaseUrl, supabaseKey)
