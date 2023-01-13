import { userMocked } from './mocksUser'

import carro1 from '../assets/carro1.svg'
import carro2 from '../assets/carro2.svg'

import { IVehicleLeilao } from '../interfaces/IVehicle'

export const vehiclesList: IVehicleLeilao[] = [
  {
    id: '1',
    time: '01:58:00',
    title: ' Renault Kwid',
    image: carro1,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
    user: userMocked,
    year: '2013',
    km: 0,
    price: 'R$ 00.000,00'
  },
  {
    id: '2',
    time: '01:58:00',
    title: 'Camaro',
    image: carro2,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
    user: userMocked,
    year: '2013',
    km: 0,
    price: 'R$ 00.000,00'
  },
  {
    id: '3',
    time: '01:58:00',
    title: 'Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJCljLzS9KNw0BIuTak_l-bvDjHLpupnCQg&usqp=CAU',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
    user: userMocked,
    year: '2013',
    km: 0,
    price: 'R$ 00.000,00'
  },
  {
    id: '7',
    time: '01:58:00',
    title: 'Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6XwIf1O8am66EOm4-ei969F5hltiRumayiA&usqp=CAU',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
    user: userMocked,
    year: '2013',
    km: 0,
    price: 'R$ 00.000,00'
  }
]
