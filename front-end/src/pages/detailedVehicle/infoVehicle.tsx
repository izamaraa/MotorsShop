import { Button } from "@chakra-ui/button"
import { Card, CardBody, CardFooter } from "@chakra-ui/card"
import { Image } from "@chakra-ui/image"
import { Heading, Text } from "@chakra-ui/layout"
import { IVehicle } from "../../interfaces/IVehicle"

interface IProps {
  vehicle: IVehicle
}

export const InfoVehicle = ({ vehicle }: IProps) => {

  const imagemRoute = vehicle.images && vehicle.images[0].image

  return (
    <>
      <Card bg={'var(--grey10)'}>
        <CardBody>
          <Image
            src={imagemRoute || ''}
            alt={vehicle?.title}
            borderRadius="lg"
            width={'400px'}
            height={'300px'}
            margin={'0 auto'}
          />
        </CardBody>
      </Card>
      <Card padding={'2rem 4rem'} bg={'var(--grey10)'}>
        <CardBody>
          <Heading size="md">{vehicle?.title}</Heading>
        </CardBody>

        <CardFooter display={'flex'} justifyContent={'space-between'}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Text
                  padding="0.3rem"
                  bg="var(--brand4)"
                  color="var(--brand1)"
                >
                  {vehicle?.year}
                </Text>
                <Text
                  padding="0.3rem"
                  bg="var(--brand4)"
                  marginLeft="2rem"
                  color="var(--brand1)"
                >
                  {vehicle?.km} KM
                </Text>
              </div>

              <Button
                color="var(--whiteFixed)"
                marginTop="1rem"
                variant="solid"
                bg="var(--brand1)"
              >
                Comprar
              </Button>
            </div>
          </div>

          <Text color="var(--grey1)">
            R${vehicle.price}
          </Text>
        </CardFooter>
      </Card>

      <Card padding={'2rem 4rem'} bg={'var(--grey10)'}>
        <Text>
          <p
            style={{
              color: 'var(--grey1)',
              fontWeight: '600',
              marginBottom: '2rem'
            }}
          >
            Descrição
          </p>
          {vehicle?.description}
        </Text>
      </Card>
    </>
  )
}
