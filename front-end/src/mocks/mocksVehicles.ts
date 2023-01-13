import { IVehicle } from '../interfaces/IVehicle'
import { userMocked } from './mocksUser'

export const noVehicleMocked: IVehicle = {
  id: '123',
  title: 'Ainda estamos sem veiculo',
  description:
    'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Leite de capivaris, leite de mula manquis sem cabeça.Delegadis gente finis, bibendum egestas augue arcu ut est.Per aumento de cachacis, eu reclamis.',
  isActive: true,
  type: 'carro',
  price: '125.000,00',
  color: 'vermelho',
  plate: '123456',
  images:
    ['https://i.pinimg.com/736x/f5/0f/8f/f50f8f663dff17946e84445beee4330a.jpg'],
  km: 125,
  year: '2020',
  user: userMocked
}

export const vehicleMocked: IVehicle = {
  id: '123',
  title: 'Carrão prata bolado',
  description:
    'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Leite de capivaris, leite de mula manquis sem cabeça.Delegadis gente finis, bibendum egestas augue arcu ut est.Per aumento de cachacis, eu reclamis.',
  isActive: true,
  type: 'carro',
  price: '125.000,00',
  color: 'vermelho',
  plate: '123456',
  images:
    'https://www.comparaonline.com.br/blog-statics/br/uploads/2022/06/carro-esportivo-vermelho-1-1024x576.jpg',
  km: 125,
  year: '2020',
  user: userMocked
}
