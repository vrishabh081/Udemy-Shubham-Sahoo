import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Course from '../pages/course'
import Register from '../pages/register'
import Login from '../pages/login'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course' element={<Course/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
  )
}

export default AllRoutes
