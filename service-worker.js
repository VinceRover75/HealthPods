self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("healthpods-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "cap.html",
        "tele-home.html",
        "tele-pod.html",
        "confirmation.html",
        "feedback.html",
        "css/style.css",
        "js/app.js",
        "assets/map.png"
      ]);
    })
  );
});
