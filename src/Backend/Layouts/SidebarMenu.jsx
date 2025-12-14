import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class SidebarMenu extends Component {
  render() {
    return (
      <div>
        <div className="sidebar-brand">
          <button
            className="brand-link btn btn-link p-0"
            onClick={this.handleClick}
          >
            <img
              src="/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image opacity-75 shadow"
            />
            <span className="brand-text fw-light">AdminLTE 4</span>
          </button>
        </div>

        <div className="sidebar-wrapper">
          <nav className="mt-2">
            <ul
              className="nav sidebar-menu flex-column"
              data-lte-toggle="treeview"
              role="navigation"
              aria-label="Main navigation"
              data-accordion="false"
              id="navigation"
            >
              <li className="nav-item menu-open">
                <Link to="/admin/dashboard" className="nav-link btn btn-link">
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/admin/category/list" className="nav-link btn btn-link">
                  <p>Category</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
