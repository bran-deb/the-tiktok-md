
import { createClient } from '@supabase/supabase-js'

//connection DB supabase
const supabaseUrl = 'https://axtmszygnxwiggrmikyf.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
