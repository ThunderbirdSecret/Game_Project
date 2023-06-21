// eslint-disable-next-line import/no-cycle
import { AppState } from '@/store/store'

export const userSelector = (state: AppState) => state.user
