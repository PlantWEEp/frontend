import React from 'react'
import Header from '../component/Navbar/Header'
import Sidebar from '../component/Navbar/Sidebar'

export default function Dashboard() {
  return (
    <> 
  <div>
    <div>
        <Header></Header>  
    </div>
    <div>
         <Sidebar></Sidebar>
    </div>
  </div>
    </>
  )
}
