import { IPost } from '../IPost'
import { IUser } from '../IUser'

export interface ICommentFirst {
  id: string
  comment: string
  dateCreated: string
  user: IUser
}

export interface IComment {
  id: string
  content: string
  postId: string
  userId: string
}

//verifiquue pq os comentarios nao sao renderizados
export interface ICommentFull {
  id: string
  content: string
  post: IPost
  user: IUser
}
export interface ICommentUser {
  id: string
  content: string
  postId: string
  user: IUser
}
export interface ICommentPost {
  id: string
  content: string
  post: IPost
  userId: string
}

export interface ICommentsUser {
  id: string
  content: string
  postId: string
  user: IUser
}
