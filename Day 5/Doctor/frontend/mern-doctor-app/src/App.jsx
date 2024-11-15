import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListDoctor from './doctor_pages/ListDoctor';
import AddDoctor from './doctor_pages/AddDoctor';
import EditDoctor from './doctor_pages/EditDoctor';

function App() {
  return (
    <div className="container">
      <h1 className="my-4 text-center text-success">Doctor Management</h1>
      <Routes>
        <Route path="/" element={<ListDoctor />} />
        <Route path="/add" element={<AddDoctor />} />
        <Route path="/edit/:id" element={<EditDoctor />} />
      </Routes>
    </div>
  );
}

export default App;