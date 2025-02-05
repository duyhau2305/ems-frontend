import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Dashboard from '../Pages/Dashboard';

import PerformanceChart from '../Components/Chart/BarChart/PerformanceChart';
import Area01 from '../Pages/KPis Area/Area01';
import Area02 from '../Pages/KPis Area/Area02';
import OverStation from '../Pages/Station/Overstation';

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/dashboard" element={
        <MainLayout>
          <Dashboard />
        </MainLayout>
      } />
       <Route path="/areas/areaA01" element={
        <MainLayout>
          <Area01 />
        </MainLayout>
      } />
       <Route path="/areas/areaA02" element={
        <MainLayout>
          <Area02 />
        </MainLayout>
      } />
       <Route path="/areas/areaA03" element={
        <MainLayout>
          <PerformanceChart />
        </MainLayout>
      } />
      <Route path="/areas/areaA03" element={
        <MainLayout>
          <PerformanceChart />
        </MainLayout>
      } />
      <Route path="/station/infor" element={
        <MainLayout>
          <OverStation />
        </MainLayout>
      } />
    </Routes>
  </Router>
);

export default AppRouter;