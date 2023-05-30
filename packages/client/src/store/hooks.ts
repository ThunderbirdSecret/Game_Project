import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppState, AppDispatch } from './store'

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
