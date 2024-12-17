import React from 'react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

interface PricingCardProps {
  tier: PricingTier;
}

export default function PricingCard({ tier }: PricingCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 relative ${tier.isPopular ? 'border-2 border-blue-500' : ''}`}>
      {tier.isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{tier.price}</span>
        {tier.price !== 'Custom' && <span className="text-gray-600">/month</span>}
      </div>
      <p className="text-gray-600 mb-6">{tier.description}</p>
      <ul className="space-y-3 mb-8">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
        tier.isPopular 
          ? 'bg-blue-500 text-white hover:bg-blue-600' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      }`}>
        Get Started
      </button>
    </div>
  );
}