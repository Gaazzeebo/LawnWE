import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaConciergeBell, FaCommentDots } from 'react-icons/fa';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address.';
    }
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits.';
    }
    if (!formData.service.trim()) newErrors.service = 'Service is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);

      setTimeout(() => {
        // Simulate form submission
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
        setErrors({});
        setLoading(false);
      }, 2000);
    } else {
      setErrors(validationErrors);
      setIsSubmitted(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-16 bg-gray-50">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h2 className="mb-6 text-3xl font-bold text-center text-green-700">
          Contact Us
        </h2>

        {isSubmitted && (
          <div className="p-4 mb-6 text-green-800 bg-green-100 border border-green-300 rounded">
            Thank you for contacting us! We will get back to you shortly.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Name Field */}
          <div className="relative mb-6">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 peer`}
              aria-label="Name"
              required
            />
            <label
              htmlFor="name"
              className={`absolute left-10 top-3 text-gray-500 transition-all pointer-events-none ${
                formData.name ? '-translate-y-6 scale-75' : ''
              } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3`}
            >
              Name *
            </label>
            {errors.name && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="relative mb-6">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 peer`}
              aria-label="Email"
              required
            />
            <label
              htmlFor="email"
              className={`absolute left-10 top-3 text-gray-500 transition-all pointer-events-none ${
                formData.email ? '-translate-y-6 scale-75' : ''
              } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3`}
            >
              Email *
            </label>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div className="relative mb-6">
            <FaPhone className="absolute top-3 left-3 text-gray-400" />
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 peer`}
              aria-label="Phone"
            />
            <label
              htmlFor="phone"
              className={`absolute left-10 top-3 text-gray-500 transition-all pointer-events-none ${
                formData.phone ? '-translate-y-6 scale-75' : ''
              } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3`}
            >
              Phone
            </label>
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Service Required Field */}
          <div className="relative mb-6">
            <FaConciergeBell className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border ${
                errors.service ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 peer`}
              aria-label="Service Required"
              required
            />
            <label
              htmlFor="service"
              className={`absolute left-10 top-3 text-gray-500 transition-all pointer-events-none ${
                formData.service ? '-translate-y-6 scale-75' : ''
              } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3`}
            >
              Service Required *
            </label>
            {errors.service && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.service}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="relative mb-6">
            <FaCommentDots className="absolute top-3 left-3 text-gray-400" />
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none peer`}
              aria-label="Message"
              required
            ></textarea>
            <label
              htmlFor="message"
              className={`absolute left-10 top-3 text-gray-500 transition-all pointer-events-none ${
                formData.message ? '-translate-y-6 scale-75' : ''
              } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3`}
            >
              Message *
            </label>
            {errors.message && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full px-4 py-3 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300 ${
              loading ? 'cursor-not-allowed opacity-50' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
