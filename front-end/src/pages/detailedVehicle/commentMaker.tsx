import { useState, useEffect, useCallback } from 'react';

import { Button } from "@chakra-ui/button"
import { Card } from "@chakra-ui/card"
import { Text } from "@chakra-ui/layout"
import { Avatar } from '@chakra-ui/react';

import { useComments } from '../../providers/CommentsProvider';
import { useUser } from '../../providers/UserProvider';

import { isValidURL } from "../../utils/validateUrl";
import { Textarea } from '../../components/Textarea';

interface IMakeCommentsProps {
  props: {
    idVehicle: string
  }
}

export const CommentMaker = ({ props }: IMakeCommentsProps) => {
  useEffect(() => {
    getUser()
  }, [])

  const [text, setText] = useState("");

  const { idVehicle } = props

  const { getUser, user } = useUser()
  const { postingComment, gettingComments } = useComments()

  const handleCommentButton = useCallback(async () => {
    await postingComment(text, idVehicle)

    gettingComments(idVehicle)
    setText('')
  }, [text])

  const handleTextValue = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }, [])

  let imageIsValid = false

  if (user.image) {
    imageIsValid = isValidURL(user.image)
  }

  return (
    <Card padding={'2rem 4rem'} bg={'var(--grey10)'}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {imageIsValid && user.image ? (
          <img
            src={user.image}
            alt="Foto"
            style={{
              borderRadius: '100%',
              width: '60px',
              height: '60px'
            }}
          />
        ) : (
          <Avatar name={user?.name} boxSize='35px' />
        )}
        <Text marginLeft="2rem">{user?.name}</Text>
      </div>
      <Textarea placeholder='' value={text} onChange={handleTextValue} />
      <Button
        marginTop='2rem'
        w='100px'
        variant='solid'
        bg='var(--brand1)'
        color='var(--whiteFixed)'
        type='submit'
        onClick={handleCommentButton}
      >
        Comentar
      </Button>
    </Card>
  )
}
