import { Text, Avatar, HStack } from '@chakra-ui/react';

interface SellerDataProps {
  name: string
}

export const SellerData = ({ name }: SellerDataProps) => (
  <HStack mt="6" gap="5px">
    <Avatar name={name} />
    <Text color="var(--grey2)" fontWeight={500}>
      {name}
    </Text>
  </HStack>
)

