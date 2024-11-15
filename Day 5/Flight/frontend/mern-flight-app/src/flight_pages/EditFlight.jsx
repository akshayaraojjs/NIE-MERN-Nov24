import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditFlight() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    airlines: '',
    source: '',
    destination: '',
    fare: '',
    booking_date: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/flights/${id}`)
      .then(response => {
        const fetchedData = response.data.data;
        setFormData({
          ...fetchedData,
          booking_date: new Date(fetchedData.booking_date).toISOString().split('T')[0]  // Format date to YYYY-MM-DD
        });
      })
      .catch(error => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/flights/${id}`, formData)
      .then(() => navigate('/'))
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Flight Details</h2>
      <div className="mb-3">
        <label>Name</label>
        <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Airlines</label>
        <input type="text" name="airlines" className="form-control" value={formData.airlines} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Source</label>
        <input type="text" name="source" className="form-control" value={formData.source} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Destination</label>
        <input type="text" name="destination" className="form-control" value={formData.destination} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Fare</label>
        <input type="number" name="fare" className="form-control" value={formData.fare} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Booking Date</label>
        <input type="date" name="booking_date" className="form-control" value={formData.booking_date} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Save Changes</button>
    </form>
  );
}

export default EditFlight;