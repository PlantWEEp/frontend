//Sidebar.jsx
import React from 'react';
import "./Style.css" ;
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';

export default function Sidebar() {
  return (
    <div style={{ height: '100vh' }}>
      <CDBSidebar style={{ height: '100%', }}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}><span class="blue">My</span> Tution <span class="blue">App</span></CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="sticky-note">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="th-large">List of Questions</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card">List Of Students</CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>
          <div
            className="sidebar-btn-wrapper"
            style={{ padding: '10px 3px' }}
          >
            <CDBSidebarMenuItem icon="cog">Settings</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sign-out-alt">Logout</CDBSidebarMenuItem>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  )
}



