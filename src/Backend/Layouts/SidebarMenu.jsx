import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class SidebarMenu extends Component {
  render() {
    return (
      <div>
        <div className="sidebar-brand">
          <h1 className="text-white">Furni</h1>
        </div>
        <div className="sidebar-wrapper">
          <nav className="mt-2">
            <ul
              className="nav sidebar-menu flex-column"
              data-lte-toggle="treeview"
              role="navigation"
              aria-label="Main navigation"
              id="navigation">

              <li className="nav-item">
                <NavLink
                  to="/admin/dashboard"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active bg-success text-white" : "text-white"}`
                  }>
                  <i className="bi bi-speedometer2 me-2"></i>
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/admin/category/list"
                  className={() => {
                    const isCategoryActive = window.location.pathname.startsWith("/admin/category");
                    return `nav-link ${isCategoryActive ? "active bg-success text-white" : "text-white"}`;
                  }}
                >
                  <i className="bi bi-grid me-2"></i>
                  <span>Category</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
