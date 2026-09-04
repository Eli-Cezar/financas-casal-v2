// firebase-messaging-sw.js
// ============================================================
// TODO: PUSH NOTIFICATIONS - Desativado temporariamente
// Será reativado com Edge Function do Supabase
// ============================================================

console.log('📴 Service Worker de push desativado.');
console.log('📌 TODO: Reativar com Supabase Edge Function + VAPID keys');

// Service Worker vazio apenas para manter compatibilidade
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());