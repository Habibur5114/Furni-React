import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/index')
      .then(res => {
      
        setCategories(res.data.data || res.data); 
      })
      .catch(err => {
        console.error("API Error:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container-fluid py-5 bg-light min-vh-100">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="card border-0 shadow-sm rounded-2">
            
           
            <div className="card-header bg-white border-bottom py-3 d-flex align-items-center">
              <h6 className="mb-0 fw-bold text-dark">Category List</h6>
              
             
              <Link to="/admin/category/create" className="btn btn-success shadow-sm px-3 ms-auto">
                <i className="fa fa-plus me-1"></i> Add New
              </Link>
            </div>

            <div className="card-body p-0">
              <Table striped bordered hover responsive className="mb-0">
                <thead className="bg-light">
                  <tr>
                    <th width="5%">Sl</th>
                    <th width="20%">Name</th>
                    <th width="35%">Description</th>
                    <th width="15%">Image</th>
                    <th width="10%">Status</th>
                    <th width="15%" className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="6" className="text-center py-4">
                        <div className="spinner-border spinner-border-sm text-success me-2"></div>
                        Loading...
                      </td>
                    </tr>
                  ) : categories.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center py-4 text-muted">No Data Found</td>
                    </tr>
                  ) : (
                    categories.map((item, index) => (
                      <tr key={item.id} className="align-middle">
                        <td>{index + 1}</td>
                        <td className="fw-semibold">{item.name}</td>
                        <td>{item.description}</td>
                        <td>
                          {item.image ? (
                            <img 
                              src={`http://127.0.0.1:8000/uploads/${item.image}`} 
                              alt={item.name} 
                              className="rounded shadow-sm"
                              style={{ width: '60px', height: '40px', objectFit: 'cover' }} 
                            />
                          ) : (
                            <span className="text-muted small">No Image</span>
                          )}
                        </td>
                        <td>
                          <span className={`badge ${item.status === 1 ? 'bg-success' : 'bg-danger'}`}>
                            {item.status === 1 ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td className="text-center">
                          <Link to={`/admin/category/edit/${item.id}`} className="btn btn-outline-warning btn-sm me-2">
                            <i className="fa fa-edit"></i> Edit
                          </Link>
                          <button className="btn btn-outline-danger btn-sm">
                            <i className="fa fa-trash"></i> Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}