import { Card, Heading } from "@chakra-ui/react"

export const NoVehiclesCard = () => {
  return (
    <Card
      w={['430px', '520px', '612px']}
      h='300px'
      minW={['230px', '270px', '312px']}
      shadow="none"
      outline="none"
      position="relative"
      background='var(--grey5)'
    >
      <Heading
        m="35px"
        fontWeight={600}
        fontSize="1.6rem"
        color="var(--grey1)"
      >
        No momento estamos sem este tipo de veículo
      </Heading>
    </Card>
  )
}
