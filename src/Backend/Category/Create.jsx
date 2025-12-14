// import React, { Component } from "react";

// export default class Create extends Component {
//   render() {
//     return (
//       <div className="container-fluid p-4">
//         <div className="row justify-content-center">
//           <div className="col-lg-12">
//             <div className="card shadow-sm border-0">
//               {/* Header */}
//               <div className="card-header bg-white d-flex align-items-center mt-4">
//                 <h5 className="mb-0 fw-semibold">Create Category</h5>
//               </div>

//               {/* Body */}
//               <div className="card-body">
//                 <form>
//                   <div className="row">
//                     {/* Name */}
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label fw-semibold">Name</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Enter category name"
//                       />
//                     </div>

//                     {/* Status */}
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label fw-semibold">Status</label>
//                       <select className="form-select">
//                         <option>Active</option>
//                         <option>Inactive</option>
//                       </select>
//                     </div>

//                     {/* Image */}
//                     <div className="col-md-12 mb-3">
//                       <label className="form-label fw-semibold">Image</label>
//                       <input type="file" className="form-control" />
//                     </div>

//                     {/* Description */}
//                     <div className="col-md-12 mb-3">
//                       <label className="form-label fw-semibold">
//                         Description
//                       </label>
//                       <textarea
//                         className="form-control"
//                         rows="4"
//                         placeholder="Write short description..."
//                       ></textarea>
//                     </div>
//                   </div>
//                 </form>
//                 <button className="btn btn-primary mb-4">Save</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
import React, { Component } from "react";
import axios from "axios"; 

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: "Active",
      image: null,
      description: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFileChange = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("status", this.state.status);
    formData.append("image", this.state.image);
    formData.append("description", this.state.description);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/admin/category/store",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Success:", response.data);
      alert("Category created successfully!");
    } catch (error) {
      console.error("Error:", error.response);
      alert("Failed to create category.");
    }
  };

  render() {
    return (
      <div className="container-fluid p-4">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="card shadow-sm border-0">
              {/* Header */}
              <div className="card-header bg-white d-flex align-items-center mt-4">
                <h5 className="mb-0 fw-semibold">Create Category</h5>
              </div>

              {/* Body */}
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    {/* Name */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter category name"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </div>

                    {/* Status */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">Status</label>
                      <select
                        className="form-select"
                        name="status"
                        value={this.state.status}
                        onChange={this.handleChange}
                      >
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                    </div>

                    {/* Image */}
                    <div className="col-md-12 mb-3">
                      <label className="form-label fw-semibold">Image</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={this.handleFileChange}
                      />
                    </div>

                    {/* Description */}
                    <div className="col-md-12 mb-3">
                      <label className="form-label fw-semibold">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        name="description"
                        rows="4"
                        placeholder="Write short description..."
                        value={this.state.description}
                        onChange={this.handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mb-4">
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
