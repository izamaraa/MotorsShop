import { Card } from "@chakra-ui/card"
import { Image } from "@chakra-ui/image"
import { Flex } from "@chakra-ui/layout"
import { IVehicle } from "../../interfaces/IVehicle"

interface IProps {
  vehicle: IVehicle
}

export const VehiclesPics = ({ vehicle }: IProps) => {
  return (
    <Card
      display="flex"
      flexDirection="column"
      padding={'2rem 4rem'}
      bg={'var(--grey10)'}
    >
      FOTOS
      <Flex gap="1rem">
        {vehicle.images &&
          vehicle.images.map(image => (
            <Flex
              key={image.id}
              align="center"
              justifyContent="center"
              bg="var(--grey7)"
              gap="1rem"
              w="90px"
              h="90px"
            >
              <Image w="65px" h="50px" src={image.image} />
            </Flex>
          ))}
      </Flex>
    </Card>
  )
}
