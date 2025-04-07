
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    // Get stored language from localStorage or use default
    const storedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(storedLanguage);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
    // In a real app, you would update translations here
  };

  const links = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about-us" },
    { title: "The Practice", href: "/practice" },
    { title: "Psychologists", href: "/psychologists" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom mx-auto flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-therapy-blue font-serif font-bold text-2xl">MindfulHaven</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-therapy-gray hover:text-therapy-blue transition-colors font-medium"
            >
              {link.title}
            </Link>
          ))}
          <Link to="/booking">
            <Button className="bg-therapy-blue hover:bg-therapy-blue/90">
              Book Appointment
            </Button>
          </Link>
          <LanguageSelector
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSelector
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
          />
          <button
            onClick={toggleMobileMenu}
            className="text-therapy-dark focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pb-4">
          <div className="container-custom mx-auto flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-therapy-gray hover:text-therapy-blue py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>
              <Button className="bg-therapy-blue hover:bg-therapy-blue/90 w-full">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
