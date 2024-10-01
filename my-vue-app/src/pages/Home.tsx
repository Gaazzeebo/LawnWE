// File: src/pages/Home.tsx

import React from 'react';
import { FaLeaf, FaSprayCan, FaSeedling } from 'react-icons/fa';

const Home: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Pro Lawn Care transformed my yard into a green paradise. Their attention to detail and professionalism are unmatched.",
      name: "John Doe",
      location: "Springfield",
      image: "/images/reviewer1.jpg", // Ensure this image exists in public/images/
    },
    {
      id: 2,
      quote:
        "Their team is reliable and always on time. My lawn has never looked better!",
      name: "Jane Smith",
      location: "Greendale",
      image: "/images/reviewer2.jpg", // Ensure this image exists in public/images/
    },
    {
      id: 3,
      quote:
        "Exceptional service and fantastic results. Highly recommend Pro Lawn Care!",
      name: "Mike Johnson",
      location: "Mapleton",
      image: "/images/reviewer3.jpg", // Ensure this image exists in public/images/
    },
    // Add more testimonials as needed
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/photos/lawn-care1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-32 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Pro Lawn Care</h1>
          <p className="text-xl mb-8">
            Your trusted partner for a beautiful and healthy lawn.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-green-700 text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center">
              <FaLeaf className="text-green-500 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Lawn Mowing
              </h3>
              <p className="text-gray-600">
                Regular mowing to keep your lawn healthy and well-maintained. We ensure precise cutting for a neat appearance.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center">
              <FaSprayCan className="text-green-500 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Fertilization
              </h3>
              <p className="text-gray-600">
                Expert fertilization services to promote lush and green grass. Our tailored programs cater to your lawn’s specific needs.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center">
              <FaSeedling className="text-green-500 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Weed Control
              </h3>
              <p className="text-gray-600">
                Effective weed management to maintain a pristine lawn. We use eco-friendly solutions to eliminate unwanted plants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-green-700 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <p className="text-gray-700 italic mb-4 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Lawn?
          </h2>
          <p className="text-lg mb-8">
            Contact us today for a free quote and let our experts take care of the rest!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-green-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
