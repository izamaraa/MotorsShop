import {
  IconButton,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import { AiOutlineClose } from 'react-icons/ai'

import { CreateAdForm } from './CreateAdForm'

interface ModalCreateAdProps {
  isOpen: boolean
  onClose: () => void
}

export const ModalCreateAd = ({ isOpen, onClose }: ModalCreateAdProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={['md', 'lg', '2xl', '3xl']}>
      <ModalOverlay />
      <ModalContent borderRadius="8px">
        <ModalHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading
            as="h2"
            fontFamily="Lexend"
            fontWeight="500"
            fontSize="1.6rem"
            color="var(--grey1)"
          >
            Criar anuncio
          </Heading>
          <IconButton
            aria-label="Close Modal"
            onClick={onClose}
            icon={<AiOutlineClose />}
            bg="transparent"
            fontSize="1.5rem"
            fontWeight="bold"
            color="var(--grey4)"
          />
        </ModalHeader>
        <ModalBody>
          <CreateAdForm onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
