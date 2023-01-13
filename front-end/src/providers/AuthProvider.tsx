import { useNavigate } from 'react-router';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
  Dispatch,
  useMemo,
  useCallback
} from 'react'

interface AuthContextProps {
  children: ReactNode
}

interface AuthContextData {
  token: string
  authenticated: boolean
  setAuthenticated: Dispatch<React.SetStateAction<boolean>>
  verifyAuthenticated: () => boolean
  signOut: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [authenticated, setAuthenticated] = useState(false)

  const navigate = useNavigate()

  const [token] = useState(
    () => (localStorage.getItem('tokenUser') as string) || ''
  )

  useEffect(() => {
    const token = localStorage.getItem('tokenUser')

    if (token) {
      return setAuthenticated(true)
    }
  })

  const verifyAuthenticated = useCallback(() => {
    const token = localStorage.getItem('tokenUser')

    if (token) {
      return true
    } else {
      return false
    }
  }, [])

  const signOut = useCallback(() => {
    localStorage.clear()

    return navigate('/')
  }, [])

  const authContextValues = useMemo(() => ({ authenticated, token, setAuthenticated, verifyAuthenticated, signOut }), [])

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  )
}
