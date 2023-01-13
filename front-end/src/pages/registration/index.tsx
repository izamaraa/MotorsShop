import { useEffect, useState, useCallback } from 'react';

import { ButtonGroup, FormControl, Heading, Text } from '@chakra-ui/react'
import { Flex, Box, useDisclosure } from '@chakra-ui/react'

import { ModalAdminEditProfile } from '../../components/Modals/ModalAdminEditProfile'
import { ModalSuccessRegister } from '../../components/Modals/ModalSuccessRegister'
import { ModalErrorRegister } from '../../components/Modals/ModalErrorRegister'
import { Button } from '../../components/Modals/ModalCreateAd/Button'
import { Textarea } from '../../components/Textarea'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Label } from './components/Label'

import { mask, unMask } from 'remask'
import {
  cpfPattern,
  birthDatePattern,
  cepPattern,
  phonePattern
} from '../../utils/registerMasks'

import { ICreateUser } from '../../interfaces/IUser'
import { useUser } from '../../providers/UserProvider'

import { autoCompleteAddress } from '../../utils/autoCompleteAddress'
import { formateDataToRegister } from '../../utils/formateDataToRegister';

import { createUserSchema } from '../../schemas/signUp'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const Registration = () => {
  const [accountType, setAccountType] = useState('Comprador')
  const [loading, setLoading] = useState(false)

  const [maskCpf, setMaskCpf] = useState('')
  const [maskPhone, setMaskPhone] = useState('')
  const [maskBirthDate, setMaskBirthDate] = useState('')
  const [maskCep, setMaskCep] = useState('')

  const { getUser, signUp } = useUser()

  useEffect(() => {
    getUser()
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
    setError,
    clearErrors
  } = useForm<ICreateUser>({
    resolver: zodResolver(createUserSchema)
  })

  const {
    isOpen: isSuccessModalOpen,
    onClose: onSuccessModalClose,
    onOpen: onSuccessModalOpen
  } = useDisclosure()

  const {
    isOpen: isErrorModalOpen,
    onClose: onErrorModalClose,
    onOpen: onErrorModalOpen
  } = useDisclosure()

  const {
    onOpen: onModalEditOpen,
    onClose: onModalEditClose,
    isOpen: isModalEditOpen
  } = useDisclosure()


  const handleMaskCpf = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setMaskCpf(mask(unMask(event.target.value), cpfPattern))
  }, [])


  const handleMaskPhone = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setMaskPhone(mask(unMask(event.target.value), phonePattern))
  }, [])

  const handleMaskBirthDate = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setMaskBirthDate(mask(unMask(event.target.value), birthDatePattern))
  }, [])

  const handleMaskCep = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setMaskCep(mask(unMask(event.target.value), cepPattern))
  }, [])

  const handleActiveButton = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAccountType(e.currentTarget.innerText)
  }, [])

  const handleAddress = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const manipulateForm = { clearErrors, setError, setFocus, setValue }
    autoCompleteAddress(event, manipulateForm)
  }, [])

  const handleForm = (data: ICreateUser) => {
    setLoading(true)

    const formateData = formateDataToRegister(data, accountType)

    signUp(formateData, onSuccessModalOpen, onErrorModalOpen)
      .then(() => setLoading(false))
      .catch(() => setLoading(false))
  }

  return (
    <>
      <ModalAdminEditProfile
        isOpen={isModalEditOpen}
        onClose={onModalEditClose}
      />

      <ModalSuccessRegister
        isOpen={isSuccessModalOpen}
        onClose={onSuccessModalClose}
      />
      <ModalErrorRegister
        isOpen={isErrorModalOpen}
        onClose={onErrorModalClose}
      />
      <Flex
        w="100%"
        flexDir="column"
        justifyContent="space-between"
        justifyItems="center"
        gap="35px"
      >
        <Header onEditUserOpen={onModalEditOpen} />
        <FormControl
          alignSelf="center"
          w={['90%', '70%', '411px', '411px']}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'flex-start'}
          padding={['22px 24px', '30px 35px']}
          gap="20px"
          borderRadius={'4px'}
          backgroundColor={'var(--grey10)'}
          as="form"
          onSubmit={handleSubmit(handleForm)}
        >
          <Heading as="h2" fontWeight="500" fontSize="2.4rem" lineHeight="30px">
            Cadastro
          </Heading>
          <Text
            color="#000000"
            fontWeight="500"
            fontSize="1.4rem"
            lineHeight="24px"
            fontStyle="normal"
          >
            Informações pessoais
          </Text>
          <Label content=" Nome" />
          <Input
            mt="-10px"
            error={errors.name}
            {...register('name')}
            placeholder="Ex: Samuel Leão"
          />
          <Label content="Email" />
          <Input
            mt="-10px"
            error={errors.email}
            {...register('email')}
            placeholder={'Ex: samuel@kenzie.com.br'}
          />
          <Label content="CPF" />
          <Input
            value={maskCpf}
            mt="-10px"
            error={errors.cpf}
            {...register('cpf')}
            placeholder={'000.000.000-00'}
            onChange={handleMaskCpf}
          />
          <Label content="Celular" />

          <Input
            value={maskPhone}
            mt="-10px"
            error={errors.phone}
            {...register('phone')}
            placeholder="(DDD) 90000-0000"
            onChange={handleMaskPhone}
          />
          <Label content="Data de Nascimento" />

          <Input
            value={maskBirthDate}
            mt="-10px"
            error={errors.birthDate}
            {...register('birthDate')}
            placeholder={'00/00/0000'}
            onChange={handleMaskBirthDate}
          />
          <Label content="Descrição" />

          <Textarea
            error={errors.bio}
            mt="-10px"
            {...register('bio')}
            placeholder="Digitar descrição"
            h="90px"
          />
          <Text
            color="#000000"
            fontWeight="500"
            fontSize="1.4rem"
            lineHeight="24px"
            fontStyle="normal"
            my="5px"
          >
            Informações de Endereço
          </Text>
          <Label content="CEP" />

          <Input
            onBlurCapture={handleAddress}
            value={maskCep}
            mt="-10px"
            error={errors.cep}
            {...register('cep')}
            placeholder="00000-000"
            onChange={handleMaskCep}
          />
          <Flex w="100%" gap="10px">
            <Box>
              <Label content="Estado" />

              <Input
                _disabled={{ cursor: 'not-allowed' }}
                isDisabled={true}
                title="Preencha o campo CEP"
                error={errors.state}
                {...register('state')}
                placeholder={'Digitar estado'}
              />
            </Box>

            <Box>
              <Label content="Cidade" />
              <Input
                _disabled={{ cursor: 'not-allowed' }}
                isDisabled={true}
                title="Preencha o campo CEP"
                error={errors.city}
                {...register('city')}
                placeholder="Digitar cidade"
              />
            </Box>
          </Flex>
          <Label content="Rua" />

          <Input
            _disabled={{ cursor: 'not-allowed' }}
            isDisabled={true}
            title="Preencha o campo CEP"
            mt="-10px"
            error={errors.street}
            {...register('street')}
            placeholder={'Digitar rua'}
          />
          <Flex w="100%" gap="10px">
            <Box>
              <Label content="Número" />

              <Input
                error={errors.number}
                {...register('number')}
                placeholder={'Digitar número'}
              />
            </Box>
            <Box>
              <Label content="Complemento" />

              <Input
                error={errors.complement}
                {...register('complement')}
                placeholder={'Ex: apart 307'}
              />
            </Box>
          </Flex>
          <Text
            color="#000000"
            fontWeight="500"
            fontSize="1.4rem"
            lineHeight="24px"
            fontStyle="normal"
          >
            Tipo de conta
          </Text>

          <ButtonGroup w="100%" display="flex" gap="10px">
            <Button
              fontSize={['1rem', '1.4rem']}
              w="50%"
              border="1px solid var(--grey4)"
              isActive={accountType === 'Comprador'}
              onClick={handleActiveButton}
              content="Comprador"
            />

            <Button
              fontSize={['1rem', '1.4rem']}
              isActive={accountType === 'Anunciante'}
              onClick={handleActiveButton}
              w="50%"
              border="1px solid var(--grey4)"
              content="Anunciante"
            />
          </ButtonGroup>

          <Label content="Senha" />

          <Input
            mt="-10px"
            error={errors.password}
            type="password"
            {...register('password')}
            placeholder={'Digitar Senha'}
          />

          <Label content="Confirmar senha" />
          <Input
            type="password"
            mt="-10px"
            error={errors.passwordConfirm}
            {...register('passwordConfirm')}
            placeholder={'Confirmar Senha'}
          />
          <Button
            isLoading={loading}
            display="flex"
            justifyContent="center"
            alignItems="center"
            w="100%"
            border="none"
            backgroundColor={'var(--brand1)'}
            color={'var(--whiteFixed)'}
            type="submit"
            content="Finalizar Cadastro"
          />
        </FormControl>
        <Footer />
      </Flex>
    </>
  )
}

export default Registration
