export const REDIRECT_URL = 'http://localhost:3000'

export const getOauthUrl = (clientId: string | null) => {
  if (!clientId) return ''

  return `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}&redirect_uri=${REDIRECT_URL}`
}
