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
            </div>

            <div className="text-center mt-12">
              <Link to="/szolgaltatasok">
                <Button variant="outline" className="border-therapy-blue text-therapy-blue hover:bg-therapy-blue/10">
                  Összes terápia megtekintése
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-therapy-beige">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-therapy-dark mb-4">
                Miért válasszon minket?
              </h2>
              <p className="text-therapy-gray max-w-2xl mx-auto"> 
                Pszichológiai rendelőnk elkötelezett a magas színvonalú, személyre szabott pszichológiai ellátás mellett. Kollégáink különböző területeken szerzett tapasztalatokkal rendelkeznek, hogy a legjobb támogatást nyújthassák Önnek és családjának.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-therapy-blue-light rounded-full flex items-center justify-center">
                  <Award className="h-7 w-7 text-therapy-blue" />
                </div>
                <h3 className="text-xl font-medium text-therapy-dark mb-2">
                  Tapasztalt Szakemberek
                </h3>
                <p className="text-therapy-gray text-sm">
                  Csapatunk magasan képzett pszichológusokból áll, akik különböző területeken szerzett tapasztalatokkal rendelkeznek.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-therapy-blue-light rounded-full flex items-center justify-center">
                  <Smile className="h-7 w-7 text-therapy-blue" />
                </div>
                <h3 className="text-xl font-medium text-therapy-dark mb-2">
                  Biztonságos és Támogató Környezet
                </h3>
                <p className="text-therapy-gray text-sm">
                  Rendelőnk barátságos és elfogadó légkört biztosít, ahol Ön szabadon kifejezheti érzéseit és gondolatait.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-therapy-green-light rounded-full flex items-center justify-center">
                  <Clock className="h-7 w-7 text-therapy-green" />
                </div>
                <h3 className="text-xl font-medium text-therapy-dark mb-2">
                  Rugalmas Időpontok
                </h3>
                <p className="text-therapy-gray text-sm">
                  Rugalmas időpontokat kínálunk, hogy a terápia illeszkedjen az Ön életviteléhez. Online és személyes konzultációkat is biztosítunk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="section-padding bg-white">
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
                  További szakembereink
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-therapy-blue py-16">
          <div className="container-custom text-center text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Készen áll a változásra?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Foglaljon időpontot még ma, és kezdje el a lelki egészsége fejlesztését szakértőink segítségével. Legyen szó egyéni terápiáról, párkapcsolati tanácsadásról vagy csoportos foglalkozásokról, mi itt vagyunk, hogy támogassuk Önt.
            </p>
            <Link to="/idopontfoglalas">
              <Button className="bg-white text-therapy-blue hover:bg-white/90 px-8 py-6">
                Időpontfoglalás
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;