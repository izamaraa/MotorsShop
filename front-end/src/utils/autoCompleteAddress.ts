import {
  UseFormSetValue,
  FieldValues,
  UseFormSetFocus,
  UseFormSetError,
  UseFormClearErrors
} from 'react-hook-form'

import { unMask } from 'remask'
import { ICreateUser } from '../interfaces/IUser/index'

interface IFormManipulate {
  setValue: UseFormSetValue<ICreateUser>
  setFocus: UseFormSetFocus<FieldValues>
  setError: UseFormSetError<ICreateUser>
  clearErrors: UseFormClearErrors<ICreateUser>
}

export const autoCompleteAddress = (
  event: React.ChangeEvent<HTMLInputElement>,
  manipulateForm: IFormManipulate
) => {
  const { setValue, setFocus, setError, clearErrors } = manipulateForm
  const cep = unMask(event.target.value)

  fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(res => res.json())
    .then(data => {
      if (data.erro) {
        throw new Error()
      }

      const { localidade, logradouro, uf } = data

      setValue('state', uf)
      setValue('city', localidade)
      setValue('street', logradouro)

      setFocus('number')
      clearErrors(['cep', 'state', 'city', 'street'])
    })
    .catch(() => {
      setError('cep', {
        type: 'disabled',
        message: 'Insira uma CEP válido'
      })
    })
}
