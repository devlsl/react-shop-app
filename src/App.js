import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Catalogpage } from './pages/Catalogpage'
import { Layout } from './components/Layout'
import { Trackingpage } from './pages/Trackingpage'
import { Notfoundpage } from './pages/Notfoundpage'
import { Cartpage } from './pages/Cartpage'

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
