import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditTrainer() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    technology: '',
    phone_number: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/trainers/${id}`)
      .then(response => setFormData(response.data.data))
      .catch(error => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/trainers/${id}`, formData)
      .then(() => navigate('/'))
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Trainer</h2>
      <div className="mb-3">
        <label>Name</label>
        <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Location</label>
        <input type="text" name="location" className="form-control" value={formData.location} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Technology</label>
        <input type="text" name="technology" className="form-control" value={formData.technology} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Phone Number</label>
        <input type="text" name="phone_number" className="form-control" value={formData.phone_number} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Save Changes</button>
    </form>
  );
}

export default EditTrainer;