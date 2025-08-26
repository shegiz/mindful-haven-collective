
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Booking = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Navbar />
      <main>
        <section className="py-12 md:py-20 bg-therapy-beige">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <div className="w-full md:h-[250px] rounded-2xl overflow-hidden">
                <img src="/sagializ.jpg" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <BookingForm />
              </div>

              <div className="space-y-8">
                {/* Information Box */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-therapy-dark mb-4">{t('appointmentInfo')}</h3>
                  <div className="space-y-4 text-therapy-gray">
                    <p>{t('appointmentInfoText1')}</p>
                    <p>{t('appointmentInfoText2')}</p>
                  </div>
                </div>

                {/* Contact Box */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-therapy-dark mb-4">{t('needHelp')}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-therapy-blue" />
                      <p className="text-therapy-gray"><a href="tel:+36302282659">+36-30-228-2659</a></p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-therapy-blue" />
                      <p className="text-therapy-gray">kontakt@b61kozpont.hu</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 mt-0.5 text-therapy-blue" />
                      <p className="text-therapy-gray whitespace-pre-line">
                        {t('openHours')}
                      </p>
                    </div>
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

export default Booking;
