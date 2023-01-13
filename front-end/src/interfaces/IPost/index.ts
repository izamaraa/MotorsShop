import { ICommentsUser } from '../comments'
import { IUser } from '../IUser'
import { IVehicle } from '../IVehicle'

export interface IPost {
  id: string
  tittle: string
  description: string
  isActive: boolean
  image: string
  vehicleId: string
  userId: string
}
export interface IPostVehicled {
  id: string
  tittle: string
  description: string
  image: string
  vehicle: IVehicle
  isActive: boolean
  userId: string
}
export interface IPostFull {
  id: string
  tittle: string
  description: string
  image: string
  vehicle: IVehicle
  isActive: boolean
  user: IUser
  comments: ICommentsUser
}
