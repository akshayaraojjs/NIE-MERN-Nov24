import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListFlight() {
  const [flights, setFlights] = useState([]);
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [selectedFlightId, setSelectedFlightId] = useState(null); // Selected Flight ID for deletion

  useEffect(() => {
    axios.get('http://localhost:8080/flights')
      .then(response => setFlights(response.data.data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (id) => {
    setSelectedFlightId(id);
    setShowModal(true); // Show the modal for confirmation
  };

  const confirmDelete = () => {
    axios.delete(`http://localhost:8080/flights/${selectedFlightId}`)
      .then(() => {
        setFlights(flights.filter(flight => flight._id !== selectedFlightId));
        setShowModal(false); // Hide the modal after deleting
        setSelectedFlightId(null); // Reset selected ID
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <div className="d-flex justify-content-end mb-4">
        <Link to="/add" className="btn btn-success">Add Flight</Link>
      </div>
      <table className="table text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Airlines</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Fare</th>
            <th>Booking Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(flight => {
            const formattedDate = new Date(flight.booking_date).toISOString().split('T')[0];
            return (
              <tr key={flight._id}>
                <td>{flight.name}</td>
                <td>{flight.airlines}</td>
                <td>{flight.source}</td>
                <td>{flight.destination}</td>
                <td>Rs. {flight.fare}/-</td>
                <td>{formattedDate}</td>
                <td>
                  <Link to={`/edit/${flight._id}`} className="btn btn-warning btn-sm">Edit</Link>
                  <button onClick={() => handleDelete(flight._id)} className="btn btn-danger btn-sm ms-2">Delete</button>
                </td>
              </tr>
            );
          })}
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
                <p>Are you sure you want to delete this flight details?</p>
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

export default ListFlight;