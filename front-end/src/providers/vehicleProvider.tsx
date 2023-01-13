import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useMemo
} from 'react'

import api from '../services/api'
import { IVehicle } from '../interfaces/IVehicle'
import { IVehicleRequest } from '../interfaces/IVehicle/index';

interface VehicleProps {
  children: ReactNode
}

interface VehicleContextData {
  listVehicle: (id: string) => Promise<void>
  vehicle: IVehicle
  cars: IVehicle[]
  motorbikes: IVehicle[]
  createVehicle: (id: string, data: IVehicleRequest, onClose: CloseModal) => Promise<void>
  listVehicles: () => void
  vehicles: IVehicle[]
}

type CloseModal = () => void

export const VehicleContext = createContext<VehicleContextData>(
  {} as VehicleContextData
)

export const UseVehicle = () => {
  const context = useContext(VehicleContext)

  return context
}

export const VehicleProvider = ({ children }: VehicleProps) => {
  const [vehicle, setVehicle] = useState<IVehicle>({} as IVehicle)
  const [vehicles, setVehicles] = useState<IVehicle[]>([])
  const [cars, setCars] = useState<IVehicle[]>([])
  const [motorbikes, setMotorbikes] = useState<IVehicle[]>([])

  const listVehicle = async (id: string) => {
    await api
      .get(`vehicles/${id}`)
      .then(res => setVehicle(res.data))
      .catch(err => console.log(err))
  }

  const listVehicles = useCallback(async () => {
    await api
      .get('vehicles')
      .then(res => {
        setVehicles([...res.data.carros, ...res.data.motos])
        setCars(res.data.carros)
        setMotorbikes(res.data.motos)
      })
      .catch(err => console.log(err))
  }, [vehicles])

  const createVehicle = useCallback(async (id: string, data: IVehicleRequest, onClose: CloseModal) => {
    await api
      .post(`vehicles/${id}`, data)
      .then(res => {
        setVehicles([...vehicles, res.data])
        listVehicles()
        return onClose()
      })
      .catch(err => console.log(err))
  }, [])

  const vehicleContextValues = useMemo(() =>
    ({ listVehicle, vehicle, createVehicle, listVehicles, vehicles, cars, motorbikes })
    , [vehicles])

  return (
    <VehicleContext.Provider value={vehicleContextValues}>
      {children}
    </VehicleContext.Provider>
  )
}
