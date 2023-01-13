import { useEffect } from 'react'
import { Flex, useDisclosure } from '@chakra-ui/react';
import { ModalAdminEditProfile } from '../../components/Modals/ModalAdminEditProfile/index';
import { VehiclesCarousel } from '../profileViewAdmin/VehiclesCarousel'
import { BannerHome } from '../../components/BannerHome'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { UseVehicle } from '../../providers/vehicleProvider';
import { useUser } from '../../providers/UserProvider';
import { vehiclesList } from '../../mocks/mocksLeilao';


const Home = () => {
  useEffect(() => {
    listVehicles()
    getUser()

  }, [])

  const { listVehicles, cars, motorbikes } = UseVehicle()
  const { getUser } = useUser()


  const motorbikeProps = {
    isOwnerSellerPerfil: false,
    vehicles: motorbikes,
    title: 'Motos',
    id: 'motos'
  }

  const carProps = {
    isOwnerSellerPerfil: false,
    vehicles: cars,
    title: 'Carros',
    id: 'carros'
  }

  const auctionProps = {
    title: 'Leilao',
    isOwnerSellerPerfil: false,
    leilao: vehiclesList,
    id: 'leilao'
  }

  const { onOpen, onClose, isOpen } = useDisclosure()

  return (
    <>
      <ModalAdminEditProfile isOpen={isOpen} onClose={onClose} />
      <Flex w="100%" flexDir="column" justifyItems="center">
        <Header onEditUserOpen={onOpen} />
        <BannerHome />
        <VehiclesCarousel props={auctionProps} />
        <VehiclesCarousel props={carProps} />
        <VehiclesCarousel props={motorbikeProps} />
        <Footer />
      </Flex>
    </>
  )
}

export default Home
