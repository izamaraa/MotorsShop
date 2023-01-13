import { useEffect, useState } from 'react'
import { Flex, Box, useDisclosure } from '@chakra-ui/react'

import { useParams } from 'react-router-dom'

import { ModalAdminEditProfile } from '../../components/Modals/ModalAdminEditProfile'
import { VehicleOwnerCard } from './vehicleOwnerCard'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { VehiclesPics } from './vehiclesPics'
import { CommentMaker } from './commentMaker'
import { InfoVehicle } from './infoVehicle'
import { Comments } from './comments'

import { UseVehicle } from '../../providers/vehicleProvider'
import { useAuth } from '../../providers/AuthProvider'
import { useComments } from '../../providers/CommentsProvider';

const DetailedVehicle = () => {
  const { gettingComments, comments } = useComments()

  useEffect(() => {
    idVehicle ? listVehicle(idVehicle) : listVehicle(idCarNotFound)

    gettingComments(idVehicle)
  }, [])

  const { onOpen, onClose, isOpen } = useDisclosure()
  const { listVehicle, vehicle } = UseVehicle()
  const { verifyAuthenticated } = useAuth()

  const params = useParams()
  const isAuthenticated = verifyAuthenticated()

  const idVehicle: string = params.vehicleId || ''
  const idCarNotFound = 'f52c9c0e-aa92-497b-99e5-ad05c0c1e6ff'
  const propsCommentMaker = { idVehicle }

  return (
    <>
      <ModalAdminEditProfile isOpen={isOpen} onClose={onClose} />

      <Box w="100%">
        <Flex
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }}
          bgGradient="linear(to-b, var(--brand1) 40%, transparent 25%)"
        >
          <Header onEditUserOpen={onOpen} />
          <main
            style={{
              padding: '5rem 10rem',
              display: 'flex',
              flexDirection: 'row',
              gap: '2rem'
            }}
          >
            <section
              style={{
                width: '70%',
                display: 'flex',
                flexDirection: 'column',
                gap: '3rem'
              }}
            >
              <InfoVehicle vehicle={vehicle} />

              <Comments comments={comments} />
              {isAuthenticated && <CommentMaker props={propsCommentMaker} />}

            </section>
            <section style={{ width: '30%' }}>
              <VehiclesPics vehicle={vehicle} />
              <VehicleOwnerCard owner={vehicle.user} />
            </section>
          </main>
        </Flex>
        <Footer />
      </Box>
    </>

  )
}

export default DetailedVehicle
