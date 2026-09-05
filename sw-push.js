// sw-push.js - Service Worker para Push Notifications com Supabase
// TODO: Registrar este SW quando reativar as notificações

self.addEventListener('install', (event) => {
  console.log('[SW-Push] Instalando...');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[SW-Push] Ativando...');
  event.waitUntil(clients.claim());
});

// Receber notificações push
self.addEventListener('push', (event) => {
  let data = {};
  try {
    data = event.data?.json() || {};
  } catch (e) {
    data = { title: 'Finanças do Casal', body: event.data?.text() || '' };
  }

  const title = data.title || 'Finanças do Casal';
  const options = {
    body: data.body || '',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: data.tag || 'financas-casal',
    data: data.data || {},
    requireInteraction: true,
    vibrate: [200, 100, 200]
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Clique na notificação
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const url = event.notification.data?.url || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === url && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});