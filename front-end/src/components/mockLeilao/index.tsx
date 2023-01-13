import { Card, Flex, Text, Avatar } from '@chakra-ui/react'

import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'

import { IVehicleLeilaoProps } from '../../interfaces/IVehicle'

export default function MockLeilao({ props }: IVehicleLeilaoProps) {
  return (
    <Card
      position="relative"
      padding="30px"
      minH="326px"
      minW="650px"
      bgImage={`linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, #000000 100%), url(${props.image})`}
      bgSize="cover"
      borderRadius="8px"
    >
      <Flex
        sx={{
          borderRadius: '30px',
          justifyContent: 'space-between',
          alignItems: 'center',
          bg: 'var(--whiteFixed)',
          w: '95px',
          padding: '2px 5px'
        }}
      >
        <AiOutlineClockCircle color="var(--brand1)" fontSize="1.6rem" />
        <Text fontFamily="Lexend" color="var(--grey1)">
          {props.time}
        </Text>
      </Flex>
      <Flex flexDir="column" gap="2rem" mt="20px">
        <Text
          fontFamily="Lexend"
          color="var(--grey10)"
          fontWeight="600"
          fontSize="2rem"
        >
          {props.title}
        </Text>
        <Text fontFamily="Lexend" color="var(--grey10)">
          {props.description}
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        gap="5px"
        fontFamily="Inter"
        color="var(--whiteFixed)"
        my="15px"
      >
        <Avatar name={`${props.user.name}`} />
        <Text>{props.user.name}</Text>
      </Flex>
      <Flex
        dir="row"
        flexWrap="nowrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex dir="row" gap="1rem" mt="10px">
          <Flex
            bg="var(--brand4)"
            borderRadius="4px"
            padding="4px 8px"
            w="60px"
            justifyContent="center"
          >
            <Text
              sx={{
                color: 'var(--brand1)',
                fontSize: '1.4rem'
              }}
            >
              {props.year}
            </Text>
          </Flex>
          <Flex
            bg="var(--brand4)"
            padding="4px 8px"
            borderRadius="4px"
            w="60px"
            justifyContent="center"
          >
            <Text
              sx={{
                color: 'var(--brand1)',
                fontSize: '1.4rem'
              }}
            >
              {props.km} <span>KM</span>
            </Text>
          </Flex>
        </Flex>
        <Text fontFamily="Lexend" color="var(--whiteFixed)">
          {props.price}
        </Text>
      </Flex>
      <Flex
        bg="var(--brand1)"
        p="24px 36px"
        position="absolute"
        bottom="0"
        w="100%"
        left="0"
        justifyContent="space-between"
        alignItems="center"
        fontWeight="600"
        fontSize="1.6rem"
        borderRadius="0 0 8px 8px"
      >
        <Text fontFamily="Inter" color="var(--whiteFixed)">
          Acessar Página do Leilão
        </Text>
        <BsArrowRight
          color="var(--whiteFixed)"
          fontWeight="600"
          fontSize="2rem"
        />
      </Flex>
    </Card>
  )
}
