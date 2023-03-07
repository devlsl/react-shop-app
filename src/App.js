import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cards from './components/Cards'
import { Layout } from './components/Layout'
import { Aboutpage } from './pages/Aboutpage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Cards />
      },
      {
        path: 'about',
        element: <Aboutpage />
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
