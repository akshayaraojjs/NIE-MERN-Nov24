import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddTrainer() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    technology: '',
    phone_number: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/trainers', formData)
      .then(() => navigate('/'))
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Trainer</h2>
      <div className="mb-3">
        <label>Name</label>
        <input type="text" name="name" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Location</label>
        <input type="text" name="location" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Technology</label>
        <input type="text" name="technology" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Phone Number</label>
        <input type="text" name="phone_number" className="form-control" onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Add Trainer</button>
    </form>
  );
}

export default AddTrainer;