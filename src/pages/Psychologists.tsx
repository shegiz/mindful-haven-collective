
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
      shortBio: "Pszichológusi utamat a Bátor Táborban töltött öt év önkéntes munka indította el, ahol krónikusan beteg gyermekekkel dolgozhattam. Ez az időszak mély nyomot hagyott bennem, és meghatározó élménnyé vált – innen ered az a belső motiváció, amely a pszichológia felé terelt. 2015-ben elvégeztem a „Szuggesztiók alkalmazása a szomatikus orvoslásban” képzést a Semmelweis Egyetem és a Magyar Hipnózis Egyesület szervezésében. Több év saját önismereti munka után felnőtt- és gyermekpszichodramatista képesítést szereztem, majd a családkonzultáció/családterápia területén képeztem tovább magam. 2023-ban részt vettem Dr. Scott Wooley Érzelmi Fókuszú Párterápia képzésén, amely tovább mélyítette kapcsolatorientált szemléletemet. Jelenleg HR vezetőként dolgozom, emellett rendszeres családterápiás folyamatokat vezetek Budapesten, valamint gyermekpszichodráma csoportokat tartok Szentendrén co-terápiás keretben. A B61 Központban családterápiát vezetünk Józsa Balázzsal és gyermekpszichodráma csoportot tartunk Szentes Annamáriával."
    },
    {
      id: "jozsa-balazs",
      name: "Józsa Balázs",
      title: "Klinikai szakpszichológus, pár-, és családterapeuta, autogén tréner",
      specialties: ["Egyéni gyermekterápia", "Egyéni felnőtt terápia", "Pár- és családterápia", "Autogén tréning"],
      image: "/public/jozsa.jpg",
      shortBio: "Terápiás munkámat leginkább a dinamikus felfogás és a rendszemlélet elvei mentén végzem. Fontosnak tartom a kapcsolatok, az egymáshoz kapcsolódás mély megértését, mert ebből épül fel az élmény, a tapasztalat, a személyiség....önmagunk és a minket körülvevő világ. Hiszem, hogy egy másik emberhez való kapcsolódás teremti meg az utat a változás felé. Szeretettel várok minden gyermek és felnőtt klienst, caládot, akik egyéni, vagy kapcsolati nehézséggel küzdenek és önmaguk, kapcsolataik mélyebb megértésén keresztül szeretnének változni, megtalálni saját harmonikus életükhöz vezető utat. A B61 Központban egyéni terápiákat tartok, valamint pár-és családterápiát vezetünk Jeney Gabriellával."
    },
    {
      id: "szentes-annamaria",
      name: "Dr. Szentes Annamária",
      title: "Alapító, szakmai vezető, klinikai gyermek szakpszichológus, pár-és családterapeuta, meseterapeuta és gyermekpszichodráma vezető",
      specialties: ["Egyéni gyermekterápia", "Pár- és családterápia", "Gyermekpszichodráma"],
      image: "/public/szentes.jpg",
      shortBio: "Szentes Annamária vagyok, klinikai gyermek szakpszichológus, pár-és családterapeuta, meseterapeuta és gyermekpszichodráma  vezető. \n Szakmai tapasztalataimat a Semmelweis Egyetem Gyermekgyógyászati Klinika Tűzoltó utcai részlegén szereztem, ahol osztályos munka keretében onkológiai és krónikusan beteg gyerekek és családjaik pszichés támogatása volt a feladatom. Doktori értekezésemet gyermek onkopszichológia témában védtem meg. \n Jelenleg az International Business School (IBS) Pszichológia BA képzésének vagyok  a  vezetője és magánrendelés keretein belül dolgozom csoportokkal, gyerekekkel és családokkal."
    },
    {
      id: "vasarhelyi-kriszta",
      name: "Vásárhelyi Kriszta",
      title: "klinikai ifjúsági- és gyermek szakpszichológus",
      specialties: ["Gyermekpszichológia", "Ifjúsági pszichológia", "Családterápia"],
      image: "/public/vasar.jpg",
      shortBio: "Vásárhelyi Kriszta vagyok, pszichológus, gyermekdráma asszisztens, tréner, képzésben levő pár-és csaldterapeuta és képzésben levő komplex integratív terapeuta, az International Business School oktatója, az Erdőmerülés szakmai vezetője.\nJelenleg szabadúszóként dolgozom, egyéni- és családterápiás munkám mellett oktatással és nem-formális tanulással foglalkozom. Integrált módszertannal dolgozom, ahol a mélyebb, tudat alatt megélt élmények mellett helyet kapnak verbális módszerek és kognitív technikák, valamint az alkotás, a játék és a természetkapcsolat.\nA B61 Rendelőben végzett tevékenységeim: online párterápia, természetkapcsolati önismereti programok és tréningek."
    },
    {
      id: "pajer-lilla",
      name: "Pajer Lilla",
      title: "Pszichológus",
      specialties: ["pszichológiai tanácsadás", "szülőkonzultáció", "szülőkonzultáció", "autogén tréning"],
      image: "/public/pajer.jpg",
      shortBio: "Pájer Lilla vagyok, okleveles pszichológus, képzésben lévő tanácsadó szakpszichológus, autogén tréning relaxációs gyakorlatvezető. Egy szentendrei óvodában dolgozom óvodapszichológusként. Amiben segíteni tudok: nevelési tanácsadás, szorongás kezelése, stressz kezelés gyerekeknek és felnőtteknek. Gyerekekkel alapvetően művészetterápiás és játékterápiás eszközökkel dolgozom. Felnőtteknek tartok autogén tréninget is."
    },
    {
      id: "lencses-anita",
      name: "Lencsés Anita",
      title: "Pszichológus, irodalomterapeuta",
      specialties: ["Pszichológiai tanácsadás", "Szülőkonzultáció", "Autogén tréning"],
      image: "/public/lencses.jpg",
      shortBio: "Ha valaha érezte már, hogy egy vers, egy történet vagy akár egy dalszöveg különös módon megérintette, akkor tudja: a szavaknak gyógyító erejük van. Én ebben a különleges kapcsolatban hiszek – abban, hogy az irodalom segíthet megérteni önmagunkat, feldolgozni élményeinket, és új utakat fedezni fel az életünkben. \n Ez a meggyőződés részben személyes tapasztalataimból ered. Az olvasás és az írás régóta különleges szerepet tölt be az életemben: kisiskolás korom óta könyvmoly vagyok, és rendszeresen vezetek naplót. Az olvasás által a saját bőrömön is megtapasztalhattam, hogy egy-egy könyv milyen sokat hozzá tudott adni a személyiségfejlődésemhez. Hermann Hesse, Dosztojevszkij, Gabriel García Márquez vagy Bodor Ádám univerzumában elmerülni számomra legalább akkora élmény és tapasztalat volt, mint ha egy távoli országba utaztam volna el. \n Szentendrén élek és dolgozom, ahol jelenleg önismereti csoportokat vezetek felnőtteknek. Irodalomterapeutaként törekszem a sokszínűségre, csoportjaimon kortárs versek, novellák és mesék mellett dalszövegeket is alkalmazom, valamint kreatív írásgyakorlatokat, asszociációs kártyákat és tudatos jelenlét alapú technikákat is szívesen használok.  Az évek során sokféle célcsoporttal dolgoztam: fiatal felnőttekkel, nőkkel, kisgyerekes anyákkal, nyitott és zárt csoportokban egyaránt, személyesen és online környezetben is. Minden csoport és minden ember egyedi, és ez teszi ezt a munkát olyan gazdaggá. \n A pszichológusi munkám mellett oktatással és kutatással is foglalkozom. A BME Pszichológia Doktori Iskolájának doktorjelöltje vagyok, kutatásomat, melynek témája az agysérült személyek emlékezeti funkcióinak vizsgálata, az Országos Orvosi Rehabilitációs Intézetben végzem. Az elmúlt években magyar és angol nyelven publikáltam tudományos közleményeket, valamint oktatóként két egyetemen, a BME-n és a PPKE-n vettem részt pszichológushallgatók képzésében. Fontosnak tartom, hogy a munkámat szakmai közösségben végezzem, ezért tagja vagyok a Magyar Irodalomterápiás Társaságnak és a Magyar Pszichológiai Társaságnak. Rendszeresen veszek részt szupervíziókon, továbbképzéseken és konferenciákon – hiszem, hogy a folyamatos tanulás elengedhetetlen ebben a szakmában. \n \n E-mail: lencses.anita.pszichologus@gmail.com \n Facebook: Lencsés Anita pszichológus \n Instagram: lencses_anita_pszi"
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

            <div className="grid grid-cols-1 gap-8">
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
