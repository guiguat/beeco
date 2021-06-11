import api, { updateAuth } from '../services/api'
import React, { createContext, useState, useEffect, useCallback } from 'react'
import useKeycloak, { TokenInfo } from '../hooks/useKeycloak'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

export type User = {
  cellphone: string
  email: string
  firstName: string
  description: string
  id: string
  lastName: string
  phone: string | null
  photo: string
  ratingCount: number
  ratingSum: number
}

type AuthContextType = {
  signed: boolean
  user: User | null
  setUser: (u: User) => void
  signIn: (username: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider: React.FC = ({ children }) => {
  const { getToken, refreshToken } = useKeycloak()
  const [user, setUser] = useState<User | null>(null)
  const [tokenInfo, setTokenInfo] = useState<TokenInfo | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    AsyncStorage.getItem('@tokenInfo')
      .then((res) => (res ? JSON.parse(res) : null))
      .then((storedTInfo: TokenInfo | null) => {
        if (storedTInfo) {
          setTokenInfo(storedTInfo)
          updateAuth(storedTInfo.token_type, storedTInfo.access_token)
          createInterceptors()
        }
        setLoading(false)
      })
  }, [])

  const signIn = useCallback(async (username: string, password: string) => {
    const { result, error } = await getToken(username, password)
    if (error || !result) {
      return Alert.alert(error)
    }
    updateAuth(result!.token_type, result!.access_token)
    await api
      .get('/users/me')
      .then((res) => {
        setTokenInfo(result)
        setUser(res.data)
      })
      .catch(Alert.alert)
  }, [])

  const signOut = useCallback(async () => {
    setLoading(true)
    await AsyncStorage.removeItem('@tokenInfo')
    setTokenInfo(null)
    setLoading(false)
  }, [])

  const refreshSession = useCallback(async () => {
    const { result, error } = await refreshToken(tokenInfo!.refresh_token)
    if (error || !result) signOut()
    updateAuth(result!.token_type, result!.access_token)
    setTokenInfo(result)
  }, [tokenInfo])

  const createInterceptors = () => {
    const interceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error.response ? error.response.status : null
        if (status !== 401) return Promise.reject(error)
        const originalRequest = error.config
        api.interceptors.response.eject(interceptor)
        if (!originalRequest._retry) {
          originalRequest._retry = true
          await refreshSession()
          return api(originalRequest)
        }
        await signOut()
      }
    )
  }
  return (
    <AuthContext.Provider
      value={{
        signed: !!tokenInfo && !!user,
        user,
        setUser,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
