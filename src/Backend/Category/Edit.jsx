

import React, { Component } from "react";

export default class Edit extends Component {
  state = {
    name: "",
    status: 1,
    description: "",
    image: null,
  };

  componentDidMount() {
    // Fetch existing category data (example)
    const categoryId = 1; // replace with dynamic id if needed
    fetch(`http://localhost:8000/api/category/index/${categoryId}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          name: data.name,
          status: data.status,
          description: data.description,
        })
      )
      .catch((err) => console.error(err));
  }

  handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      this.setState({ image: files[0] });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, status, description, image } = this.state;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("status", status);
    formData.append("description", description);
    if (image) formData.append("image", image);

    // Mock API update request
    fetch(`http://localhost:8000/api/category/update/id`, {
      method: "POST", // or PUT depending on your backend
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Category updated successfully!");
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  render() {
    const { name, status, description } = this.state;

    return (
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-white d-flex align-items-center mt-4">
              <h5 className="mb-0 fw-semibold">Edit Category</h5>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                      placeholder="Enter category name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Status</label>
                    <select
                      className="form-select"
                      name="status"
                      value={status}
                      onChange={this.handleChange}
                    >
                      <option value={1}>Active</option>
                      <option value={0}>Inactive</option>
                    </select>
                  </div>
                  <div className="col-md-12 mb-3">
                    <label className="form-label fw-semibold">Image</label>
                    <input
                      type="file"
                      className="form-control"
                      name="image"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label className="form-label fw-semibold">Description</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      name="description"
                      value={description}
                      onChange={this.handleChange}
                      placeholder="Write short description..."
                    ></textarea>
                  </div>
                </div>
                <button className="btn btn-primary mb-4" type="submit">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
