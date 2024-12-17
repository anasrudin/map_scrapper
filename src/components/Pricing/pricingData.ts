export const pricingTiers = [
  {
    name: 'Starter',
    price: '$49',
    description: 'Perfect for small projects and testing',
    features: [
      '10,000 API calls per month',
      'Basic data fields',
      'Standard support',
      'Excel export',
      '99.9% uptime SLA'
    ]
  },
  {
    name: 'Professional',
    price: '$199',
    description: 'Ideal for growing businesses',
    features: [
      '100,000 API calls per month',
      'All data fields',
      'Priority support',
      'Excel & Google Sheets export',
      'Custom proxy pool'
    ],
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale operations',
    features: [
      'Unlimited API calls',
      'Custom features',
      'Dedicated support',
      'Custom integrations',
      'Service level agreement'
    ]
  }
];