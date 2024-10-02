// App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactForm from './pages/ContactFrom';
import PhotosReviews from './pages/PhotoReviews';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Use Element from react-scroll */}
        <Element name="home">
          <Home />
        </Element>
        <Element name="about-us">
          <AboutUs />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <Element name="photos-reviews">
          <PhotosReviews />
        </Element>
        <Element name="contact">
          <ContactForm />
        </Element>
      </main>
      <Footer />
    </div>
  );
}

export default App;
