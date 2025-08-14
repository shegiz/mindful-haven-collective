
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-12 md:py-20 bg-therapy-beige">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-therapy-dark mb-4">Kapcsolat és Árak</h1>
              <p className="text-lg text-therapy-gray max-w-2xl mx-auto">
                Kérjük, vegye fel velünk a kapcsolatot, ha bármilyen kérdése van szolgáltatásainkkal vagy árainkkal kapcsolatban. Szakértő csapatunk örömmel segít Önnek eligibilis terápiás lehetőségekben és időpontfoglalásban.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold text-therapy-dark mb-6">Send Us a Message</h2>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold text-therapy-dark mb-6">Send Us a Message</h2>
                  <ContactForm />
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold text-therapy-dark mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <MapPin className="w-6 h-6 text-therapy-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-therapy-dark">Address</h3>
                        <p className="text-therapy-gray">
                          123 Therapy Lane<br />
                          Wellness City, WC 12345
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <Phone className="w-6 h-6 text-therapy-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-therapy-dark">Phone</h3>
                        <p className="text-therapy-gray">(123) 456-7890</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <Mail className="w-6 h-6 text-therapy-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-therapy-dark">Email</h3>
                        <p className="text-therapy-gray">contact@mindfulhaven.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <Clock className="w-6 h-6 text-therapy-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-therapy-dark">Hours</h3>
                        <p className="text-therapy-gray">
                          Monday - Friday: 9am - 7pm<br />
                          Saturday: 10am - 4pm<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map or Additional Information */}
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold text-therapy-dark mb-6">Location</h2>
                  <div className="aspect-video bg-gray-200 rounded-md overflow-hidden">
                    {/* Embed a map here or use an image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-therapy-gray">Map Placeholder</p>
                    </div>
                  </div>
                  <p className="mt-4 text-therapy-gray">
                    We're conveniently located in the heart of Wellness City, with easy access from major highways and public transportation routes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
