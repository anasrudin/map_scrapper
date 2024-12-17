import React from 'react';
import PricingCard from './PricingCard';
import { pricingTiers } from './pricingData';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Choose the plan that best fits your needs. All plans include our core features.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}