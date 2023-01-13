import { IPropChildren } from '../interfaces/IAddress'
import { AuthProvider } from './AuthProvider'
import { CommentsProvider } from './CommentsProvider'
import { UserProvider } from './UserProvider'
import { VehicleProvider } from './vehicleProvider'

const Providers = ({ children }: IPropChildren) => (
  <AuthProvider>
    <UserProvider>
      <VehicleProvider>
        <CommentsProvider>
          {children}
        </CommentsProvider>
      </VehicleProvider>
    </UserProvider>
  </AuthProvider>
)

export default Providers
