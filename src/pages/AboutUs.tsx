// File: src/pages/AboutUs.tsx

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-green-700 mb-6">About Pro Lawn Care</h2>
          <p className="text-gray-700 mb-6">
            At Pro Lawn Care, we specialize in providing top-notch lawn mowing and maintenance services.
            Our team of experts is dedicated to ensuring your lawn stays healthy, green, and immaculate all year round.
          </p>
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Our Services:</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3" />
              <span className="text-gray-700">Regular Lawn Mowing</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3" />
              <span className="text-gray-700">Edging and Trimming</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3" />
              <span className="text-gray-700">Weed Control</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3" />
              <span className="text-gray-700">Fertilization and Aeration</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3" />
              <span className="text-gray-700">Seasonal Cleanup</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3" />
              <span className="text-gray-700">Landscape Design</span>
            </li>
          </ul>
          <p className="text-gray-700">
            With state-of-the-art equipment and a commitment to excellence, we guarantee customer satisfaction with every job.
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="/images/photos/about-us.jpg" // Ensure you have this image in your public/images directory
            alt="Pro Lawn Care Team at Work"
            className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
