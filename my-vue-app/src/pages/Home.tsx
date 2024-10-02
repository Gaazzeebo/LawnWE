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
      image: "/images/photos/Default.png", // Ensure this image exists in public/images/
    },
    {
      id: 2,
      quote:
        "Their team is reliable and always on time. My lawn has never looked better!",
      name: "Jane Smith",
      location: "Greendale",
      image: "/images/photos/Default.png", // Ensure this image exists in public/images/
    },
    {
      id: 3,
      quote:
        "Exceptional service and fantastic results. Highly recommend Pro Lawn Care!",
      name: "Mike Johnson",
      location: "Mapleton",
      image: "/images/photos/Default.png", // Ensure this image exists in public/images/
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
<section className="py-16 bg-gradient-to-r from-green-100 to-green-50">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500 text-center mb-12">
      Elevate Your Outdoor Space
    </h2>
    <p className="max-w-2xl mx-auto text-center text-gray-700 text-lg mb-16">
      Transform your outdoor space into a sanctuary of beauty and relaxation. 
      We offer tailored solutions to help your garden and lawn thrive, making 
      your home the envy of the neighborhood.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Service Card 1 */}
      <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-500 opacity-75 group-hover:opacity-50 transition-opacity duration-500"></div>
        <div className="relative p-8">
          <FaLeaf className="text-white text-6xl group-hover:text-green-900 transition-colors duration-300 mb-4" />
          <h3 className="text-3xl font-bold text-white group-hover:text-green-900 transition-colors duration-300 mb-2">
            Lawn Mowing Excellence
          </h3>
          <p className="text-white group-hover:text-gray-100 transition-colors duration-300">
            Discover precision cutting that maintains your lawn's health and brings a polished look to your entire yard.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-green-600 text-center py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <a href="#" className="text-white font-bold">Learn More</a>
        </div>
      </div>
      {/* Service Card 2 */}
      <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-500 opacity-75 group-hover:opacity-50 transition-opacity duration-500"></div>
        <div className="relative p-8">
          <FaSprayCan className="text-white text-6xl group-hover:text-green-900 transition-colors duration-300 mb-4" />
          <h3 className="text-3xl font-bold text-white group-hover:text-green-900 transition-colors duration-300 mb-2">
            Fertilization Science
          </h3>
          <p className="text-white group-hover:text-gray-100 transition-colors duration-300">
            Tailored fertilization programs that encourage deep roots and vibrant green grass, custom-made for your lawn’s needs.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-green-600 text-center py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <a href="#" className="text-white font-bold">Learn More</a>
        </div>
      </div>
      {/* Service Card 3 */}
      <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-500 opacity-75 group-hover:opacity-50 transition-opacity duration-500"></div>
        <div className="relative p-8">
          <FaSeedling className="text-white text-6xl group-hover:text-green-900 transition-colors duration-300 mb-4" />
          <h3 className="text-3xl font-bold text-white group-hover:text-green-900 transition-colors duration-300 mb-2">
            Smart Weed Control
          </h3>
          <p className="text-white group-hover:text-gray-100 transition-colors duration-300">
            Stay one step ahead of invasive weeds with eco-friendly solutions that protect your lawn and plants.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-green-600 text-center py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <a href="#" className="text-white font-bold">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</section>


     {/* Testimonials Section */}
<section className="py-16 bg-gradient-to-r from-white to-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500 text-center mb-12">
      Hear from Our Happy Clients
    </h2>
    <p className="max-w-2xl mx-auto text-center text-gray-700 text-lg mb-16">
      We value our clients and are proud to have earned their trust. Here’s what they have to say about their experience with us.
    </p>
    <div className="relative">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="swiper-slide bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <p className="text-gray-700 italic mb-4 flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover shadow-lg"
                />
                <div>
                  <h4 className="text-xl font-semibold text-green-700">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="swiper-button-prev text-green-700 hover:text-green-500"></div>
        <div className="swiper-button-next text-green-700 hover:text-green-500"></div>
      </div>
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
