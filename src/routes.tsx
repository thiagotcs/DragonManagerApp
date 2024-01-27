import { Navigate, createBrowserRouter } from 'react-router-dom'
import { DragonCreate } from './components/organisms/DragonCreate/DragonCreate'
import { DragonList } from './components/organisms/DragonList'
import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { NotFound } from './pages/NotFound'
import { PrivateRoute } from './routes/PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Navigate to="/sign-in" replace />,
      },
      {
        path: '/dragon-list',
        element: (
          <PrivateRoute>
            <DragonList />
          </PrivateRoute>
        ),
      },
      {
        path: '/dragon-add',
        element: (
          <PrivateRoute>
            <DragonCreate />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
