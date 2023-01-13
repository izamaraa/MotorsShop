import { Button } from "@chakra-ui/button"
import { Card } from "@chakra-ui/card"
import { Flex, Text } from "@chakra-ui/layout"
import { IUser } from "../../interfaces/IUser"
import { Avatar } from "@chakra-ui/react"
import { isValidURL } from "../../utils/validateUrl"
import { useNavigate } from 'react-router';
import { useCallback } from 'react';

interface IProps {
  owner: IUser
}

export const VehicleOwnerCard = ({ owner }: IProps) => {
  const navigate = useNavigate()

  let imageIsValid

  if (owner) {
    imageIsValid = isValidURL(owner.image)
  }

  const handleNavigate = useCallback(() => navigate('/'), [])

  return (
    <Card mt="2rem" padding={['2rem 4rem', '2rem 0rem']} bg={'var(--grey10)'}>
      <Flex
        justifyContent="center"
        flexWrap="wrap"
        flexDirection="column"
        alignItems="center"
        gap="1rem"
      >
        {!!imageIsValid ? (
          <img
            style={{
              borderRadius: '100%',
              width: '100px',
              height: '100px'
            }}
            src={owner.image}
          />
        ) : (
          <Avatar name={owner?.name} boxSize='35px' />
        )}
        <Text color="var(--grey1)" fontWeight="600">
          {owner && owner.name}
        </Text>
        <Text w='90%'>
          {owner && owner.bio}
        </Text>
        <Button
          bg="var(--grey0)"
          color="var(--whiteFixed)"
          w={["280px", '90%']}
          h="48px"
          onClick={handleNavigate}
        >
          Ver Todos os Anúncios
        </Button>
      </Flex>
    </Card>
  )
}
