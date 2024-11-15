import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListVendor from './vendor_pages/ListVendor';
import AddVendor from './vendor_pages/AddVendor';
import EditVendor from './vendor_pages/EditVendor';

function App() {
  return (
    <div className="container">
      <h1 className="my-4 text-center text-primary">Vendor Management</h1>
      <Routes>
        <Route path="/" element={<ListVendor />} />
        <Route path="/add" element={<AddVendor />} />
        <Route path="/edit/:id" element={<EditVendor />} />
      </Routes>
    </div>
  );
}

export default App;