import React from 'react'
import Header from '../Navbar/Header'
import Sidebar from '../Navbar/Sidebar'

function EditUserPage() {
  return (
    <>
    <div>
    <div className="top-bar">
          <Header />
        </div>
        <div className="sider-bar">
          <Sidebar />
        </div>
    </div>
    </>
  )
}

export default EditUserPage