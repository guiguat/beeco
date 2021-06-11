import { useContext } from 'react'
import AuthContext from '../contexts/authContext'

const useAuth = () => {
  const auth = useContext(AuthContext)
  return auth
}

export default useAuth
