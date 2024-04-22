// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Style.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";

export default function Sidebar() {
  const menubar = [
    { name: "Dashboard", url: "/", icon: "sticky-note" },
    { name: "List of question", url: "/admin/questions", icon: "list" },
    { name: "List of students", url: "/admin/students", icon: "user" },
  ];

  return (
    <div style={{ height: "100vh" }}>
      <CDBSidebar style={{ height: "100%" }}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          <span className="blue">My</span> Tution{" "}
          <span className="blue">App</span>
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            {menubar.map((item) => (
              <Link to={item.url} key={item.name}>
                <CDBSidebarMenuItem icon={item.icon}>
                  {item.name}
                </CDBSidebarMenuItem>
              </Link>
            ))}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>
          <div className="sidebar-btn-wrapper" style={{ padding: "10px 3px" }}>
            <Link to="/admin/settings"><CDBSidebarMenuItem icon="cog">Settings</CDBSidebarMenuItem></Link>
            <CDBSidebarMenuItem icon="sign-out-alt">Logout</CDBSidebarMenuItem>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}
