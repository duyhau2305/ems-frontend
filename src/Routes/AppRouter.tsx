import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Dashboard from '../Pages/Dashboard';

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/dashboard" element={
        <MainLayout>
          <Dashboard />
        </MainLayout>
      } />
    </Routes>
  </Router>
);

export default AppRouter;