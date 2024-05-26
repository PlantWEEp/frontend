import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
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
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }
      await axios.post(
        '/api/v1/admin/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const menubar = [
    { name: "Dashboard", url: "/", icon: "sticky-note" },
    { name: "List of question", url: "/admin/category", icon: "list" },
    { name: "List of students", url: "/admin/students", icon: "user" },
  ];

  return (
    <div style={{ height: "100vh" }}>
      <CDBSidebar style={{ height: "100%" }}>
        <Link to="/" style={{ color: "#000" }}>
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
            <span className="blue">My</span> Tution 
            <span className="blue"> App</span>
          </CDBSidebarHeader>
        </Link>
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
            <Link to="/admin/settings">
              <CDBSidebarMenuItem icon="cog">Settings</CDBSidebarMenuItem>
            </Link>
            <CDBSidebarMenuItem icon="sign-out-alt" onClick={handleLogout}>
              Logout
            </CDBSidebarMenuItem>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}
