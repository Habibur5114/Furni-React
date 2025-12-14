import React from "react";
import { Link } from "react-router-dom";
const CategoryList = () => {
  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="card shadow-sm border-0">
        <div className="card-header bg-white d-flex align-items-center">
          <h5 className="mb-0 fw-semibold">Category List</h5>

          <Link to="/admin/category/create" className="ms-auto">
            <button className="btn btn-warning btn-sm">
              <i className="bi bi-plus-lg me-1"></i> Add New
            </button>
          </Link>
        </div>

        {/* Table */}
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>Electronics</td>
                  <td>
                    <div
                      className="bg-secondary rounded"
                      style={{ width: 40, height: 40 }}
                    ></div>
                  </td>
                  <td>Electronic products category</td>
                  <td>
                    <span className="badge bg-success">Active</span>
                  </td>
                  <td className="text-end">
                    <button className="btn btn-outline-primary btn-sm me-2">
                      Edit
                    </button>
                    <button className="btn btn-outline-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="card-header bg-white d-flex align-items-center">
          <small className="text-muted">Showing 1–2 of 2 entries</small>

          <nav className="ms-auto">
            <ul className="pagination pagination-sm mb-0">
              <li className="page-item disabled">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
