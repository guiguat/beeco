import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.15.12:8080',
})
export const updateAuth = (type: string, token: string) => {
  api.defaults.headers.common['Authorization'] = `${type} ${token}`
}
export default api
