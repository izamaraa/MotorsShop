import { ButtonGroup, Button, Text } from '@chakra-ui/react'

export const AdvertiserOptions = () => {
  return (
    <ButtonGroup margin="10px 0 " p="0">
      <Button
        background="var(--grey8)"
        border="var(--grey1) solid 1.5px"
        p="1.2rem 2rem"
        height="3.8rem"
      >
        <Text fontSize="1.275em" fontWeight={600}>
          Editar
        </Text>
      </Button>
      <Button
        background="var(--grey8)"
        border="var(--grey1) solid 1.5px"
        p="1.2rem 2rem"
        height="3.8rem"
      >
        <Text fontSize="1.275em" fontWeight={600}>
          Ver Como
        </Text>
      </Button>
    </ButtonGroup>
  )
}
