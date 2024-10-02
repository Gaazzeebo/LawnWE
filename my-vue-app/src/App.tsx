import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactForm from './pages/ContactFrom';
import PhotosReviews from './pages/PhotoReviews';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Load all components sequentially */}
        <Home />
        <AboutUs />
        <Services />
        <PhotosReviews />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
