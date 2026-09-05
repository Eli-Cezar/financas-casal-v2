// supabase-config.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// ============================================================
// Configuração do Supabase
// ============================================================
const SUPABASE_URL = "https://jxrjabgoawxeewqyzjsy.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_cXjqobaTFseLRxp9KZ2B1Q_Js1h2rbW";

// Inicializa o cliente e o anexa à janela global do navegador (window)
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window.supabaseClient = supabase;

console.log("✅ Supabase inicializado globalmente!");
console.log("📡 Conectado a:", SUPABASE_URL);

// Export para uso em outros módulos
export { supabase, SUPABASE_URL, SUPABASE_ANON_KEY };