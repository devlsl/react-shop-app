import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Catalogpage } from './pages/Catalogpage'
import { Layout } from './components/Layout'
import { Trackingpage } from './pages/Trackingpage'
import { Notfoundpage } from './pages/Notfoundpage'
import { Orderspage } from './pages/Orderspage'

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
        element: <Trackingpage />
      },
      {
        path: 'orders',
        element: <Orderspage />
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
      <RouterProvider router={router} />
    </>
  )
}

export default App
