import React, { Component } from "react";

export default class Create extends Component {
  state = {
    name: "",
    status: 1,
    description: "",
    image: null,
  };

  handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      this.setState({ image: files[0] });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, status, description, image } = this.state;

    // Prepare form data for file upload
    const formData = new FormData();
    formData.append("name", name);
    formData.append("status", status);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      const response = await fetch("http://localhost:8000/api/category/store", {
        method: "POST",
        body: formData,
        // Note: Do NOT set Content-Type header for FormData
      });

      const data = await response.json();
      console.log("Success:", data);
      alert("Category created successfully!");
      this.setState({ name: "", status: 1, description: "", image: null });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create category!");
    }

    
  };

  render() {
    const { name, status, description } = this.state;
    return (
      <div className="container-fluid p-4">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-white d-flex align-items-center mt-4">
                <h5 className="mb-0 fw-semibold">Create Category</h5>
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
                        placeholder="Enter category name"
                        value={name}
                        onChange={this.handleChange}
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
                        placeholder="Write short description..."
                        value={description}
                        onChange={this.handleChange}
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
      </div>
    );
  }
}
