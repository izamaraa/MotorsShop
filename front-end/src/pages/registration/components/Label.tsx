import { FormLabel } from '@chakra-ui/react'

interface ILabelProps {
  content: string
}

export const Label = ({ content }: ILabelProps) => (
  <FormLabel
    color="var(--grey1)"
    fontWeight="500"
    fontSize="1.4rem"
    lineHeight="17px"
    fontStyle="normal"
  >
    {content}
  </FormLabel>
)
