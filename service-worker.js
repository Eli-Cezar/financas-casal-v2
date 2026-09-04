// service-worker.js
// ============================================================
// KILL SWITCH — remove o Service Worker antigo (que fazia cache
// do index.html e servia versões desatualizadas do app) de
// qualquer navegador que ainda o tenha instalado.
// ============================================================

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Apaga todos os caches criados pela versão antiga do SW
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map((name) => caches.delete(name)));

      // Cancela o próprio registro — a partir de agora o navegador
      // busca tudo direto da rede, sem nenhum Service Worker no meio.
      await self.registration.unregister();

      // Força as abas abertas a recarregar já sem o SW no controle.
      const clientsList = await self.clients.matchAll({ type: 'window' });
      clientsList.forEach((client) => client.navigate(client.url));
    })()
  );
});
