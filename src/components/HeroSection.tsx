
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  imagePosition?: 'left' | 'right';
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Gyermek, pár-és családterápiák és csoportterápiák, magas szakmai színvonalú és támogató környezetben.",
  subtitle = "Látogasson el hozzánk, ahol a lelki egészség és a jólét az első.",
  imageSrc = "/public/szoba1.jpg",
  primaryButtonText = "Foglaljon időpontot",
  primaryButtonLink = "/idopontfoglalas",
  imagePosition = "right"
}) => {
  return (
    <section className="bg-therapy-beige overflow-hidden">
      <div className="container-custom mx-auto">
        <div className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center min-h-[calc(100vh-82px)] py-12`}>
          {/* Text content */}
          <div className="md:w-1/2 space-y-6 mb-8 md:mb-0 md:px-4">
            <h1 className="text-therapy-dark">{title}</h1>
            <p className="text-lg text-therapy-gray max-w-lg">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to={primaryButtonLink}>
                <Button className="bg-therapy-blue hover:bg-therapy-blue/90 px-8 py-6 rounded-md w-full sm:w-auto">
                  {primaryButtonText}
                </Button>
              </Link>
              <Link to={secondaryButtonLink}>
                <Button variant="outline" className="border-therapy-blue text-therapy-blue hover:bg-therapy-blue/10 px-8 py-6 rounded-md w-full sm:w-auto">
                  {secondaryButtonText}
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 relative">
            <div className="w-full md:h-[600px] rounded-2xl overflow-hidden">
              <img 
                src={imageSrc} 
                alt="Psychology practice" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-therapy-blue/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
