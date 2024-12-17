import { 
  Building2, MapPin, Phone, Mail, Globe, Link2, FileText, 
  Map, Clock, DollarSign, Hash, Star, MessageSquare, Image,
  Search, Menu, Info, Tag
} from 'lucide-react';

export interface DataField {
  icon: any;
  name: string;
  description: string;
  examples?: string[];
  category: 'basic' | 'contact' | 'location' | 'social' | 'business' | 'engagement';
}

export const dataFields: DataField[] = [
  // Basic Information
  {
    icon: Building2,
    name: 'Business Name',
    description: 'The canonicalized business name and subtitle',
    examples: ['Name', 'Subtitle', 'Brand'],
    category: 'basic'
  },
  {
    icon: FileText,
    name: 'Description',
    description: 'Comprehensive business description and attributes',
    examples: ['About', 'Services', 'Features'],
    category: 'basic'
  },
  {
    icon: Tag,
    name: 'Categories',
    description: 'Business categories and classification tags',
    examples: ['Primary Category', 'Additional Categories', 'Attributes'],
    category: 'basic'
  },

  // Contact Information
  {
    icon: Phone,
    name: 'Contact Details',
    description: 'Complete contact information',
    examples: ['Phone Numbers', 'Email', 'Contact Forms'],
    category: 'contact'
  },
  {
    icon: Link2,
    name: 'Website',
    description: 'Official website and related URLs',
    examples: ['Domain', 'Business Site', 'Booking Links'],
    category: 'contact'
  },

  // Location Information
  {
    icon: MapPin,
    name: 'Address',
    description: 'Full address and location details',
    examples: ['Street Address', 'City', 'Postal Code'],
    category: 'location'
  },
  {
    icon: Map,
    name: 'Coordinates',
    description: 'Precise geographical coordinates',
    examples: ['Latitude', 'Longitude', 'Plus Code'],
    category: 'location'
  },

  // Social Presence
  {
    icon: Globe,
    name: 'Social Media',
    description: 'Connected social media profiles',
    examples: ['Facebook', 'Instagram', 'LinkedIn'],
    category: 'social'
  },
  {
    icon: Image,
    name: 'Media',
    description: 'Photos and visual content',
    examples: ['Profile Photos', 'Interior', 'Products'],
    category: 'social'
  },

  // Business Operations
  {
    icon: Clock,
    name: 'Operating Hours',
    description: 'Detailed business hours',
    examples: ['Regular Hours', 'Holiday Hours', 'Special Hours'],
    category: 'business'
  },
  {
    icon: Menu,
    name: 'Services & Pricing',
    description: 'Available services and price ranges',
    examples: ['Menu Items', 'Service List', 'Price Levels'],
    category: 'business'
  },
  {
    icon: DollarSign,
    name: 'Price Level',
    description: 'Price range indicators',
    examples: ['Price Category ($-$$$$)', 'Cost Indicators'],
    category: 'business'
  },

  // Engagement Metrics
  {
    icon: Star,
    name: 'Ratings',
    description: 'Overall ratings and scores',
    examples: ['Average Rating', 'Total Ratings', 'Rating Breakdown'],
    category: 'engagement'
  },
  {
    icon: MessageSquare,
    name: 'Reviews',
    description: 'Customer reviews and feedback',
    examples: ['Review Text', 'Reviewer Info', 'Review Dates'],
    category: 'engagement'
  },
  {
    icon: Info,
    name: 'Additional Data',
    description: 'Supplementary information',
    examples: ['Popular Times', 'Q&A', 'Attributes'],
    category: 'engagement'
  }
];