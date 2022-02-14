import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PropertyListings from './pages/PropertyListings/PropertyListings';

export default (
  <BrowserRouter>
    <Routes>
      <Route element={<PropertyListings />} path="/" />
    </Routes>
  </BrowserRouter>
);
