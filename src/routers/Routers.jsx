import React from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NewOrder from '../pages/NewOrder'
import Orders from '../pages/Orders'
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
    </Routes>
  )
}

export default Routers