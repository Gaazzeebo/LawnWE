import React, { useState } from 'react';
import Modal from '../components/Modal';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface Photo {
  src: string;
  alt: string;
  caption: string;
  description: string;
}

const PhotosReviews: React.FC = () => {
  const photos: Photo[] = [
    {
        src: '/images/photos/photo1.jpg',
        alt: 'Beautiful front lawn',
        caption: 'Beautiful Front Lawn',
        description:
          'This project involved mowing and maintaining a sprawling front lawn, ensuring it remains lush and healthy throughout the seasons.',
      },
      {
        src: '/images/photos/photo2.jpg',
        alt: 'Expert edging service',
        caption: 'Expert Edging Service',
        description:
          'Precision edging around walkways and flower beds to give the garden a clean and professional look.',
      },
      {
        src: '/images/photos/photo3.jpg',
        alt: 'Lush green grass',
        caption: 'Lush Green Grass',
        description:
          'Comprehensive fertilization and weed control to promote vibrant and robust grass growth.',
      },
      {
        src: '/images/photos/photo4.jpg',
        alt: 'Seasonal cleanup',
        caption: 'Seasonal Cleanup',
        description:
          'Thorough seasonal cleanup to prepare your lawn for the upcoming season, removing debris and maintaining plant health.',
      },
      {
        src: '/images/photos/photo5.jpg',
        alt: 'Landscape design project',
        caption: 'Landscape Design',
        description:
          'Innovative landscape design to transform your outdoor space into a stunning and functional area.',
      },
      {
        src: '/images/photos/photo6.jpg',
        alt: 'Aeration service in action',
        caption: 'Aeration Service',
        description:
          'Professional aeration services to improve soil health and promote deeper root growth for a greener lawn.',
      },
      {
        src: '/images/photos/photo7.jpg',
        alt: 'Weed control treatment',
        caption: 'Weed Control',
        description:
          'Effective weed control treatments to maintain a pristine lawn, free from unwanted plants.',
      },
      {
        src: '/images/photos/photo8.jpg',
        alt: 'Edging and trimming near a garden bed',
        caption: 'Edging & Trimming',
        description:
          'Detailed edging and trimming to enhance the aesthetic appeal of your garden beds and walkways.',
      },
      {
        src: '/images/photos/photo9.jpg',
        alt: 'Fertilization process being applied',
        caption: 'Fertilization',
        description:
          'Expert fertilization processes applied to nourish your lawn, ensuring lush and vibrant grass.',
      },
      {
        src: '/images/photos/photo10.jpg',
        alt: 'Maintaining a healthy lawn',
        caption: 'Lawn Maintenance',
        description:
          'Ongoing lawn maintenance services to keep your lawn healthy, green, and immaculate all year round.',
      },
    ];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  const reviews = [
    {
      name: 'John Doe',
      rating: 5,
      comment: 'Excellent service! My lawn has never looked better.',
    },
    {
      name: 'Jane Smith',
      rating: 4,
      comment: 'Professional and timely. Will use again.',
    },
    // Add more reviews as needed
  ];

  return (
    <div className="pt-16 pb-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">Photos & Reviews</h2>

        {/* Photos Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-green-600 mb-6">Our Work</h3>
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 mr-6 cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal(photo)}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/fallback.png';
                      }}
                    />
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-gray-800">{photo.caption}</h4>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate the photos for seamless scrolling */}
              {photos.map((photo, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 w-80 mr-6 cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal(photo)}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/fallback.png';
                      }}
                    />
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-gray-800">{photo.caption}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section>
          <h3 className="text-2xl font-semibold text-green-600 mb-6">Customer Reviews</h3>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <img
                    src="/images/reviewer.png"
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{review.name}</h4>
                    <div className="flex items-center">
                      {Array.from({ length: 5 }, (_, i) =>
                        i < review.rating ? (
                          <FaStar key={i} className="text-yellow-400" />
                        ) : (
                          <FaRegStar key={i} className="text-yellow-400" />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Modal for Project Details */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {selectedPhoto && (
            <div className="flex flex-col items-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full max-w-3xl h-auto object-cover rounded-lg mb-4"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/fallback.png';
                }}
              />
              <h3 className="text-2xl font-semibold text-green-700 mb-2">{selectedPhoto.caption}</h3>
              <p className="text-center text-gray-700">{selectedPhoto.description}</p>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default PhotosReviews;
