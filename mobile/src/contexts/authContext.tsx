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
          refreshSession(storedTInfo.refresh_token)
          createInterceptors()
        }
        setLoading(false)
      })
  }, [])

  const signIn = async (username: string, password: string) => {
    const { result, error } = await getToken(username, password)
    if (error || !result) {
      return Alert.alert(error)
    }
    updateAuth(result)
    await api
      .get<User>('/users/me')
      .then((res) => {
        setTokenInfo(result)
        setUser(res.data)
      })
      .catch(Alert.alert)
  }

  const signOut = async () => {
    setLoading(true)
    await AsyncStorage.removeItem('@tokenInfo')
    setTokenInfo(null)
    setLoading(false)
  }

  const refreshSession = async (token: string) => {
    const { result, error } = await refreshToken(token)
    if (error || !result) return await signOut()
    updateAuth(result)
    setTokenInfo(result)
  }

  const createInterceptors = () => {
    api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error.response ? error.response.status : null
        if (status !== 401) return Promise.reject(error)
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
