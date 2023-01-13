import { unMask } from 'remask'
import { z } from 'zod'

export const createUserSchema = z
  .object({
    name: z.string().min(1, 'Preencher campo nome é obrigatório'),
    email: z
      .string()
      .min(1, 'Preencher o campo email é obrigatório')
      .email('Insira um email válido'),
    cpf: z
      .string()
      .min(11, 'Insira um CPF válido')
      .max(14, 'Insira um CPF válido')
      .transform(cpf => unMask(cpf)),
    phone: z
      .string()
      .min(11, 'Insira um número válido')
      .transform(tell => unMask(tell)),
    birthDate: z
      .string()
      .min(8, 'Insira uma data válida')
      .regex(
        /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
        'Insira uma data válida'
      ),
    bio: z.string().min(8, 'O campo biografia é obrigatório'),
    cep: z
      .string()
      .min(8, 'Insira um CEP válido')
      .transform(cep => unMask(cep)),
    state: z
      .string({ required_error: 'Preencha o campo CEP' })
      .min(1, 'Preencher campo cidade é obrigatório'),
    city: z
      .string({ required_error: 'Preencha o campo CEP' })
      .min(1, 'Preencher campo cidade é obrigatório'),
    street: z
      .string({ required_error: 'Preencha o campo CEP' })
      .min(1, 'Preencher campo rua é obrigatório'),
    number: z
      .string()
      .min(1, 'Preencher campo número é obrigatório')
      .refine(number => {
        const numberCast = +number

        if (Number.isInteger(numberCast) || number.toLowerCase() === 's/n') {
          return true
        }

        return false
      }, 'Informe um número válido, se seu endereço não possui um número insira S/N'),
    complement: z.string().optional(),
    password: z
      .string()
      .regex(
        /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/,
        'Formato de senha incorreto! São necessários 8 caracteres, ter letras maiúsculas e minúsculas, números e ao menos um símbolo'
      ),
    passwordConfirm: z.string().min(1, 'Campo obrigatório')
  })
  .superRefine(({ passwordConfirm, password }, ctx) => {
    if (passwordConfirm !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Senhas diferentes',
        path: ['passwordConfirm']
      })
    }
  })
