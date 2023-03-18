import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Catalogpage } from './pages/Catalogpage'
import { Layout } from './components/Layout'
import { Trackingpage } from './pages/Trackingpage'
import { Notfoundpage } from './pages/Notfoundpage'
import { Orderspage } from './pages/Orderspage'
import { Loginpage } from './pages/Loginpage'
import { RequireAuth } from './hoc/RequireAuth'
import { CartProvider } from './hoc/CartProvider'
import { FavoritesProvider } from './hoc/FavoriteProvider'
import { AuthProvider } from './hoc/AuthProvider'
import { Test } from './serverMethods/Test'
import { Favoreitespage } from './pages/Favoreitespage'
import { CheckUserInStorage } from './hoc/CheckUserInStorage'
import { ToLoginPage } from './hoc/ToLoginPage'
import { TempCartProvider } from './hoc/TempCartProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Catalogpage />
      },
      {
        path: 'tracking',
        element: (
          <RequireAuth>
            <Trackingpage />
          </RequireAuth>
        )
      },
      {
        path: 'orders',
        element: (
          <RequireAuth>
            <Orderspage />
          </RequireAuth>
        )
      },
      {
        path: 'login',
        element: <ToLoginPage />
      },
      {
        path: 'favorites',
        element: (
          <RequireAuth>
            <Favoreitespage />
          </RequireAuth>
        )
      },
      {
        path: 'test',
        element: <Test />
      },
      {
        path: '*',
        element: <Notfoundpage />
      }
    ]
  }
])

function App() {
  return (
    <>
      <AuthProvider>
        <CheckUserInStorage>
          <CartProvider>
            <FavoritesProvider>
              <TempCartProvider>
                <RouterProvider router={router} />
              </TempCartProvider>
            </FavoritesProvider>
          </CartProvider>
        </CheckUserInStorage>
      </AuthProvider>
    </>
  )
}

export default App
