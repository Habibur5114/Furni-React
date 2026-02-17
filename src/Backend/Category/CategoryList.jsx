
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
        setCategories(res.data.data);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container-fluid py-5 bg-light min-vh-100">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="card border-0 shadow-sm rounded-2">
            <div className="card-header bg-white border-bottom py-3 d-flex justify-content-between align-items-center">
              <h6 className="mb-0 fw-bold text-dark">Category List</h6>
              <Link to="/admin/category/create" className="btn btn-success shadow-sm px-3">Add New</Link>
            </div>

            <Table striped bordered hover className="mt-3">
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Status</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan="6" className="text-center">Loading...</td></tr>
                ) : categories.length === 0 ? (
                  <tr><td colSpan="6" className="text-center">No Data Found</td></tr>
                ) : (
                  categories.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.image && <img src={`http://127.0.0.1:8000/uploads/${item.image}`} alt={item.name} width="60" />}</td>
                      <td>{item.status === 1 ? 'Active' : 'Inactive'}</td>
                      <td className="text-center">
                        <Link to={`/admin/category/edit/${item.id}`} className="btn btn-warning btn-sm m-1">Edit</Link>
                        <button className="btn btn-danger btn-sm m-1">Delete</button>
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
  );
}



