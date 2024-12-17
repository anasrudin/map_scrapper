import React from 'react';
import { Shield, Zap, Code, RefreshCcw, Timer, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Never Get Blocked",
    description: "Our API rotates your IP with each request from a pool of millions of proxies across various ISPs."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Enjoy unlimited bandwidth with speeds up to 100Mb/s, perfect for building fast web crawlers."
  },
  {
    icon: Code,
    title: "Easy Integration",
    description: "Simple REST API with comprehensive documentation and examples in multiple programming languages."
  },
  {
    icon: RefreshCcw,
    title: "Auto Retries",
    description: "Automatically retries failed requests to guarantee smooth data extraction."
  },
  {
    icon: Timer,
    title: "Real-time Data",
    description: "Get the most up-to-date information from Google Maps with real-time scraping."
  },
  {
    icon: Lock,
    title: "CAPTCHA Handling",
    description: "Never worry about CAPTCHAs with our advanced handling system."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose MapScraper API?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}