import { TokenInfo } from './../hooks/useKeycloak'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.15.12:8080',
})
export const updateAuth = (info: TokenInfo) => {
  api.defaults.headers.common[
    'Authorization'
  ] = `${info.token_type} ${info.access_token}`
  api.defaults.headers.common['refresh_token'] = info.refresh_token
}
export default api
