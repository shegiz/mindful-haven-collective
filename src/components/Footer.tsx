
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
            <h3 className="text-xl font-semibold mb-4">Szentendrei Pszichológiai Központ</h3>
            <p className="text-sm opacity-85 mb-4">
              Egyénre szabott, együttérző és professzionális pszichológiai támogatást nyújtunk gyerekeknek, felnőtteknek, pároknak és családoknak, hogy elősegítsük lelki egyensúlyuk elérését és fejlődésüket.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons would go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Gyors elérés</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline text-sm">Nyitólap</Link>
              </li>
              <li>
                <Link to="/szolgaltatasok" className="hover:underline text-sm">Szolgáltatásaink</Link>
              </li>              
              <li>
                <Link to="/pszichologusok" className="hover:underline text-sm">Szakembereink</Link>
              </li>
              <li>
                <Link to="/kapcsolat" className="hover:underline text-sm">Árak / Kapcsolat</Link>
              </li>              
              <li>
                <Link to="/idopontfoglalas" className="hover:underline text-sm">Foglaljon időpontot</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Szolgáltatásaink</h3>
            <ul className="space-y-2">
              <li className="text-sm">Egyéni gyermekterápia</li>
              <li className="text-sm">Pszichológiai tanácsadás</li>
              <li className="text-sm">Pár- és családterápia</li>
              <li className="text-sm">Online párterápia</li>
              <li className="text-sm">Csoportterápiák</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kapcsolat</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5" />
                <p className="text-sm">Bükkös part 61<br />Szentendre</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <p className="text-sm"><a href="tel:+36302282659">+36-30-228-2659</a></p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <p className="text-sm">kapcsolat@b61kozpont.hu</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5" />
                <p className="text-sm">
                  Hétfő - Péntek: 8.00-20.00<br />
                  Szombat: 8.00-12.00<br />
                  Vasárnap: Zárva<br />
                  Bejelentkezés szükséges!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center">
          <p className="text-sm opacity-85">
            © {new Date().getFullYear()} Szentendrei Pszichológiai Központ. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
