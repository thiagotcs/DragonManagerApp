import { Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

interface PrivateRouteProps {
  children: React.ReactNode
}
export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user } = useAuthStore()
  const location = useLocation()
  if (!user) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />
  }
  return <>{children}</>
}
