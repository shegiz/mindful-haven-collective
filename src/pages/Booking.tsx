
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { Phone, Mail, Clock } from 'lucide-react';

const Booking = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-12 md:py-20 bg-therapy-beige">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-therapy-dark mb-4">Book an Appointment</h1>
              <p className="text-lg text-therapy-gray max-w-2xl mx-auto">
                Take the first step towards mental wellness. Fill out the form below to request an appointment, 
                and we'll get back to you to confirm your session.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <BookingForm />
              </div>

              <div className="space-y-8">
                {/* Information Box */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-therapy-dark mb-4">Appointment Information</h3>
                  <div className="space-y-4 text-therapy-gray">
                    <p>
                      Initial consultations typically last 60 minutes. Follow-up sessions are usually 50 minutes.
                    </p>
                    <p>
                      We'll contact you within 24 business hours to confirm your appointment or suggest alternative times.
                    </p>
                    <p>
                      If you need to cancel or reschedule, please provide at least 24 hours' notice.
                    </p>
                  </div>
                </div>

                {/* Contact Box */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-therapy-dark mb-4">Need Help?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-therapy-blue" />
                      <p className="text-therapy-gray">(123) 456-7890</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-therapy-blue" />
                      <p className="text-therapy-gray">contact@mindfulhaven.com</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 mt-0.5 text-therapy-blue" />
                      <p className="text-therapy-gray">
                        Monday - Friday: 9am - 7pm<br />
                        Saturday: 10am - 4pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Insurance Box */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-therapy-dark mb-4">Insurance</h3>
                  <p className="text-therapy-gray">
                    We accept most major insurance plans. Please have your insurance information ready when we contact you to confirm your appointment, and we'll verify your benefits.
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

export default Booking;
