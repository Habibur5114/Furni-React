import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function CategoryList() {
    const [cat, setCat] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch Data
    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        axios.get(`${import.meta.env.VITE_API_URL}/category/index`)
            .then((response) => {
                setCat(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    };

    // Delete Data
    const deleteCategory = (id) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            axios
                .delete(`${import.meta.env.VITE_API_URL}/category/delete/${id}`)
                .then(() => {

                    setCat(cat.filter((item) => item.id !== id));
                    alert("Category deleted successfully");
                })
                .catch((error) => {
                    console.error(error);
                    alert("Failed to delete category");
                });
        }
    };

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="m-0">Category List</h5>
                <Link
                    to="/admin/category/create"
                    className="btn btn-success shadow-sm"
                >
                    <i className="fa fa-plus me-1"></i> Add New
                </Link>
            </div>

            <div className="card shadow-sm">
                <table className="table table-hover mb-0">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Image</th>
                            <th scope="col">Status</th>
                            <th scope="col" className="text-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="6" className="text-center">Loading...</td>
                            </tr>
                        ) : (
                            cat.map((item) => (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <img
                                            src={`${import.meta.env.VITE_API_IMG_URL}${item.image}`}
                                            alt={item.name}
                                            width="60"
                                            className="img-thumbnail"
                                        />
                                    </td>
                                    <td>
                                        {item.status === 1 ? (
                                            <span className="badge bg-success">Active</span>
                                        ) : (
                                            <span className="badge bg-danger">Inactive</span>
                                        )}
                                    </td>
                                    <td className="text-end">
                                        
                                        <Link
                                            to={`/admin/category/edit/${item.id}`}
                                            className="btn btn-sm btn-primary me-2">
                                            Edit
                                        </Link>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => deleteCategory(item.id)}
                                        >
                                            Delete
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
}

export default CategoryList;