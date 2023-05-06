import { APIError } from '@/api/types'

export const hasErrorReason = (response: any): response is APIError =>
  response && response.reason
