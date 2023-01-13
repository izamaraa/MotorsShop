import { Flex, Image, Text, IconButton } from '@chakra-ui/react'
import { RiArrowUpSLine } from 'react-icons/ri'

import Logo from '../../assets/whiteLogo.svg'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Flex
      flexDir={['column', 'column', 'row', 'row']}
      justifyContent={['center', 'center', 'space-between', 'space-between']}
      alignItems="center"
      gap={['15px', '15px', '35px', '45px']}
      h={['160px', '160px', '90px']}
      padding={['20px 10px', '20px 10px', '30px 59px']}
      color="var(--whiteFixed)"
      maxW="1600px"
      mt="40px"
      bg="var(--grey0)"
      w="100%"
    >
      <Image src={Logo} alt="Motors Shop" />
      <Text fontWeight="400" fontSize={['1.2rem', '1.4rem']} textAlign="center">
        © {currentYear} - Todos os direitos reservados.
      </Text>
      <IconButton
        size="1.6rem"
        aria-label="Arrow Up"
        w="53px"
        h="50px"
        bg="var(--grey1)"
        borderRadius="4px"
        icon={<RiArrowUpSLine />}
        _hover={{ bg: 'var(--grey2)' }}
      />
    </Flex>
  )
}
