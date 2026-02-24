import React, { Component } from "react";
import { Link } from 'react-router-dom';
export default class Create extends Component {
  render() {

    return (
      <div className="container-fluid py-5 bg-light min-vh-100">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-xl-12">
            <div className="card border-0 shadow-sm rounded-2">
              <div className="card-header bg-transparent border-bottom py-4 px-4">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="mb-0 fw-bold text-dark">Create New Category</h5>
                  <Link to="/admin/category/list" className="btn btn-success d-flex align-items-center shadow-sm px-3">
                    <i className="bi bi-plus-lg me-2"></i>
                    <span>Back</span>
                  </Link>
                </div>
              </div>

              <div className="card-body p-4">
                <form>
                  <div className="row g-4">
                    <div className="col-md-8">
                      <label className="form-label small  fw-bold text-muted">Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg border-2 shadow-none"
                        name="name"
                        placeholder="Enter Name"
                        value={name || ""}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-bold text-muted">Status</label>
                      <select
                        className="form-select form-control-lg border-2 shadow-none"
                        name="status"
                        value={status || 1}>
                        <option value={1}>Active</option>
                        <option value={0}>Inactive</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label  fw-bold text-muted">Image <span>(Recommended: Square image, max 2MB.)</span></label>
                      <div className="input-group">
                        <input
                          type="file"
                          className="form-control border-2 shadow-none"
                          name="image"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-bold text-muted">Description</label>
                      <textarea
                        className="form-control border-2 shadow-none"
                        rows="5"
                        name="description"
                        placeholder="Provide a brief summary of this category..."
                     
                      ></textarea>
                    </div>
                  </div>
                  <div className="mt-3 d-flex gap-2">
                    <button className="btn btn-primary fw-semibold shadow-sm" type="submit">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <p className="text-center text-muted mt-4 small">
            </p>
          </div>
        </div>
      </div>
    );
  }
}