import logger from '@/utils/logger';
import { registerSW } from 'virtual:pwa-register';

if ('serviceWorker' in navigator) {

  registerSW({
    immediate: true,
    onRegisterError(error) { logger.error(error) }
  }); 
}
