import { ReactNode } from 'react'

export interface IPropChildren {
  children: ReactNode
}

export interface IAddress {
  id: string
  country: string
  state: string
  city: string
  cep: string
  street: string
  number: string
  complement: string
  userId: string
}
export interface IAddresses {
  addresses: IAddress[]
}
