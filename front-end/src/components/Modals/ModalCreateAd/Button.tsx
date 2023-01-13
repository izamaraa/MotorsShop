import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps
} from '@chakra-ui/react'
import { MouseEvent } from 'react'

interface ButtonProps extends ChakraButtonProps {
  handleClick?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void
  content: string
  activeItem?: string
  activeVehicle?: string
  isActive?: boolean
}

export const Button = ({
  content,
  handleClick,
  activeItem,
  activeVehicle,
  isActive,
  ...rest
}: ButtonProps) => {
  return (
    <ChakraButton
      p="12px 20px"
      w="228px"
      h="48px"
      bg="white"
      fontSize={['1.2rem', '1.4rem', '1.6rem']}
      fontWeight="600"
      border="1px solid black"
      borderRadius="4px"
      color="black"
      isActive={isActive}
      __css={{
        _active: {
          bg: 'var(--brand1)',
          color: 'white',
          borderColor: 'var(--brand1)',
          transition: '0.8s'
        }
      }}
      {...rest}
    >
      {content}
    </ChakraButton>
  )
}
