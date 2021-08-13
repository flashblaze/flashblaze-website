import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.GATSBY_SUPABASE_URL,
  process.env.GATSBY_SUPABASE_ANON_KEY
);

export default supabase;
