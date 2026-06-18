
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
  };

  const links = [
    //{ title: t('home'), href: "/" },
    //{ title: t('aboutUs'), href: "/rolunk" },
    //{ title: t('practice'), href: "/rendelo" },
    { title: t('services'), href: "/szolgaltatasok" },
    { title: t('psychologists'), href: "/pszichologusok" },
    { title: t('partners'), href: "/partnereink" },
    { title: t('contact'), href: "/kapcsolat" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom mx-auto flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-therapy-blue font-serif font-bold text-1xl">B61 Szentendrei Pszichológiai Központ</span>
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
          <Link to="/idopontfoglalas">
            <Button className="bg-therapy-blue hover:bg-therapy-blue/90">
              {t('bookAppointment')}
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
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
            <Link to="/idopontfoglalas" onClick={() => setMobileMenuOpen(false)}>
              <Button className="bg-therapy-blue hover:bg-therapy-blue/90 w-full">
                {t('bookAppointment')}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
