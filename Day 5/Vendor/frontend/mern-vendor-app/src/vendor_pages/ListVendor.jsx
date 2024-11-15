import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListVendor() {
  const [vendors, setVendors] = useState([]);
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [selectedVendorId, setSelectedVendorId] = useState(null); // Selected Vendor ID for deletion

  useEffect(() => {
    axios.get('http://localhost:8080/vendors')
      .then(response => setVendors(response.data.data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (id) => {
    setSelectedVendorId(id);
    setShowModal(true); // Show the modal for confirmation
  };

  const confirmDelete = () => {
    axios.delete(`http://localhost:8080/vendors/${selectedVendorId}`)
      .then(() => {
        setVendors(vendors.filter(vendor => vendor._id !== selectedVendorId));
        setShowModal(false); // Hide the modal after deleting
        setSelectedVendorId(null); // Reset selected ID
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <div className="d-flex justify-content-end mb-4">
        <Link to="/add" className="btn btn-success">Add Vendor</Link>
      </div>
      <table className="table text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Rating</th>
            <th>Point of Contact</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map(vendor => (
            <tr key={vendor._id}>
              <td>{vendor.name}</td>
              <td>{vendor.location}</td>
              <td>{vendor.rating}</td>
              <td>{vendor.point_of_contact}</td>
              <td>{vendor.phone_number}</td>
              <td>
                <Link to={`/edit/${vendor._id}`} className="btn btn-warning btn-sm">Edit</Link>
                <button onClick={() => handleDelete(vendor._id)} className="btn btn-danger btn-sm ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for confirmation */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this vendor details?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={confirmDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListVendor;