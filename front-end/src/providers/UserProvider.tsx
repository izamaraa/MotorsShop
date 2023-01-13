import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'

import { useNavigate } from 'react-router'

import { IBodyEdit, IBodyEditProps, ICreateUser, ICreateUserAddress } from '../interfaces/IUser/index'
import { IPayload } from '../interfaces/payload'
import { ILoginRequest } from '../pages/login'

import jwt_decode from 'jwt-decode'
import api from '../services/api'

interface AuthContextProps {
  children: ReactNode
}

interface IUser {
  name: string
  birthDate: string
  email: string
  phone: string
  cpf: string
  bio: string
  image: string | null
  id: string
  isActive: boolean
  isSeller: boolean
}

type OpenSuccessModal = (value: boolean) => void
type OpenErrorModal = (value: boolean) => void

interface UserContextData {
  user: IUser
  signUp: (
    data: Omit<ICreateUser, 'passwordConfirm' | 'cep' | 'state' | 'city' | 'street' | 'number' | 'complement'> & ICreateUserAddress,
    onSuccessModalOpen: OpenSuccessModal,
    onErrorModalOpen: OpenErrorModal
  ) => Promise<void>
  error: string
  signIn: ({ email, password }: ILoginRequest, onModalErrorOpen: OpenErrorModal) => Promise<void>
  getUser: () => Promise<void>
  editUser: (props: IBodyEditProps) => Promise<void>
}

const UserContext = createContext<UserContextData>({} as UserContextData)

export const useUser = () => {
  const context = useContext(UserContext)

  return context
}

export const UserProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState({} as IUser)
  const [error, setError] = useState('Email ou senha inválidos')

  const navigation = useNavigate()


  const signUp = useCallback(
    async (
      data: Omit<ICreateUser, 'passwordConfirm' | 'cep' | 'state' | 'city' | 'street' | 'number' | 'complement'> & ICreateUserAddress,
      onSuccessModalOpen: OpenSuccessModal,
      onErrorModalOpen: OpenErrorModal
    ) => {
      await api
        .post('users', data)
        .then(res => {
          onSuccessModalOpen(true)
          setUser(res.data)
        })
        .catch(err => {
          onErrorModalOpen(true)
          setError(err.response.data.message)
        })
    },
    []
  )

  const getUser = useCallback(async () => {
    const tokenUser = localStorage.getItem('tokenUser');

    const currentPayload: IPayload = await jwt_decode(tokenUser!)

    const id = currentPayload.id

    await api
      .get(`/users/${id}`)
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
  }, [user])


  const signIn = useCallback(async ({ email, password }: ILoginRequest, onModalErrorOpen: OpenErrorModal) => {
    await api.post('/login', { email, password }).then(res => {
      const { token } = res.data

      localStorage.setItem('tokenUser', token);
      navigation(`/`);

      getUser()

    }).catch(err => {
      onModalErrorOpen(true)
      setError(err.response.data.message)
    })
  }, [])

  const editUser = useCallback(async (props: IBodyEditProps) => {
    const { data, id, onClose } = props

    const values = Object.values(data)
    const keys = Object.keys(data)

    const body: IBodyEdit = {}

    keys.forEach((key: string, index) => {
      if (values[index] !== undefined && values[index] !== '') {
        body[key] = values[index]
      }
    })

    await api
      .patch(`http://localhost:3000/users/${id}`, body)
      .then(res => {
        setUser(res.data)
        onClose()
      })
      .catch(err => console.log(err))
  }, [])

  const userContextValues = useMemo(() => ({ user, signUp, error, signIn, getUser, editUser }), [user, error])

  return (
    <UserContext.Provider value={userContextValues}>
      {children}
    </UserContext.Provider>
  )
}
