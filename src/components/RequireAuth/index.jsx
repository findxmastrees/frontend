import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const RequireAuth = () => {
  const { uid } = useSelector((store) => store.auth)
  const location = useLocation()

  return uid ? <Outlet /> : <Navigate to='sign-in' state={{ from: location }} replace />
}
