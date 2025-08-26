
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
              <h1 className="text-4xl md:text-5xl font-bold text-therapy-dark mb-4">Árak és Kapcsolat</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column: Pricing and Contact Form */}
              <div className="space-y-8">
                {/* Pricing Section */}
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold text-therapy-dark mb-6">Árak</h2>
                  <p className="text-therapy-gray mb-6">
                    Az árak a módszer és a szakemberek végzettségtől és szakmai tapasztalatától függően változnak.<br /><br />
                    <b>Egyéni terápia, tanácsadás</b>: 15-20.000 Ft/alkalom (50 perc) <br />
                    <b>Pár-és családterápia</b>: 50-55.000 Ft/alkalom (90 perc) <br />
                    <b>Online párterápia</b>: 40.000 Ft/alkalom (90 perc) <br />
                    <b>Online párterápia angolul</b>: 50.000 Ft/alkalom (90 perc) <br />
                    <b>Gyermekpszichodráma csoport</b>: 7.500 Ft/alkalom (60 perc) <br />
                    <b>Irodalomterápiás csoport</b>: 6-8.000 Ft/alkalom (120 perc) 
                  </p>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold text-therapy-dark mb-6">Üzenet</h2>
                  <ContactForm />
                </div>
              </div>

              {/* Right Column: Contact Information and Map */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold text-therapy-dark mb-6">Kapcsolat</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <MapPin className="w-6 h-6 text-therapy-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-therapy-dark">Cím</h3>
                        <p className="text-therapy-gray">
                          Bükkös part 61.<br />
                          2000 Szentendre
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <Phone className="w-6 h-6 text-therapy-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-therapy-dark">Telefon</h3>
                        <p className="text-therapy-gray">+36-30-228-2659</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <Mail className="w-6 h-6 text-therapy-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-therapy-dark">Email</h3>
                        <p className="text-therapy-gray">kapcsolat@b61kozpont.hu</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <Clock className="w-6 h-6 text-therapy-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-therapy-dark">Nyitvatartás</h3>
                        <p className="text-therapy-gray">
                          Hétfő - Péntek:  8.00-20.00<br />
                          Szombat: 8.00-12.00<br />
                          Vasárnap: Zárva<br />
                          Bejelentkezés szükséges!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map or Additional Information */}
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold text-therapy-dark mb-6">Térkép</h2>
                  <div className="aspect-video bg-gray-200 rounded-md overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.527038017418!2d19.067551996237967!3d47.6694048253707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741d67aaad8a25f%3A0x40752374c8de13f6!2sSzentendre%2C%20B%C3%BCkk%C3%B6s%20part%2061%2C%202000%20Magyarorsz%C3%A1g!5e1!3m2!1shu!2sat!4v1756209139909!5m2!1shu!2sat" 
                      width="100%" 
                      height="100%" 
                      style={{border: 0}} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
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
