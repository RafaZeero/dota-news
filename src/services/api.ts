import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://dota-news.vercel.app/api'
})
