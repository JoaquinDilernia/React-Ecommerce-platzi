
import {BrowserRouter, useRoutes} from 'react-router-dom'
import Home from '../Home'
import SingIn from '../SingIn'
import NotFound from '../NotFound'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import Navbar from '../../Components//Navbar'
import './App.css'


const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/',element: <Home />},
    {path: '/my-account',element: <MyAccount />},
    {path: '/my-order',element: <MyOrder />},
    {path: '/my-orders',element: <MyOrders />},
    {path: '/sing-in',element: <SingIn />},
    {path: '/*',element: <NotFound />}
  ])
  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}

export default App
