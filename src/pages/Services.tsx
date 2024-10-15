// File: src/pages/Services.tsx

import React from 'react';
import {
  FaCut,
  FaLeaf,
  FaSprayCan,
  FaWind,
  FaSnowflake,
  FaSeedling,
} from 'react-icons/fa';

interface Service {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const services: Service[] = [
  {
    title: 'Lawn Mowing',
    description:
      'Regular mowing to keep your lawn healthy and well-maintained. We ensure precise cutting for a neat appearance.',
    icon: <FaCut />,
  },
  {
    title: 'Fertilization',
    description:
      'Expert fertilization services to promote lush and green grass. Our tailored programs cater to your lawn’s specific needs.',
    icon: <FaLeaf />,
  },
  {
    title: 'Weed Control',
    description:
      'Effective weed management to maintain a pristine lawn. We use eco-friendly solutions to eliminate unwanted plants.',
    icon: <FaSprayCan />,
  },
  {
    title: 'Aeration',
    description:
      'Improve soil health and lawn vitality with our aeration services. Enhances nutrient absorption and reduces soil compaction.',
    icon: <FaWind />,
  },
  {
    title: 'Edging & Trimming',
    description:
      'Precision edging and trimming around walkways and borders for a clean and professional look.',
    icon: <FaSeedling />,
  },
  {
    title: 'Seasonal Cleanup',
    description:
      'Comprehensive cleanup services to prepare your lawn for every season. Removes debris and promotes healthy growth.',
    icon: <FaSnowflake />,
  },
];

const Services: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center"
            >
              <div className="text-green-500 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
