import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../Component/Navbar'


export default function MainLayOut() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
