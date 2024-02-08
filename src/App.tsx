import { Helmet, HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { router } from './routes'
import { GlobalStyles } from '@styles/GlobalStyles'

const queryCLient = new QueryClient()

export function App() {
  return (
    <>
      <GlobalStyles />
      <HelmetProvider>
        <Helmet titleTemplate="%s | Dragons APP" />
        <Toaster richColors position="top-center" />
        <QueryClientProvider client={queryCLient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </>
  )
}
