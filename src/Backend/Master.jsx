import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default class Master extends Component {
  handleClick = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="layout-fixed sidebar-expand-lg bg-body-tertiary">
        <div className="app-wrapper">
          <nav className="app-header navbar navbar-expand bg-body">
            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    data-lte-toggle="sidebar"
                    onClick={this.handleClick}
                  >
                    <i className="bi bi-list"></i>
                  </button>
                </li>
                <li className="nav-item d-none d-md-block">
                  <button
                    className="nav-link btn btn-link"
                    onClick={this.handleClick}
                  >
                    Home
                  </button>
                </li>
                <li className="nav-item d-none d-md-block">
                  <button
                    className="nav-link btn btn-link"
                    onClick={this.handleClick}
                  >
                    Contact
                  </button>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    data-widget="navbar-search"
                    onClick={this.handleClick}
                  >
                    <i className="bi bi-search"></i>
                  </button>
                </li>

                <li className="nav-item dropdown">
                  <button
                    className="nav-link btn btn-link"
                    data-bs-toggle="dropdown"
                  >
                    <i className="bi bi-chat-text"></i>
                    <span className="navbar-badge badge text-bg-danger">3</span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                    <button
                      className="dropdown-item"
                      onClick={this.handleClick}
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <img
                            src="./assets/img/user1-128x128.jpg"
                            alt="User Avatar"
                            className="img-size-50 rounded-circle me-3"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h3 className="dropdown-item-title">
                            Brad Diesel
                            <span className="float-end fs-7 text-danger">
                              <i className="bi bi-star-fill"></i>
                            </span>
                          </h3>
                          <p className="fs-7">Call me whenever you can...</p>
                          <p className="fs-7 text-secondary">
                            <i className="bi bi-clock-fill me-1"></i> 4 Hours
                            Ago
                          </p>
                        </div>
                      </div>
                    </button>
                    <div className="dropdown-divider"></div>
                    <button
                      className="dropdown-item"
                      onClick={this.handleClick}
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <img
                            src="./assets/img/user8-128x128.jpg"
                            alt="User Avatar"
                            className="img-size-50 rounded-circle me-3"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h3 className="dropdown-item-title">
                            John Pierce
                            <span className="float-end fs-7 text-secondary">
                              <i className="bi bi-star-fill"></i>
                            </span>
                          </h3>
                          <p className="fs-7">I got your message bro</p>
                          <p className="fs-7 text-secondary">
                            <i className="bi bi-clock-fill me-1"></i> 4 Hours
                            Ago
                          </p>
                        </div>
                      </div>
                    </button>
                    <div className="dropdown-divider"></div>
                    <button
                      className="dropdown-item"
                      onClick={this.handleClick}
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <img
                            src="./assets/img/user3-128x128.jpg"
                            alt="User Avatar"
                            className="img-size-50 rounded-circle me-3"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h3 className="dropdown-item-title">
                            Nora Silvester
                            <span className="float-end fs-7 text-warning">
                              <i className="bi bi-star-fill"></i>
                            </span>
                          </h3>
                          <p className="fs-7">The subject goes here</p>
                          <p className="fs-7 text-secondary">
                            <i className="bi bi-clock-fill me-1"></i> 4 Hours
                            Ago
                          </p>
                        </div>
                      </div>
                    </button>
                    <div className="dropdown-divider"></div>
                    <button
                      className="dropdown-item dropdown-footer"
                      onClick={this.handleClick}
                    >
                      See All Messages
                    </button>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <button
                    className="nav-link btn btn-link"
                    data-bs-toggle="dropdown"
                  >
                    <i className="bi bi-bell-fill"></i>
                    <span className="navbar-badge badge text-bg-warning">
                      15
                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                    <span className="dropdown-item dropdown-header">
                      15 Notifications
                    </span>
                    <div className="dropdown-divider"></div>
                    <button
                      className="dropdown-item"
                      onClick={this.handleClick}
                    >
                      <i className="bi bi-envelope me-2"></i> 4 new messages
                      <span className="float-end text-secondary fs-7">
                        3 mins
                      </span>
                    </button>
                    <div className="dropdown-divider"></div>
                    <button
                      className="dropdown-item"
                      onClick={this.handleClick}
                    >
                      <i className="bi bi-people-fill me-2"></i> 8 friend
                      requests
                      <span className="float-end text-secondary fs-7">
                        12 hours
                      </span>
                    </button>
                    <div className="dropdown-divider"></div>
                    <button
                      className="dropdown-item"
                      onClick={this.handleClick}
                    >
                      <i className="bi bi-file-earmark-fill me-2"></i> 3 new
                      reports
                      <span className="float-end text-secondary fs-7">
                        2 days
                      </span>
                    </button>
                    <div className="dropdown-divider"></div>
                    <button
                      className="dropdown-item dropdown-footer"
                      onClick={this.handleClick}
                    >
                      See All Notifications
                    </button>
                  </div>
                </li>

                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    data-lte-toggle="fullscreen"
                    onClick={this.handleClick}
                  >
                    <i
                      data-lte-icon="maximize"
                      className="bi bi-arrows-fullscreen"
                    ></i>
                    <i
                      data-lte-icon="minimize"
                      className="bi bi-fullscreen-exit"
                      style={{ display: "none" }}
                    ></i>
                  </button>
                </li>

                <li className="nav-item dropdown user-menu">
                  <button
                    className="nav-link btn btn-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src="/img/user2-160x160.jpg"
                      className="user-image rounded-circle shadow"
                      alt="User"
                    />
                    <span className="d-none d-md-inline">Alexander Pierce</span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                    <li className="user-header text-bg-primary">
                      <img
                        src="./assets/img/user2-160x160.jpg"
                        className="rounded-circle shadow"
                        alt="User"
                      />
                      <p>
                        Alexander Pierce - Web Developer
                        <small>Member since Nov. 2023</small>
                      </p>
                    </li>

                    <li className="user-body">
                      <div className="row">
                        <div className="col-4 text-center">
                          <button
                            className="btn btn-link"
                            onClick={this.handleClick}
                          >
                            Followers
                          </button>
                        </div>
                        <div className="col-4 text-center">
                          <button
                            className="btn btn-link"
                            onClick={this.handleClick}
                          >
                            Sales
                          </button>
                        </div>
                        <div className="col-4 text-center">
                          <button
                            className="btn btn-link"
                            onClick={this.handleClick}
                          >
                            Friends
                          </button>
                        </div>
                      </div>
                    </li>

                    <li className="user-footer">
                      <button
                        className="btn btn-outline-secondary"
                        onClick={this.handleClick}
                      >
                        Profile
                      </button>
                      <button
                        className="btn btn-outline-danger float-end"
                        onClick={this.handleClick}
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>

          <aside
            className="app-sidebar bg-body-secondary shadow"
            data-bs-theme="dark"
          >
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
                    <Link
                      to="/admin/dashboard"
                      className="nav-link btn btn-link"
                    >
                     
                      <p>
                        
                        Dashboard
                        <i className="nav-arrow bi bi-chevron-right"></i>
                      </p>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          <main className="app-main">
            <Outlet />
          </main>

          <footer className="app-footer">
            <div class="float-end d-none d-sm-inline">Anything you want</div>
            <strong>
              Copyright &copy; 2014-2025&nbsp;
              <a href="https://adminlte.io" class="text-decoration-none">
                AdminLTE.io
              </a>
              .
            </strong>
            All rights reserved.
          </footer>
        </div>
      </div>
    );
  }
}
