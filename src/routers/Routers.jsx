import React from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NewOrder from '../pages/NewOrder'
import OrderDetail from '../pages/OrderDetail'
import Orders from '../pages/Orders'
import OrderUpdate from '../pages/OrderUpdate'
import Signup from '../pages/Signup'

const Routers = () => {
  return (
    <Routes>
       <Route path='/' element={<Navigate to='home' />}/>
       <Route path='home' element={<Home />}/>
       <Route path='orders' element={<Orders />}/>
       <Route path='login' element={<Login />}/>
       <Route path='signup' element={<Signup />}/>
       <Route path='new-order' element={<NewOrder />}/>
       <Route path='/orders/detail/:orderid' element={<OrderDetail />}/>
       <Route path='/orders/update/:orderid' element={<OrderUpdate />}/>
    </Routes>
  )
}

export default Routers