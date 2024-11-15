import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddVendor() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    rating: '',
    point_of_contact: '',
    phone_number: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/vendors', formData)
      .then(() => navigate('/'))
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Vendor</h2>
      <div className="mb-3">
        <label>Name</label>
        <input type="text" name="name" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Location</label>
        <input type="text" name="location" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Rating</label>
        <input type="number" name="rating" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Point of Contact</label>
        <input type="text" name="point_of_contact" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Phone Number</label>
        <input type="text" name="phone_number" className="form-control" onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Add Vendor</button>
    </form>
  );
}

export default AddVendor;