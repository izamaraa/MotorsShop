import { Card } from "@chakra-ui/react"

import { OneComment } from "./oneComment"
import { ICommentFirst } from '../../interfaces/comments/index';

interface ICommentsProps {
  comments: ICommentFirst[]
}

export const Comments = ({ comments }: ICommentsProps) => {

  return (
    <Card padding={'2rem 4rem'} bg={'var(--grey10)'} >
      <h2
        style={{
          color: 'var(--grey1)',
          fontWeight: '600',
          marginBottom: '2rem'
        }}
      >
        Comentários
      </h2>
      {
        comments.map(comment =>
          <OneComment key={comment.id} commentary={comment} />
        )
      }
    </Card >
  )
}
