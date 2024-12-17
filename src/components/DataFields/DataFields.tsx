import React, { useState } from 'react';
import DataFieldCard from './DataFieldCard';
import { dataFields, DataField } from './dataFieldsData';

const categories = {
  basic: 'Basic Information',
  contact: 'Contact Details',
  location: 'Location Data',
  social: 'Social Presence',
  business: 'Business Operations',
  engagement: 'Engagement Metrics'
};

export default function DataFields() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof categories>('basic');

  const filteredFields = dataFields.filter(field => field.category === selectedCategory);

  return (
    <section id="data-fields" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Comprehensive Data Extraction
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Extract rich, structured data from any Google Maps listing with our extensive field coverage
        </p>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key as keyof typeof categories)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === key
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        
        {/* Category Title */}
        <h3 className="text-2xl font-bold text-center mb-8">
          {categories[selectedCategory]}
        </h3>

        {/* Data Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredFields.map((field, index) => (
            <DataFieldCard
              key={index}
              icon={field.icon}
              name={field.name}
              description={field.description}
              examples={field.examples}
            />
          ))}
        </div>
      </div>
    </section>
  );
}