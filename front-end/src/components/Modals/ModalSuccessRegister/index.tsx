import {
  ModalBody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Heading,
  IconButton,
  Text,
  Button
} from '@chakra-ui/react'
import { AiOutlineClose } from 'react-icons/ai'
import { Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

interface IModalSuccessRegister {
  isOpen: boolean
  onClose: () => void
}

export const ModalSuccessRegister = ({
  isOpen,
  onClose
}: IModalSuccessRegister) => {
  const navigate = useNavigate()

  const handleNavigate = useCallback(() => {
    navigate('/login')
  }, [])

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
            Sucesso!
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
        <ModalBody py="25px">
          <Flex w="100%" flexDir="column" gap="25px">
            <Heading
              as="h2"
              fontFamily="Lexend"
              fontWeight="500"
              fontSize="1.6rem"
              color="var(--grey1)"
            >
              Sua conta foi criada com sucesso
            </Heading>

            <Text
              fontFamily="Inter"
              fontWeight="400"
              fontSize="1.6rem"
              color="var(--grey2)"
            >
              Agora você poderá ver seus negócios crescendo em grande escala
            </Text>

            <Button
              onClick={handleNavigate}
              _hover={{ bg: 'var(--brand2)' }}
              w="30%"
              h="40px"
              p="12px 20px"
              bg="var(--brand1)"
              border="1px solid var(--brand1)"
              borderRadius="4px"
              color="var(--whiteFixed)"
              fontFamily="Inter"
              fontWeight="500"
              minW="132px"
              fontSize="1.4rem"
            >
              Ir para login
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
