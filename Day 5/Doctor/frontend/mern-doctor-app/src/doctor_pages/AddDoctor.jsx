import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddDoctor() {
  const [formData, setFormData] = useState({
    doctor_name: '',
    specialization: '',
    location: '',
    phone_number: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/doctors', formData)
      .then(() => navigate('/'))
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Doctor</h2>
      <div className="mb-3">
        <label>Name</label>
        <input type="text" name="doctor_name" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Specialization</label>
        <input type="text" name="specialization" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Location</label>
        <input type="text" name="location" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Phone Number</label>
        <input type="text" name="phone_number" className="form-control" onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Add Doctor</button>
    </form>
  );
}

export default AddDoctor;