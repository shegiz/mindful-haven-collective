import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

interface Partner {
  name: string;
  image: string;
  description: React.ReactNode;
  link?: string;
}

const Partners = () => {
  const partners: Partner[] = [
    {
      name: 'Mosoly Alapítvány',
      image: '/Mosoly_logo.png',
      link: 'https://mosolyalapitvany.hu',
      description: (
        <>
          <p className="mb-4">
            A Mosoly Alapítvány több mint három évtizede nyújt művészetterápiás és pszichológiai
            támogatást súlyos, krónikus beteg, valamint pszichés nehézségekkel küzdő gyermekeknek
            és családjaiknak. Munkájuk középpontjában a gyógyulás, a feldolgozás és az
            újrakapcsolódás áll – mindezt játékos, kreatív és szakmailag megalapozott módszerekkel.
          </p>
          <p className="mb-4">
            Központunk büszke partnere a Mosoly Alapítványnak: a <strong>Széles Mosoly</strong>{' '}
            támogatási program keretében olyan családok is hozzáférhetnek pszichológiai
            ellátásunkhoz, akiknek erre sürgős szükségük van, de a privát szolgáltatást nem
            tudnák megfizetni, vagy az állami rendszer hosszú várólistái miatt nem jutnának
            időben segítséghez.
          </p>
          <p>
            A B61 Szentendrei Pszichológiai Központban <strong>Jeney Gabriellánál</strong> lehet
            erre a programra jelentkezni.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          title="Partnereink"
          subtitle=""
          imageSrc="/b61_img2.jpg"
          primaryButtonText="Foglaljon időpontot"
          primaryButtonLink="/idopontfoglalas"
          imagePosition="left"
        />

        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <div className="space-y-12">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-therapy-beige p-6 md:p-10 rounded-lg shadow-sm ${
                    index % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''
                  }`}
                >
                  <div className="flex justify-center">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-h-48 w-auto object-contain"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-medium text-therapy-dark mb-4 uppercase">
                      {partner.name}
                    </h2>
                    <div className="text-therapy-gray">{partner.description}</div>
                    {partner.link && (
                      <a
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-therapy-blue hover:underline"
                      >
                        {partner.link.replace(/^https?:\/\//, '')}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Partners;
