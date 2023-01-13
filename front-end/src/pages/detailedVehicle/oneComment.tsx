import { Avatar, Text, Box } from '@chakra-ui/react';
import { ICommentFirst } from "../../interfaces/comments"
import { isValidURL } from '../../utils/validateUrl';

interface IOneComment {
  commentary: ICommentFirst
}

export const OneComment = ({ commentary }: IOneComment) => {
  const { id, comment, user, dateCreated } = commentary
  const { image, name } = user
  const formatDate = dateCreated.slice(0, 10)

  const imageIsValid = isValidURL(image)

  return (
    <div key={id} style={{ marginTop: '40px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Box boxSize='35px'>
          {imageIsValid ? (
            <img
              src={image}
              alt="Foto"
              style={{
                borderRadius: '100%',
                width: '60px',
                height: '60px'
              }}
            />
          ) : (
            <Avatar name={name} boxSize='100%' />
          )}
        </Box>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Text marginLeft="2rem">{name}</Text>

          <Text marginLeft="2rem">{formatDate}</Text>
        </div>
      </div>

      <Text marginTop="2rem">
        {comment}
      </Text></div>
  )
}
