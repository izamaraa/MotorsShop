import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useDisclosure
} from '@chakra-ui/react'

import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '../../schemas/login'
import { useForm } from 'react-hook-form'
import { ModalAdminEditProfile } from '../../components/Modals/ModalAdminEditProfile/index';
import { ModalErrorLogin } from '../../components/Modals/ModalErrorLogin'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../providers/UserProvider'
import { Label } from '../registration/components/Label'




export interface ILoginRequest {
  email: string
  password: string
}

const Login = () => {
  useEffect(() => {
    getUser()
  }, [])


  const [loading, setLoading] = useState(false)
  const { getUser, signIn } = useUser()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginRequest>({ resolver: zodResolver(LoginSchema) })

  const {
    isOpen: isModalErrorOpen,
    onClose: onModalErrorClose,
    onOpen: onModalErrorOpen
  } = useDisclosure()

  const {
    onOpen,
    onClose: onModalEditClose,
    isOpen: isModalEditOpen
  } = useDisclosure()


  const navigateToRegister = useCallback(() => {
    navigate('/registration')
  }, [])

  const handleLogin = (data: ILoginRequest) => {
    signIn(data, onModalErrorOpen)
      .then(() => setLoading(false))
      .catch(() => setLoading(false))
  }

  return (
    <>
      <ModalAdminEditProfile isOpen={isModalEditOpen} onClose={onModalEditClose} />
      <ModalErrorLogin isOpen={isModalErrorOpen} onClose={onModalErrorClose} />
      <Flex
        w="100%"
        flexDirection="column"
        alignItems="center"
        gap="5rem"
        overflowY="hidden"
      >
        <Header onEditUserOpen={onOpen} />
        <FormControl
          w={['90%', '70%', '411px', '411px']}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'flex-start'}
          padding={'44px 48px '}
          gap={'15px'}
          borderRadius={'4px'}
          backgroundColor={'var(--grey10)'}
          as="form"
          onSubmit={handleSubmit(handleLogin)}
          color={'var(--grey0)'}
          fontWeight={600}
          fontSize={'16px'}
        >
          <h2
            style={{
              color: '#000000',
              fontWeight: '500',
              fontSize: '24px',
              lineHeight: '30px',
              fontStyle: 'normal',
              marginBottom: '10px'
            }}
          >
            Login
          </h2>
          <Label content="Usuário" />
          <Input
            w={'100%'}
            h={'48px'}
            mt="-10px"
            borderRadius={'4px'}
            isInvalid={!!errors.email}
            {...register('email')}
            placeholder={'Digitar usuário'}
          />
          {!errors.email ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormHelperText color="red">{errors.email.message}</FormHelperText>
          )}
          <Label content="Senha" />
          <Input
            w={'100%'}
            h={'48px'}
            mt="-10px"
            borderRadius={'4px'}
            isInvalid={!!errors.password}
            type="password"
            {...register('password')}
            placeholder={'Digitar senha'}
          />
          {!errors.password ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormHelperText color="red">
              {errors.password.message}
            </FormHelperText>
          )}
          <p
            style={{
              color: 'var(--grey2)',
              fontWeight: '500',
              fontSize: '14px',
              fontStyle: 'normal',
              marginLeft: '17rem',
              marginTop: '-25px'
            }}
          >
            Esqueci minha senha
          </p>
          <Button
            w={'100%'}
            h={'48px'}
            mt="21px"
            borderRadius={'4px'}
            borderStyle={'1px solid var(--grey4)'}
            backgroundColor={'var(--brand1)'}
            color={'var(--whiteFixed)'}
            fontWeight={600}
            fontSize={'16px'}
            type="submit"
          >
            Entrar
          </Button>
          <p
            style={{
              color: 'var(--grey2)',
              fontWeight: '500',
              fontSize: '14px',
              fontStyle: 'normal',
              marginLeft: '6rem',
              marginTop: '10px'
            }}
          >
            Ainda não possui uma conta?
          </p>
          <Button
            isLoading={loading}
            w={'100%'}
            h={'48px'}
            mt={'10px'}
            borderRadius={'4px'}
            border={'1px solid var(--grey4)'}
            backgroundColor={'var(--grey10)'}
            color={'var(--grey0)'}
            fontWeight={600}
            fontSize={'16px'}
            onClick={navigateToRegister}
          >
            Cadastrar
          </Button>
        </FormControl>
        <Footer />
      </Flex>
    </>
  )
}

export default Login
