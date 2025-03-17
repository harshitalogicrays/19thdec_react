import React from 'react'
import { Outlet } from 'react-router'

const Header = () => {
  return (
    <div>
        header
        <Outlet/>
    </div>
  )
}

export default Header
