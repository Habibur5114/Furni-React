import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
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
    )
  }
}
