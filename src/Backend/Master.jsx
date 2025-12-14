import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import NavbarMenu from "./Layouts/NavbarMenu";
import SidebarMenu from "./Layouts/SidebarMenu";
import Footer from "./Layouts/Footer";

export default class Master extends Component {
  handleClick = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="layout-fixed sidebar-expand-lg bg-body-tertiary">
        <div className="app-wrapper">
          <NavbarMenu />

          <aside
            className="app-sidebar bg-body-secondary shadow"
            data-bs-theme="dark"
          >
            <SidebarMenu />
          </aside>

          <main className="app-main">
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    );
  }
}
