import React from 'react';
import { Link } from 'react-router-dom';
import { Smile, Users, Award, Clock } from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';
import ServiceCard from '@/components/ServiceCard';
import SimplePsychologistCard from '@/components/SimplePsychologistCard';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const featuredPsychologists = [
    {
      name: "Dr. Szentes Annamária",
      title: "Alapító, szakmai vezető, klinikai gyermek szakpszichológus, pár-és családterapeuta, meseterapeuta és gyermekpszichodráma vezető",
      specialties: ["Egyéni gyermekterápia", "Pár- és családterápia", "Gyermekpszichodráma"],
    },
    {
      name: "Jeney Gabriella",
      title: "Gyermekpszichodráma vezető, pár-és családterapeuta jelölt",
      specialties: ["Gyermekpszichodráma", "Pár- és családterápia"],
    },
    {
      name: "Józsa Balázs",
      title: "Klinikai szakpszichológus, pár-, és családterapeuta, autogén tréner",
      specialties: ["Egyéni gyermekterápia", "Egyéni felnőtt terápia", "Pár- és családterápia", "Autogén tréning"],
    },
    {
      name: "Vásárhelyi Kriszta",
      title: "Klinikai ifjúsági- és gyermek szakpszichológus",
      specialties: ["Online pár-és családterápia"],
    },
    {
      name: "Pajer Lilla",
      title: "Pszichológus",
      specialties: ["Pszichológiai tanácsadás", "Szülőkonzultáció", "Autogén tréning"],
    },
    {
      name: "Lencsés Anita",
      title: "Pszichológus, irodalomterapeuta",
      specialties: ["Egyéni gyermekterápia", "Egyéni felnőtt terápia", "Irodalomterápia"],
    }
  ].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel />

        {/* Featured Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-therapy-dark mb-4">Szolgáltatásaink</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Egyéni gyermekterápia"
                description="Az egyéni gyermekterápia biztonságos és támogató keretet nyújt a gyerekek számára ahhoz, hogy játékos, életkorukhoz illeszkedő módon dolgozhassák fel."
                icon={<Smile className="h-6 w-6" />}
              />
              <ServiceCard
                title="Pszichológiai tanácsadás"
                description="A pszichológiai tanácsadás a lelki támogatás egyik formája, amely elsősorban olyan személyeket segít, akik valamilyen életvezetési nehézséggel, krízissel vagy elakadással küzdenek."
                icon={<Users className="h-6 w-6" />}
              />
              <ServiceCard
                title="Pár- és családterápia"
                description="A pár-és családterápia olyan terápiás megközelítés, amely az egyén nehézségeit a kapcsolati rendszerében vizsgálja."
                icon={<Award className="h-6 w-6" />}
              />
              <ServiceCard
                title="Online párterápia"
                description="A rendszerszemléletű párterápia egy olyan terápiás megközelítés, amely a párkapcsolatot nem egyének összességének, hanem rendszerként kezeli."
                icon={<Award className="h-6 w-6" />}
              />
              <ServiceCard
                title="Csoportterápiák"
                description="Központunkban önismereti, meseterápiás, gyermekpszichodráma, irodalomterápiás és tematikus csoportokat tartunk."
                icon={<Award className="h-6 w-6" />}
              />              
            </div>

            <div className="text-center mt-12">
              <Link to="/szolgaltatasok">
                <Button variant="outline" className="border-therapy-blue text-therapy-blue hover:bg-therapy-blue/10">
                  Szolgáltatásainkról bővebben
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="section-padding bg-therapy-beige">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-therapy-dark mb-4">Szakembereink</h2>
              <p className="text-therapy-gray max-w-2xl mx-auto">
              Ismerje meg széles szakmai profillal rendelkező kollégáinkat, akik közösen hisznek a fejlődés lehetőségében és elkötelezettek a gyerekek, felnőttek és a családok mentális jóllétének támogatásában.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPsychologists.map((psychologist, index) => (
                <SimplePsychologistCard 
                  key={index}
                  name={psychologist.name}
                  title={psychologist.title}
                  specialties={psychologist.specialties}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/pszichologusok">
                <Button variant="outline" className="border-therapy-blue text-therapy-blue hover:bg-therapy-blue/10">
                  Szakembereinkről bővebben
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default Index;