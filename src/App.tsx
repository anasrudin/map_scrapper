import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/Dashboard/Layout/DashboardLayout';
import Overview from './components/Dashboard/Pages/Overview';
import Tasks from './components/Dashboard/Pages/Tasks';
import Data from './components/Dashboard/Pages/Data';
import Analytics from './components/Dashboard/Pages/Analytics';
import Settings from './components/Dashboard/Pages/Settings';
import LandingPage from './LandingPage'; // The Landing Page component

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page route */}
        <Route path="/" element={<LandingPage />} />

        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="data" element={<Data />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
