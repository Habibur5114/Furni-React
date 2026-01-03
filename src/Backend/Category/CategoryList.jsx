import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

export default class CategoryList extends Component {
  render() {
    return (
      <div className="container-fluid py-5 bg-light min-vh-100">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-xl-12">
            <div className="card border-0 shadow-sm rounded-2">
              <div className="card-header bg-transparent border-bottom py-4 px-4">
                <div className="card-header bg-white border-bottom py-3">
                  <div className="d-flex align-items-center justify-content-between">
                    {/* Left Side: Title & Icon */}
                    <div className="d-flex align-items-center">
                      <div className="bg-light-primary rounded-circle d-none">
                        <i className="bi bi-list-ul text-primary"></i>
                      </div>
                      <h6 className="mb-0 fw-bold text-dark">Category List</h6>
                    </div>

                    {/* Right Side: Action Button */}
                    <Link to="/admin/category/create" className="btn btn-success d-flex align-items-center shadow-sm px-3">
                      <i className="bi bi-plus-lg me-2"></i>
                      <span>Add New</span>
                    </Link>
                  </div>
                </div>

                <Table striped bordered hover className='mt-3'>
                  <thead>
                    <tr>
                        <th style={{ width: '5%' }} className="ps-4">Sl</th>
                        {/* Applied 20% width to these columns */}
                        <th style={{ width: '20%' }}>Name</th>
                        <th style={{ width: '35%' }}>Description</th>
                        <th style={{ width: '15%' }}>Image</th>
                        <th style={{ width: '15%' }}>Status</th>
                        <th style={{ width: '10%' }} className="text-center pe-4">Action</th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Active</td>
                      <td >
                        <a href="" className='btn btn-warning btn-sm m-1'>Edit</a>
                        <a href="" className='btn btn-danger btn-sm m-1'>Delete</a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Active</td>
                       <td >
                        <a href="" className='btn btn-warning btn-sm m-1'>Edit</a>
                        <a href="" className='btn btn-danger btn-sm m-1'>Delete</a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Active</td>
                       <td >
                        <a href="" className='btn btn-warning btn-sm m-1'>Edit</a>
                        <a href="" className='btn btn-danger btn-sm m-1'>Delete</a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Active</td>
                       <td >
                        <a href="" className='btn btn-warning btn-sm m-1'>Edit</a>
                        <a href="" className='btn btn-danger btn-sm m-1'>Delete</a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Active</td>
                       <td >
                        <a href="" className='btn btn-warning btn-sm m-1'>Edit</a>
                        <a href="" className='btn btn-danger btn-sm m-1'>Delete</a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Active</td>
                       <td >
                        <a href="" className='btn btn-warning btn-sm m-1'>Edit</a>
                        <a href="" className='btn btn-danger btn-sm m-1'>Delete</a>
                      </td>
                    </tr>
                    
                  </tbody>
                </Table>



              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
