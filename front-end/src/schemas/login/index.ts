import { z } from 'zod'

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, 'Preencher o campo email é obrigatório')
    .email('Insira um email válido'),
  password: z.string().min(1, 'Preencher o campo senha é obrigatório')
})
