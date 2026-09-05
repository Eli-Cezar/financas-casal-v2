import { supabase } from "./supabase-config.js";

// Observa mudanças de login/logout
supabase.auth.onAuthStateChange((event, session) => {
  if (event === "SIGNED_IN") {
    console.log("✅ Usuário logado:", session.user);
  }
  if (event === "SIGNED_OUT") {
    console.log("🚪 Usuário saiu");
  }
});

// Cadastro
export async function signup(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) alert("Erro no cadastro: " + error.message);
  return data;
}

// Login
export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) alert("Erro no login: " + error.message);
  return data;
}

// Logout
export async function logout() {
  await supabase.auth.signOut();
}
