import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TrainerList() {
  const [trainers, setTrainers] = useState([]);
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [selectedTrainerId, setSelectedTrainerId] = useState(null); // Selected trainer ID for deletion

  useEffect(() => {
    axios.get('http://localhost:8080/trainers')
      .then(response => setTrainers(response.data.data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (id) => {
    setSelectedTrainerId(id);
    setShowModal(true); // Show the modal for confirmation
  };

  const confirmDelete = () => {
    axios.delete(`http://localhost:8080/trainers/${selectedTrainerId}`)
      .then(() => {
        setTrainers(trainers.filter(trainer => trainer._id !== selectedTrainerId));
        setShowModal(false); // Hide the modal after deleting
        setSelectedTrainerId(null); // Reset selected ID
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <div className="d-flex justify-content-end mb-4">
        <Link to="/add" className="btn btn-outline-primary">Add Trainer</Link>
      </div>
      <table className="table text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Technology</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map(trainer => (
            <tr key={trainer._id}>
              <td>{trainer.name}</td>
              <td>{trainer.location}</td>
              <td>{trainer.technology}</td>
              <td>{trainer.phone_number}</td>
              <td>
                <Link to={`/edit/${trainer._id}`} className="btn btn-warning btn-sm">Edit</Link>
                <button onClick={() => handleDelete(trainer._id)} className="btn btn-danger btn-sm ms-2">Delete</button>
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
                <p>Are you sure you want to delete this trainer?</p>
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

export default TrainerList;