import { Flex, Text } from '@chakra-ui/react'
import { NavItem } from '../Header/NavItem'

export const BannerHome = () => {

  return (
    <Flex
      alignItems="center"
      bgGradient="linear(to-b, var(--brand1) 95%, transparent  5%)"
      justify="center"
      width="100%"
      h="60vh"
    >
      <Flex
        alignSelf="center"
        flexDirection="column"
        alignItems="center"
        gap={10}
      >
        <Text
          as="h2"
          color="var(--whiteFixed)"
          fontWeight="bold"
          fontSize="2.75rem"
          fontFamily="Lexend"
          width="70%"
          textAlign="center"
        >
          Velocidade e experiência em um lugar feito pra você
        </Text>
        <Text
          as="p"
          color="var(--grey9)"
          fontWeight="400"
          fontSize="md"
          fontFamily="Inter"
          textAlign="center"
        >
          Um ambiente feito para você explorar o seu melhor
        </Text>
        <Flex flexDirection="row" justifyContent="center" gap={10}>
          <NavItem
            fontFamily="Inter"
            fontSize="1em"
            fontWeight="600"
            bg="transparent"
            borderRadius="4px"
            border="1.5px solid var(--grey10)"
            color="var(--grey10)"
            height="2.5em"
            width="8em"
            _hover={{ bg: 'var(--brand4)', color: 'var(--brand1)' }}
            transition="all .5s cubic-bezier(.08,.52,.52,1)"
            content="Carros"
            to="carros"
            redirectTo={''}
          />
          <NavItem
            fontFamily="Inter"
            fontSize="1em"
            fontWeight="600"
            bg="transparent"
            borderRadius="4px"
            border="1.5px solid var(--grey10)"
            color="var(--grey10)"
            height="2.5em"
            width="8em"
            _hover={{ bg: 'var(--brand4)', color: 'var(--brand1)' }}
            transition="all .5s cubic-bezier(.08,.52,.52,1)"
            content="Motos"
            to="motos"
            redirectTo={''}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
