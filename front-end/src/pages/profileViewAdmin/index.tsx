import { useEffect } from 'react'
import { Box, useDisclosure } from '@chakra-ui/react'
import { ModalAdminEditProfile } from '../../components/Modals/ModalAdminEditProfile/index';
import { ModalCreateAd } from '../../components/Modals/ModalCreateAd/index'
import { VehiclesCarousel } from './VehiclesCarousel'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { UserArea } from './UserArea'
import { UseVehicle } from '../../providers/vehicleProvider'
import { useUser } from '../../providers/UserProvider';


const ProfileViewAdmin = () => {

  const { listVehicles, cars, motorbikes } = UseVehicle()
  const { getUser } = useUser()

  const { isOpen: isUserModalOpen, onOpen: onUserModalOpen, onClose: onUserModalClose } = useDisclosure()
  const { isOpen: isEditUserOpen, onToggle: onEditUserOpen, onClose: onEditUserClose } = useDisclosure()

  useEffect(() => {

    listVehicles()
    getUser()
  }, [])

  const isOwnerSellerPerfil = true

  const propsMoto = { isOwnerSellerPerfil, vehicles: motorbikes, title: 'Motos' }
  const propsCarro = { isOwnerSellerPerfil, vehicles: cars, title: 'Carros' }


  return (
    <>
      <ModalAdminEditProfile
        onClose={onEditUserClose}
        isOpen={isEditUserOpen}
      />
      <Box w="100%">
        <ModalCreateAd isOpen={isUserModalOpen} onClose={onUserModalClose} />
        <Header onEditUserOpen={onEditUserOpen} />


        <UserArea onOpen={onUserModalOpen} />


        <VehiclesCarousel props={propsCarro} />
        <VehiclesCarousel props={propsMoto} />

        <Footer />
      </Box>
    </>
  )
}

export default ProfileViewAdmin
