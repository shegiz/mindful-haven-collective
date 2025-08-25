import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface HeroSlideProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  imagePosition?: 'left' | 'right';
}

const HeroSlide: React.FC<HeroSlideProps> = ({
  title,
  subtitle,
  imageSrc,
  primaryButtonText,
  primaryButtonLink,
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

const HeroCarousel: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const slides = [
    {
      title: "Lencsés Anita kolléganőnk az idei Szentendre Éjjel-Nappal Nyitva Fesztiválon kreatív önismereti foglalkozás irodalomterápiás foglalkozást tart “SZÖVEGEK SZÁRNYÁN” címmel.",
      subtitle: "Augusztus 30. szombat 10:00-12:00",
      imageSrc: "/public/szen.jpg",
      primaryButtonText: "A program részletei",
      primaryButtonLink: "https://szentendreejjelnappalnyitva.hu/event/szovegek-szarnyan-kreativ-onismereti-foglalkozas-irodalomterapiaval/",
    },
    {
      title: "Magas színvonalú és széleskörű pszichológiai szolgáltatásokkal várjuk a hozzánk fordulókat egy elfogadó és támogató környezetben Szentendre belvárosában.",
      subtitle: "",
      imageSrc: "/public/b61_img2.jpg",
      primaryButtonText: "Foglaljon időpontot",
      primaryButtonLink: "/idopontfoglalas",
    }
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <HeroSlide
              title={slide.title}
              subtitle={slide.subtitle}
              imageSrc={slide.imageSrc}
              primaryButtonText={slide.primaryButtonText}
              primaryButtonLink={slide.primaryButtonLink}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};

export default HeroCarousel;