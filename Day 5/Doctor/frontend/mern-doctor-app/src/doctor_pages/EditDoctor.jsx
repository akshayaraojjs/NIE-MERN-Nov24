import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditDoctor() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    doctor_name: '',
    specialization: '',
    location: '',
    phone_number: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/doctors/${id}`)
      .then(response => setFormData(response.data.data))
      .catch(error => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/doctors/${id}`, formData)
      .then(() => navigate('/'))
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Doctor Details</h2>
      <div className="mb-3">
        <label>Name</label>
        <input type="text" name="doctor_name" className="form-control" value={formData.doctor_name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Specialization</label>
        <input type="text" name="specialization" className="form-control" value={formData.specialization} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Location</label>
        <input type="text" name="location" className="form-control" value={formData.location} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Phone Number</label>
        <input type="text" name="phone_number" className="form-control" value={formData.phone_number} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Save Changes</button>
    </form>
  );
}

export default EditDoctor;