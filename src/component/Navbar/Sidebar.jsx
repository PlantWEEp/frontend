// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import "./Style.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';

export default function Sidebar() {
  const menubar = [
    { name: "Dashboard", url: "/", icon: "sticky-note" },
    { name: "List of question", url: "/admin/questions", icon: "list" },
    { name: "List of students", url: "/admin/students", icon: "user" }
  ];

  return (
    <div style={{ height: '100vh' }}>
      <CDBSidebar style={{ height: '100%' }}>
        <CDBSidebarHeader prefix={<i class="fa fa-bars" />}><span class="blue">My</span> Tution <span class="blue">App</span></CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            {menubar.map(item => (
              <Link to={item.url} key={item.name}><CDBSidebarMenuItem icon={item.icon}>{item.name}</CDBSidebarMenuItem></Link>
            ))}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>
          <div
            class="sidebar-btn-wrapper"
            style={{ padding: '10px 3px' }}
          >
            <CDBSidebarMenuItem icon="cog">Settings</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sign-out-alt">Logout</CDBSidebarMenuItem>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}
