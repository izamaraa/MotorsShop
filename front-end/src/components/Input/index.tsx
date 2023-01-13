import {
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControl,
  FormErrorMessage,
  InputGroup
} from '@chakra-ui/react'

import {
  ForwardRefRenderFunction,
  forwardRef,
  useCallback,
  useEffect,
  useState
} from 'react'

import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  name: string
  placeholder: string
  label?: string
  error?: FieldError | null
}

type inputVariationOptions = {
  [key: string]: string
}

const inputVariation: inputVariationOptions = {
  error: 'red.500',
  default: 'var(--grey7)',
  focus: 'var(--grey7)',
  filled: 'green.500'
}

export const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ name, label, placeholder, error = null, ...rest }, ref) => {
  const [value, setValue] = useState('')
  const [variant, setVariant] = useState('default')

  useEffect(() => {
    if (error) {
      return setVariant('error')
    }
  }, [error])

  const handleInputFocus = useCallback(() => {
    if (!error) {
      return setVariant('focus')
    }
  }, [error])

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariant('focus')
    }
  }, [error, value])


  const handleValue = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }, [])


  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel>{label}</FormLabel>}
      <InputGroup flexDir="column">
        <ChakraInput
          name={name}
          color="var(--grey2)"
          borderColor={inputVariation[variant]}
          type="text"
          fontWeight="400"
          fontSize="1.6rem"
          placeholder={placeholder}
          border="1.5px solid var(--grey7)"
          borderRadius="4px"
          h="48px"
          px={['10px', '16px']}
          _placeholder={{
            fontWeight: '400',
            fontSize: ['1rem', '1.2rem', '1.5rem'],
            color: 'var(--grey3)'
          }}
          onFocus={handleInputFocus}
          onChangeCapture={handleValue}
          onBlurCapture={handleInputBlur}
          ref={ref}
          {...rest}
        />

        {!!error?.message && (
          <FormErrorMessage>{error.message}</FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
