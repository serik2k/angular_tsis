// Импорт Workbox через importScripts
self.importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js'
);

if (workbox) {
  console.log('Workbox is loaded');

  // Регистрация фоновой синхронизации
  const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin(
    'postQueue',
    {
      maxRetentionTime: 24 * 60, // Хранение запросов до 24 часов
    }
  );

  // Регистрация маршрута для POST запросов
  workbox.routing.registerRoute(
    ({ url, request }) =>
      url.origin === 'http://localhost:3000' && request.method === 'POST',
    new workbox.strategies.NetworkOnly({
      plugins: [bgSyncPlugin],
    }),
    'POST'
  );

  // Обработка push-уведомлений
  self.addEventListener('push', (event) => {
    const data = event.data.json();
    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: 'assets/icons/icon-192x192.png',
      })
    );
  });
} else {
  console.error('Workbox failed to load');
}
