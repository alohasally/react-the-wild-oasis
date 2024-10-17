import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ocxlntlyagfwaywabpaf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jeGxudGx5YWdmd2F5d2FicGFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwMDgwODUsImV4cCI6MjA0MjU4NDA4NX0.2145FtQyuhL-TflvsYgI4DmMkad0Qz1UfeFC9UPIk8w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
