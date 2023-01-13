import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { useEffect } from 'react';

import { IUserEdit } from '../../../interfaces/IUser'
import { useUser } from '../../../providers/UserProvider';


interface IModalEditProps {
  isOpen: boolean
  onClose: () => void
}

export const ModalAdminEditProfile = (data: IModalEditProps) => {
  const { isOpen, onClose } = data

  const { getUser, user, editUser } = useUser()

  useEffect(() => {
    getUser()
  }, [])

  const id = user?.id

  const { handleSubmit, register } = useForm<IUserEdit>({
    mode: 'onBlur',
  })

  const onSubmit = (data: IUserEdit) => {
    editUser({ data, id, onClose })
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="2xl"
    >
      <ModalOverlay />
      <FormControl
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ModalContent>
          <ModalHeader fontSize={'1em'}>Editar perfil</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={8}>
            <FormLabel fontSize={'.8em'}>Nome</FormLabel>
            <Input
              {...register('name')}
              type={'text'}
              size="lg"
              placeholder={user?.name}
              focusBorderColor="#5126EA"
            />

            <FormLabel fontSize={'.8em'}>Email</FormLabel>
            <Input
              {...register('email')}
              type={'email'}
              size="lg"
              placeholder={user?.email}
              focusBorderColor="#5126EA"
            />

            <FormLabel fontSize={'.8em'}>Celular</FormLabel>
            <Input
              {...register('phone')}
              type={'tel'}
              size="lg"
              placeholder={user?.phone}
              focusBorderColor="#5126EA"
            />

            <FormLabel fontSize={'.8em'}>Data de nascimento</FormLabel>
            <Input
              {...register('birthDate')}
              type="date"
              size="lg"
              placeholder={user?.birthDate}
              focusBorderColor="#5126EA"
            />

            <FormLabel fontSize={'.8em'}

            >Descrição</FormLabel>
            <Textarea focusBorderColor="#5126EA" {...register('bio')} />
          </ModalBody>

          <ModalFooter>
            <Button
              height="2.5em"
              width="8em"
              mr={3}
              bgColor="var(--grey6)"
              color="var(--grey2)"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              fontSize="1em"
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button
              type='submit'
              width="12em"
              height="2.5em"
              bgColor="var(--brand1)"
              color="var(--whiteFixed)"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              fontSize="1em"
              _hover={{ bg: '#B0A6F0' }}
            >
              Salvar alterações
            </Button>
          </ModalFooter>
        </ModalContent>
      </FormControl>
    </Modal>

  )
}
