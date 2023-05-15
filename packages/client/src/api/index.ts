import axios from 'axios'

// export const BASE_URL = import.meta.env.VITE_API_URL
export const BASE_URL = 'https://ya-praktikum.tech/api/v2'
export const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})
