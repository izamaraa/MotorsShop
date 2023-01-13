import { z } from 'zod'
import { isValidURL } from '../../utils/validateUrl'
import { isValidNumber } from '../../utils/isValidNumber'
import { unMask } from 'remask'

export const createAdSchema = z.object({
  title: z.string().min(4, 'Título deve conter pelo menos 4 caracteres'),
  year: z
    .string()
    .min(4, 'Ano deve conter 4 caracteres')
    .max(4, 'Ano deve conter 4 caracteres')
    .refine(year => isValidNumber(year), 'Insira um ano válido'),
  km: z
    .string()
    .min(1, 'Quilometragem é obrigatória')
    .refine(km => isValidNumber(km, true), 'Insira um valor válido')
    .transform(km => +km),
  description: z.string().refine(description => {
    const descriptionList = description.split(' ')

    return descriptionList.length >= 5
  }, 'A descrição deve conter pele menos 5 palavras'),
  price: z
    .string()
    .min(1, 'Insira um valor válido')
    .transform(price => unMask(price))
    .refine(price => isValidNumber(price, true), 'Aqui'),
  image: z
    .string()
    .refine(imageURL => isValidURL(imageURL), 'Insira uma URL válida'),
  extraInputImages: z
    .string()
    .refine(imageURL => isValidURL(imageURL), 'Insira uma URL válida')
})
