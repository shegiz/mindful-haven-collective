
import React from 'react';
import { Home, Shield, Coffee } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const Practice = () => {
  const facilityImages = [
    {
      url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Reception area",
      title: "Welcoming Reception"
    },
    {
      url: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Therapy room",
      title: "Adult Therapy Room"
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <HeroSection 
          title="Our Practice"
          subtitle="Discover our welcoming facilities designed to provide comfort and safety during your therapy journey."
          imageSrc="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          primaryButtonText="Book an Appointment"
          primaryButtonLink="/booking"
          secondaryButtonText="Contact Us"
          secondaryButtonLink="/contact"
        />

        {/* Facility */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-therapy-dark mb-4">Our Facility</h2>
              <p className="text-therapy-gray max-w-2xl mx-auto">
                We've created a space that feels warm, inviting, and safe—because we understand that the environment plays an important role in the therapeutic experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilityImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-sm">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={image.url} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-xl font-medium text-therapy-dark">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Environment Features */}
        <section className="section-padding bg-therapy-beige">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-therapy-dark mb-4">Why Our Clients Love Our Space</h2>
              <p className="text-therapy-gray max-w-2xl mx-auto">
                We've carefully designed every aspect of our practice to enhance your therapeutic experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-therapy-blue-light rounded-full flex items-center justify-center">
                  <Home className="h-7 w-7 text-therapy-blue" />
                </div>
                <h3 className="text-xl font-medium text-therapy-dark mb-2">Comfortable Setting</h3>
                <p className="text-therapy-gray">
                  Our therapy rooms feature comfortable seating, soothing colors, and soft lighting to help you feel at ease during sessions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-therapy-green-light rounded-full flex items-center justify-center">
                  <Shield className="h-7 w-7 text-therapy-green" />
                </div>
                <h3 className="text-xl font-medium text-therapy-dark mb-2">Privacy & Confidentiality</h3>
                <p className="text-therapy-gray">
                  Our soundproofed rooms and thoughtful layout ensure your sessions remain completely private and confidential.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-therapy-blue-light rounded-full flex items-center justify-center">
                  <Coffee className="h-7 w-7 text-therapy-blue" />
                </div>
                <h3 className="text-xl font-medium text-therapy-dark mb-2">Welcoming Amenities</h3>
                <p className="text-therapy-gray">
                  Enjoy complimentary tea, coffee, and water in our waiting area, along with current magazines and calming music.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Accessibility */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-therapy-dark mb-4">Location & Accessibility</h2>
              <p className="text-therapy-gray max-w-2xl mx-auto">
                We're conveniently located and committed to making our services accessible to everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-therapy-beige p-8 rounded-lg">
                <h3 className="text-2xl font-medium text-therapy-dark mb-4">Getting Here</h3>
                <ul className="space-y-3 text-therapy-gray">
                  <li className="flex items-start space-x-3">
                    <span className="font-medium">Address:</span>
                    <span>123 Therapy Lane, Wellness City, WC 12345</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-medium">Parking:</span>
                    <span>Free parking available in our private lot</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-medium">Public Transit:</span>
                    <span>Bus routes 10, 15, and 22 stop directly in front of our building</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-medium">Hours:</span>
                    <span>
                      Monday - Friday: 9am - 7pm<br />
                      Saturday: 10am - 4pm<br />
                      Sunday: Closed
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-therapy-beige p-8 rounded-lg">
                <h3 className="text-2xl font-medium text-therapy-dark mb-4">Accessibility</h3>
                <ul className="space-y-3 text-therapy-gray">
                  <li className="flex items-start space-x-3">
                    <span>Our facility is wheelchair accessible with ramp access and elevator service to all floors</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span>Accessible restrooms are available on each floor</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span>We offer telehealth services for clients who cannot visit our physical location</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span>Service animals are welcome in our facility</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span>If you have specific accessibility needs, please contact us so we can ensure your comfort</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Practice;
