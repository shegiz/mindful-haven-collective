
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import PsychologistCard from '@/components/PsychologistCard';

const Psychologists = () => {
  const psychologists = [
    {
      id: "jeney-gabriella",
      name: "Jeney Gabriella",
      title: "Gyermekpszichodráma vezető, pár-és családterapeuta jelölt",
      specialties: ["Gyermekpszichodráma", "Pár- és családterápia"],
      image: "/public/jeney.jpg",
      shortBio: "Családterápiában, felnőtt- és gyermekpszichodrámában, valamint érzelmi fókuszú párterápiában képzett pszichológus. Gyermekpszichodráma csoportokat vezet Józsa Balázzsal."
    },
    {
      id: "jozsa-balazs",
      name: "Józsa Balázs",
      title: "Klinikai szakpszichológus, pár-, és családterapeuta, autogén tréner",
      specialties: ["Család terápia", "Pár- és családterápia", "Gyermekpszichodráma"],
      image: "/public/jozsa.jpg",
      shortBio: "Dinamikus és rendszerszemléletben dolgozik, munkájának középpontjában a kapcsolatok és kapcsolódások mélyebb megértése áll. Gyermekekkel, felnőttekkel és családokkal foglalkozik egyéni és kapcsolati nehézségek esetén, a harmonikusabb élet felé vezető úton."
    },
    {
      id: "szentes-annamaria",
      name: "Dr. Szentes Annamária",
      title: "Alapító, szakmai vezető",
      specialties: ["Gyermek szakpszichológia", "Pár- és családterápia", "Meseterápia", "Gyermekpszichodráma"],
      image: "/public/szentes.jpg",
      shortBio: "Klinikai gyermek szakpszichológus, pár- és családterapeuta, meseterapeuta és gyermekpszichodráma-vezető."
    },
    {
      id: "vasarhelyi-kriszta",
      name: "Vásárhelyi Kriszta",
      title: "klinikai ifjúsági- és gyermek szakpszichológus",
      specialties: ["Gyermekpszichológia", "Ifjúsági pszichológia", "Családterápia"],
      image: "/public/vasar.jpg",
      shortBio: "Pszichológus, gyermekdráma-asszisztens, tréner, képzésben lévő pár- és családterapeuta, valamint komplex integratív terapeuta. Integrált módszertannal dolgozik, amely ötvözi a verbális és kognitív technikákat a játékkal, alkotással és természetkapcsolattal"
    },
    {
      id: "pajer-lilla",
      name: "Pajer Lilla",
      title: "pszichológus",
      specialties: ["gyermekpszichológia", "nevelési tanácsadás", "szorongás- és stresszkezelés", "autogén tréning"],
      image: "/public/pajer.jpg",
      shortBio: "okleveles pszichológus, képzésben lévő tanácsadó szakpszichológus és autogén tréning relaxációs gyakorlatvezető. Gyerekekkel művészet- és játékterápiás eszközökkel, felnőttekkel autogén tréning keretében dolgozik, valamint nevelési, szorongás- és stresszkezelési tanácsadást nyújt."
    },
    {
      id: "lencses-anita",
      name: "Lencsés Anita",
      title: "pszichológus, irodalomterapeuta",
      specialties: ["irodalomterápia", "önismereti csoportok", "kreatív írás"],
      image: "/public/lencses.jpg",
      shortBio: "Irodalomterapeuta és pszichológus, aki felnőttek önismereti csoportjaiban kortárs és klasszikus irodalmi műveket, dalszövegeket, kreatív írásgyakorlatokat és tudatos jelenlét alapú technikákat alkalmaz."
    }    
  ];

  return (
    <>
      <Navbar />
      <main>
        <HeroSection 
          title="Szakembereink"
          subtitle="Ismerje meg pszichológusainkat, akik elkötelezettek az ön és családja mentális egészségének támogatásában."
          imageSrc="/csapat.jpg"
          primaryButtonText="Foglaljon Időpontot"
          primaryButtonLink="/booking"
        />

        {/* Team */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-therapy-dark mb-4">
                Szakértői csapatunk
              </h2>
              <p className="text-therapy-gray max-w-2xl mx-auto">
                Pszichológiai rendelőnk magasan képzett szakemberekből áll, ismerkedjen meg velük.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {psychologists.map((psychologist) => (
                <PsychologistCard 
                  key={psychologist.id}
                  id={psychologist.id}
                  name={psychologist.name}
                  title={psychologist.title}
                  specialties={psychologist.specialties}
                  image={psychologist.image}
                  shortBio={psychologist.shortBio}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Professional Standards */}
        <section className="section-padding bg-therapy-beige">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-therapy-dark mb-4">
                Szakmai alapelvek és Etikai Irányelvek
              </h2>
              <p className="text-therapy-gray max-w-2xl mx-auto">
                
                magyar pszichológusaink elkötelezettek a legmagasabb szakmai és etikai normák betartása mellett. Minden szakemberünk rendelkezik a szükséges képesítésekkel és engedélyekkel, és folyamatosan továbbképzik magukat, hogy naprakészen követhessék a legújabb kutatásokat és terápiás megközelítéseket.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-therapy-gray">
              <p>
                Minden pszichológusunk szigorúan betartja a Magyar Pszichológiai Társaság etikai irányelveit, amelyek biztosítják, hogy a kliensek biztonságban és tiszteletben érezzék magukat a terápiás folyamat során. A pszichológusok folyamatosan részt vesznek szakmai továbbképzéseken és szupervíziókon, hogy fenntartsák tudásukat és készségeiket.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Psychologists;
