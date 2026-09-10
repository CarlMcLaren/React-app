import { createClient } from '@supabase/supabase-js';

const supbaseUrl = 'https://rbmklaynqsetkpfvnwii.supabase.co'

const supabaseAnonKey = 'sb_publishable_tJKzkQrtwD-20kMhXpBP7g_WDBnELm5'

export const supabase = createClient(supbaseUrl, supabaseAnonKey);
