import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListDoctor() {
  const [doctors, setDoctors] = useState([]);
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [selectedDoctorId, setSelectedDoctorId] = useState(null); // Selected Doctor ID for deletion

  useEffect(() => {
    axios.get('http://localhost:8080/doctors')
      .then(response => setDoctors(response.data.data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (id) => {
    setSelectedDoctorId(id);
    setShowModal(true); // Show the modal for confirmation
  };

  const confirmDelete = () => {
    axios.delete(`http://localhost:8080/doctors/${selectedDoctorId}`)
      .then(() => {
        setDoctors(doctors.filter(doctor => doctor._id !== selectedDoctorId));
        setShowModal(false); // Hide the modal after deleting
        setSelectedDoctorId(null); // Reset selected ID
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <div className="d-flex justify-content-end mb-4">
        <Link to="/add" className="btn btn-success">Add Doctor</Link>
      </div>
      <table className="table text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>Location</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctor => (
            <tr key={doctor._id}>
              <td>{doctor.doctor_name}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.location}</td>
              <td>{doctor.phone_number}</td>
              <td>
                <Link to={`/edit/${doctor._id}`} className="btn btn-warning btn-sm">Edit</Link>
                <button onClick={() => handleDelete(doctor._id)} className="btn btn-danger btn-sm ms-2">Delete</button>
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
                <p>Are you sure you want to delete this doctor details?</p>
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

export default ListDoctor;