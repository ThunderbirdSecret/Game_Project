import { registerSW } from 'virtual:pwa-register'
import logger from '../logger'

if ('serviceWorker' in navigator) {
  registerSW({
    immediate: true,
    onRegisterError(error) {
      logger.error(error)
    },
  })
}
