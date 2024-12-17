import React from 'react';
import { 
  Building2, MapPin, Phone, Clock, Image, Star, 
  Search, Tag, Link, MessageSquare, Menu, Info
} from 'lucide-react';

const capabilities = [
  {
    icon: Building2,
    title: "Business Details",
    description: "Name, subtitle, and complete business information"
  },
  {
    icon: MapPin,
    title: "Location Data",
    description: "Precise address and geographical coordinates"
  },
  {
    icon: Phone,
    title: "Contact Info",
    description: "Phone numbers and contact details"
  },
  {
    icon: Menu,
    title: "Menu & Pricing",
    description: "Restaurant menus and service pricing"
  },
  {
    icon: Clock,
    title: "Operating Hours",
    description: "Business hours and special timings"
  },
  {
    icon: Image,
    title: "Images",
    description: "Business photos and visual content"
  },
  {
    icon: Star,
    title: "Ratings",
    description: "Overall ratings and scoring metrics"
  },
  {
    icon: MessageSquare,
    title: "Reviews",
    description: "Customer reviews and feedback"
  },
  {
    icon: Tag,
    title: "Categories",
    description: "Business categories and tags"
  },
  {
    icon: Link,
    title: "Websites",
    description: "Associated website URLs"
  },
  {
    icon: Search,
    title: "Search Results",
    description: "Complete search result data"
  },
  {
    icon: Info,
    title: "Additional Info",
    description: "Attributes and special features"
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          What You Can Extract
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Our API provides comprehensive access to Google Maps data, enabling you to extract valuable business information at scale.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <capability.icon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
              <p className="text-gray-600">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}