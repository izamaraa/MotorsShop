import api from '../services/api';
import { ICommentFirst } from '../interfaces/comments/index';
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback
} from 'react'

interface CommentsContextProps {
  children: ReactNode
}
interface CommentsContextData {
  comments: ICommentFirst[]
  postingComment: (text: string, idVehicle: string) => Promise<void>
  gettingComments: (id: string) => Promise<void>
}

const CommentsContext = createContext<CommentsContextData>({} as CommentsContextData)

export const useComments = () => {
  const context = useContext(CommentsContext)

  return context
}

export const CommentsProvider = ({ children }: CommentsContextProps) => {
  const [comments, setComments] = useState<ICommentFirst[]>([])

  const postingComment = useCallback(async (text: string, idVehicle: string) => {
    const tokenUser: string = localStorage.getItem('tokenUser') || ''

    const header = {
      headers: {
        Authorization: `Bearer ${tokenUser}`
      }
    }

    await api.post(
      `/comments/${idVehicle}`,
      { comment: text },
      header
    ).then(res => setComments(comments => [...comments, res.data])
    ).catch(err => console.log(err))
  }, [])

  const gettingComments = useCallback(async (id: string) => {
    await api
      .get(`/comments/${id}`)
      .then(res => setComments(res.data))
      .catch(err => console.log(err))
  }, [comments])

  const commentsContextValues = useMemo(() => ({ comments, postingComment, gettingComments }), [comments])

  return (
    <CommentsContext.Provider value={commentsContextValues}>
      {children}
    </CommentsContext.Provider>
  )
}
