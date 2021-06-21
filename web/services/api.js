import axios from 'axios'
export const ip = '192.168.15.12'
const api = axios.create({
  baseURL: `http://${ip}:3000/api`
})
export default api 