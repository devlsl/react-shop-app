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
        element: <Loginpage />
      },
      {
        path: 'favorites',
        element: <Favoreitespage />
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
        <CartProvider>
          <FavoritesProvider>
            <RouterProvider router={router} />
          </FavoritesProvider>
        </CartProvider>
      </AuthProvider>
    </>
  )
}

export default App
