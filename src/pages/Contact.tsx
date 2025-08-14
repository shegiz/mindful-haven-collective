
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

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold text-therapy-dark mb-6">Áraink</h2>
                  <p className="text-therapy-gray mb-6">
                    Az árak a módszer és a szakemberek végzettségtől és szakmai tapasztalatától függően változnak. <br /><br />
                    A szolgáltatások ára a következőképpen alakul: <br />
                    <b>Egyéni terápia, tanácsadás</b>: 15000-20000HUF/alkalom (50 perc) <br />
                    <b>Pár-és családterápia</b>: 50-55000/alkalom (90 perc) <br />
                    <b>Gyermekpszichodráma csoport</b>: 7500/alkalom (60 perc) <br />
                    <b>Irodalomterápiás csoport</b>: 6000-8000/alkalom (120 perc) 
                  </p>
                  <h2 className="text-2xl font-semibold text-therapy-dark mb-6">Send Us a Message</h2>
                  <ContactForm />
                </div>
    
              {/* Contact Information */}
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
                        <p className="text-therapy-gray">?</p>
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
                          Hétfő - Péntek: 9-18:00<br />
                          Szombat: 10-16:00<br />
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
                    {/* Embed a map here or use an image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190.23600517832966!2d19.065864668102847!3d47.66988347394846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741d67aaad8a25f%3A0x40752374c8de13f6!2sSzentendre%2C%20B%C3%BCkk%C3%B6s%20part%2061%2C%202000%20Magyarorsz%C3%A1g!5e0!3m2!1shu!2sat!4v1755164332063!5m2!1shu!2sat" 
                        width="520" 
                        height="450" 
                        style={{border: 0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
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
