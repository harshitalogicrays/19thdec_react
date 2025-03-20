import React from 'react'
import Sidebar from './Sidebar'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <div className="flex h-screen"> <Sidebar />
      <div className="flex flex-col flex-grow">  <AdminNavbar />
        <main className="p-6 bg-gray-50 flex-grow overflow-y-auto"><Outlet/></main>
      </div> </div>
  )
}

export default AdminLayout
