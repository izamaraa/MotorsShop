import { Flex, IconButton, HStack, Image, useDisclosure } from "@chakra-ui/react"

import { User } from "./User"
import { Menu } from "./Menu"
import { NavItem } from "./NavItem"
import { MenuMobile } from "./MenuMobile"

import Logo from "../../assets/colorfulLogo.svg"

import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { useNavigate } from "react-router"

import { useAuth } from "../../providers/AuthProvider"
import { useCallback } from 'react';


export interface HeaderProps {
  onEditUserOpen: () => void
}

export const Header = ({ onEditUserOpen }: HeaderProps) => {
  const { verifyAuthenticated } = useAuth()

  const isAuthenticated = verifyAuthenticated()

  const {
    isOpen: isMenuMobileOpen,
    onClose: onMenuMobileClose,
    onToggle: onMenuMobileToggle
  } = useDisclosure()

  const {
    isOpen: isMenuOpen,
    onClose: onMenuClose,
    onToggle: onMenuToggle
  } = useDisclosure()


  const navigation = useNavigate();

  const handleSubmit = useCallback(() => navigation(`/`), [])

  return (
    <Flex as="nav" width="100%">
      <Flex
        h="100px"
        paddingX={["25px", "45px"]}
        w="100%"
        maxW="1600px"
        bg="var(--grey10)"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Image
          alignSelf="center"
          w="150px"
          h="30px"
          src={Logo}
          alt="Motors Shop"
          onClick={handleSubmit}
          cursor="pointer"
        />
        <Flex display={["none", "none", "flex", "flex"]}>
          <HStack
            spacing="5"
            w="auto"
            borderRight="2px solid var(--grey6)"
            paddingRight="5"
          >
            <NavItem content="Carros" to="carros" redirectTo={"/"} />
            <NavItem content="Motos" to="motos" redirectTo={"/"} />
            <NavItem content="Leilão" to="leilao" redirectTo={"/"} />
          </HStack>

          <HStack paddingLeft="5" spacing="5">
            {isAuthenticated ? (
              <User onToggle={onMenuToggle} />
            ) : (
              <>
                <NavItem content="Fazer login" redirectTo="/login" />
                <NavItem
                  content="Cadastrar"
                  redirectTo="/registration"
                  color="var(--grey0)"
                  border="1px solid var(--grey4)"
                  padding="20px"
                />
              </>
            )}
          </HStack>
        </Flex>
        <IconButton
          aria-label="Open menu"
          alignSelf="center"
          fontSize="4xl"
          bg="transparent"
          mr="2"
          icon={isMenuMobileOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          display={["flex", "flex", "none", "none"]}
          onClick={onMenuMobileToggle}
          _hover={{ bg: "transparent" }}
        />
        <MenuMobile
          onEditUserOpen={onEditUserOpen}
          isOpen={isMenuMobileOpen}
          onClose={onMenuMobileClose}
          ml="0px"
          mt="80px"
        />
        <Menu
          display={["none", "none", "flex", "flex"]}
          isOpen={isMenuOpen}
          onClose={onMenuClose}
          onEditUserOpen={onEditUserOpen}
          ml="auto"
          mt="80px"
        />
      </Flex>
    </Flex>
  )
}
