import { registerSW } from 'virtual:pwa-register';

console.info("тут")

if ('serviceWorker' in navigator) {
  registerSW();
}
