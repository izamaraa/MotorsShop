import { Card, Image, Heading, Text, Box, HStack } from '@chakra-ui/react'
import { IPropsVehicle } from '../../interfaces/IVehicle'
import { IsActiveVehicle } from './isActive/isActive'
import { SellerData } from './SellerData'
import { AdvertiserOptions } from './AdvertiserOptions'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react';
import { mask } from 'remask'
import { patterns } from '../../utils/patternMaskPrice'

export const CardVehicle = ({ props }: IPropsVehicle) => {
  const {
    title,
    description,
    isActive,
    images,
    price,
    km,
    year,
    user
  } = props?.vehicle

  const { isOwnerSellerPerfil } = props

  const navigation = useNavigate();
  const id = props.vehicle.id;

  const kmPatternMask = ['9', '99', '99.9', '99.99', '999.9', '999.99', '999.999', '9999.9', '9999.99']

  const handleClick = useCallback(() => navigation(`/detailedVehicle/${id}`), [])
  return (
    <Card
      w={['230px', '270px', '312px']}
      minW={['230px', '270px', '312px']}
      shadow="none"
      outline="none"
      position="relative"
      py='15px'
      onClick={handleClick}
    >
      <IsActiveVehicle props={{ isActive }} />
      <Image src={images[0]?.image} w='100%' objectFit='cover' h='215px' />
      <Heading
        noOfLines={1}
        m="15px 0px"
        fontWeight={600}
        fontSize="1.6rem"
        color="var(--grey1)"
      >
        {title}
      </Heading>
      <Text
        noOfLines={2}
        fontWeight="400"
        fontSize="1.4rem"
        color="var(--grey2)"

        h='45px'
      >
        {description}
      </Text>
      {!isOwnerSellerPerfil && <SellerData name={user.name} />}

      <HStack
        marginTop="10px"
        direction="row"
        gap={['2', '6']}
        fontSize={['1rem', '1.2rem', '1.4rem']}
        fontWeight="500"
        color="var(--brand1)"
      >
        <Box p="4px 8px" bg="var(--brand4)" borderRadius="4px">
          <Text>{mask(String(km), kmPatternMask)} km</Text>
        </Box>
        <Box p="4px 8px" bg="var(--brand4)" borderRadius="4px">
          <Text>{year}</Text>
        </Box>

        <Text
          color="var(--grey1)"
          fontWeight="500"
          fontFamily="Lexend"
          fontSize={['1.4rem', '1.6rem']}
        >
          R$ {mask(price, patterns)}
        </Text>
      </HStack>
      {isOwnerSellerPerfil && <AdvertiserOptions />}
    </Card>
  )
}
