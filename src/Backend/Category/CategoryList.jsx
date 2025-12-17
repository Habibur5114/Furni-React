import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch categories
  const fetchCategories = () => {
    setLoading(true);
    axios
      .get("http://localhost:8000/api/category/index")
      .then((res) => {
        setCategories(res.data.data || []);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Delete category function
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;

    try {
      await axios.delete(`http://localhost:8000/api/category/delete/${id}`);
      alert("Category deleted successfully!");
      fetchCategories(); // Refresh the list
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete category!");
    }
  };

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-center text-danger">Error: {error}</p>;

  return (
    <div className="m-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="text-primary">Category List</h3>
        <Link to="/admin/category/create" className="btn btn-success shadow-sm">
          <i className="bi bi-plus-lg me-1"></i> Add New
        </Link>
      </div>

      <div className="table-responsive shadow-sm rounded">
        <table className="table table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col" className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">
                  No categories found.
                </td>
              </tr>
            ) : (
              categories.map((cat, index) => (
                <tr key={cat.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{cat.name}</td>
                  <td>
                    <img
                      src={`http://localhost:8000/${cat.image}`}
                      alt={cat.name}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
                  <td>{cat.description}</td>
                  <td>
                    <span className={`badge ${cat.status === 1 ? "bg-success" : "bg-danger"}`}>
                      {cat.status === 1 ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="text-center">
                    <Link to={`/admin/category/edit/${cat.id}`} className="btn btn-warning btn-sm me-1">
                      <i className="bi bi-pencil-square"></i>
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(cat.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryList;
