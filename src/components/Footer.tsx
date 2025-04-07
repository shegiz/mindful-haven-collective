
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-therapy-blue text-white">
      <div className="container-custom mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">MindfulHaven</h3>
            <p className="text-sm opacity-85 mb-4">
              Providing compassionate and professional psychological services for individuals, 
              families, and children to support mental wellness and growth.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons would go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:underline text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/practice" className="hover:underline text-sm">The Practice</Link>
              </li>
              <li>
                <Link to="/psychologists" className="hover:underline text-sm">Our Psychologists</Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline text-sm">Services</Link>
              </li>
              <li>
                <Link to="/booking" className="hover:underline text-sm">Book an Appointment</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm">Child Psychology</li>
              <li className="text-sm">Family Therapy</li>
              <li className="text-sm">Tale Therapy</li>
              <li className="text-sm">Child Psychodrama</li>
              <li className="text-sm">Individual Therapy</li>
              <li className="text-sm">Couple Counseling</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5" />
                <p className="text-sm">123 Therapy Lane<br />Wellness City, WC 12345</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <p className="text-sm">(123) 456-7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <p className="text-sm">contact@mindfulhaven.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5" />
                <p className="text-sm">
                  Monday - Friday: 9am - 7pm<br />
                  Saturday: 10am - 4pm<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center">
          <p className="text-sm opacity-85">
            © {new Date().getFullYear()} MindfulHaven Psychology Practice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
