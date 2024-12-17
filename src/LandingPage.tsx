import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Features from './components/Features';
import DataFields from './components/DataFields/DataFields';
import Pricing from './components/Pricing/Pricing';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Redirect to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Features Section */}
      <Features />

      {/* Data Fields Section */}
      <DataFields />

      {/* Pricing Section */}
      <Pricing />

      {/* Login Button */}
      <div className="text-center mt-8">
        <button 
          onClick={handleLoginClick} 
          className="bg-blue-600 text-white py-2 px-4 rounded-md">
          Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
