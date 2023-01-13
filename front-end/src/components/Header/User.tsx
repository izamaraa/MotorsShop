import { useEffect } from 'react';
import { Avatar, Flex, Image, Text } from '@chakra-ui/react'
import { useUser } from '../../providers/UserProvider';

interface UserProps {
  onToggle: () => void
}

export const User = ({ onToggle }: UserProps) => {

  const { getUser, user } = useUser()

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <Flex
        alignItems="center"
        gap="15px"
        onClick={onToggle}
        cursor="pointer"
        role="button"
      >
        <Flex boxSize="32px" bg='35px' alignItems='center'>
          {user?.image ? (
            <Image
              boxSize='100%'
              borderRadius="100%"
              src={user.image}
            />
          ) : (
            <Avatar name={user?.name} boxSize='100%' />
          )}
        </Flex>
        <Text fontWeight="400" fontSize="1.6rem" color="var(--grey2)">
          {user?.name}
        </Text>
      </Flex>
    </>
  )
}
