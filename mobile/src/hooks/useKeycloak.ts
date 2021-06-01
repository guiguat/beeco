import axios from 'axios'
import qs from 'querystring'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useCallback } from 'react'

export type TokenInfo = {
  access_token: string
  expires_in: number
  refresh_expires_in: number
  refresh_token: string
  token_type: string
}

const keycloak = axios.create({
  baseURL:
    'http://192.168.15.12:8081/auth/realms/Beeco/protocol/openid-connect/token',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

const call = (data: any) => {
  return keycloak
    .post<TokenInfo>('/', qs.stringify({ client_id: 'beeco', ...data }))
    .then(async ({ data }) => {
      await AsyncStorage.setItem('@tokenInfo', JSON.stringify(data))
      return { result: data, error: null }
    })
    .catch((error) => {
      return {
        result: null,
        error: error.response ? error.response.data.error_description : error,
      }
    })
}

const getToken = (username: string, password: string) =>
  call({
    grant_type: 'password',
    scope: 'simple',
    username,
    password,
  })

const refreshToken = (refresh_token: string) =>
  call({
    grant_type: 'refresh_token',
    refresh_token,
  })

export default () => ({ getToken, refreshToken })
