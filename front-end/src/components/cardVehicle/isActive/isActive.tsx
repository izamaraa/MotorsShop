import { Text } from '@chakra-ui/react'
import { IPropsVehicleIsActive } from '../../../interfaces/IVehicle'

export const IsActiveVehicle = ({ props }: IPropsVehicleIsActive) => {
  const { isActive } = props

  return (
    <>
      {isActive ? (
        <Text
          position="absolute"
          background="var(--brand1)"
          m="10px"
          fontSize="1.4rem"
          p="0px 8px"
          color="var(--whiteFixed)"
        >
          Ativo
        </Text>
      ) : (
        <Text
          position="absolute"
          background="var(--grey4)"
          m="10px"
          p="0px 8px"
          color="var(--whiteFixed)"
        >
          Inativo
        </Text>
      )}
    </>
  )
}
