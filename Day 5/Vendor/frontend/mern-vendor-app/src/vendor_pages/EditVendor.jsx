import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditVendor() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    rating: '',
    point_of_contact: '',
    phone_number: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/vendors/${id}`)
      .then(response => setFormData(response.data.data))
      .catch(error => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/vendors/${id}`, formData)
      .then(() => navigate('/'))
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Vendor Details</h2>
      <div className="mb-3">
        <label>Name</label>
        <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Location</label>
        <input type="text" name="location" className="form-control" value={formData.location} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Rating</label>
        <input type="number" name="rating" className="form-control" value={formData.rating} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Point of Contact</label>
        <input type="text" name="point_of_contact" className="form-control" value={formData.point_of_contact} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Phone Number</label>
        <input type="text" name="phone_number" className="form-control" value={formData.phone_number} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Save Changes</button>
    </form>
  );
}

export default EditVendor;