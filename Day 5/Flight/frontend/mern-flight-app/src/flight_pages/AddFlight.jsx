import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddFlight() {
  const [formData, setFormData] = useState({
    name: '',
    airlines: '',
    source: '',
    destination: '',
    fare: '',
    booking_date: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/flights', formData)
      .then(() => navigate('/'))
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Flight</h2>
      <div className="mb-3">
        <label>Name</label>
        <input type="text" name="name" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Airlines</label>
        <input type="text" name="airlines" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Source</label>
        <input type="text" name="source" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Destination</label>
        <input type="text" name="destination" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Fare</label>
        <input type="number" name="fare" className="form-control" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Booking Date</label>
        <input type="date" name="booking_date" className="form-control" onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Add Flight</button>
    </form>
  );
}

export default AddFlight;