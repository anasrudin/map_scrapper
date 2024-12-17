import React from 'react';
import { Map, Globe, Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Map className="w-8 h-8" />
          <span className="text-xl font-bold">MapScraper API</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-blue-200 transition-colors">Features</a>
          <a href="#capabilities" className="hover:text-blue-200 transition-colors">Capabilities</a>
          <a href="#pricing" className="hover:text-blue-200 transition-colors">Pricing</a>
          <a href="#docs" className="hover:text-blue-200 transition-colors">Docs</a>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Get Started
          </button>
        </div>
      </nav>
      
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Extract Data from Google Maps with Ease
        </h1>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Powerful API for scraping business data, reviews, and locations from Google Maps. Built for developers, trusted by enterprises.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Start Free Trial
          </button>
          <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            View Documentation
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <Globe className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Global Coverage</h3>
            <p className="text-blue-100">Access data from any location worldwide</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Never Get Blocked</h3>
            <p className="text-blue-100">Advanced proxy rotation system</p>
          </div>
          <div className="flex flex-col items-center">
            <Map className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Rich Data</h3>
            <p className="text-blue-100">Extract comprehensive business information</p>
          </div>
        </div>
      </div>
    </header>
  );
}