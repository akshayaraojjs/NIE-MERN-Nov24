import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListFlight from './flight_pages/ListFlight';
import AddFlight from './flight_pages/AddFlight';
import EditFlight from './flight_pages/EditFlight';

function App() {
  return (
    <div className="container">
      <h1 className="my-4 text-center text-primary">Flight Management</h1>
      <Routes>
        <Route path="/" element={<ListFlight />} />
        <Route path="/add" element={<AddFlight />} />
        <Route path="/edit/:id" element={<EditFlight />} />
      </Routes>
    </div>
  );
}

export default App;