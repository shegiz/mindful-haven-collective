
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Book, Frown, LucideIcon, Smile, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string;
}

const Services = () => {
  const services: Service[] = [
    {
      title: "Egyéni gyermekterápia",
      description: "Az egyéni gyermekterápia biztonságos és támogató keretet nyújt a gyerekek számára ahhoz, hogy játékos, életkorukhoz illeszkedő módon dolgozhassák fel.",
      icon: <Smile className="h-6 w-6" />,
      details: "Az egyéni gyermekterápia biztonságos és támogató keretet nyújt a gyerekek számára ahhoz, hogy játékos, életkorukhoz illeszkedő módon dolgozhassák fel érzelmi és viselkedésbeli nehézségeiket, szorongásaikat. A gyerekek sokszor nemcsak szavakkal, hanem játékkal, rajzzal, történetekkel fejezik ki belső világukat. A gyermekterápia során ezek az eszközök segítenek megérteni a reakcióik és a viselkedésük mögött húzódó érzelmeket, esetleges nehézségeket. A gyermekterápiák során a leggyakrabban szorongásos és pszichoszomatikus panaszokkal, magatartás problémákkal, illetve élethelyzeti krízisekkel (pl. válás, testvér születése) foglalkozunk. A szülők aktív bevonása és a rendszeres konzultációk fontos részét jelentik a terápiás folyamatnak. Célunk, hogy a gyermek új megküzdési módokat találjon, fejlődjön az önbizalma és jobban érezze magát a bőrében."
    },
    {
      title: "Pszichológiai tanácsadás",
      description: "A pszichológiai tanácsadás a lelki támogatás egyik formája, amely elsősorban olyan személyeket segít, akik valamilyen életvezetési nehézséggel, krízissel vagy elakadással küzdenek.",
      icon: <Users className="h-6 w-6" />,
      details: "A pszichológiai tanácsadás a lelki támogatás egyik formája, amely elsősorban olyan személyeket segít, akik valamilyen életvezetési nehézséggel, krízissel vagy elakadással küzdenek. A cél, hogy a kliens saját belső erőforrásait mozgósítva új nézőpontokat találjon problémái megértéséhez és megoldásához. A pszichológus fókuszáltan az aktuális kérdésekkel dolgozik, miközben biztonságos, elfogadó légkört biztosít az együttműködéshez. A tanácsadás során lehetőség nyílik az ismétlődő mintázatok felismerésére, a változás irányainak meghatározására és a kiegyensúlyozottabb életvitel kialakítására."
    },
    {
      title: "Pár- és családterápia",
      description: "A pár-és családterápia olyan terápiás megközelítés, amely az egyén nehézségeit a kapcsolati rendszerében vizsgálja.",
      icon: <Book className="h-6 w-6" />,
      details: "A pár-és családterápia olyan terápiás megközelítés, amely az egyén nehézségeit a kapcsolati rendszerében vizsgálja. A terápiás fókuszi a családi kapcsolatokon, a társas viszonyokon, valamint a kulturális és környezeti hatások összességén van.  A terápiás munka célja, hogy támogassuk a család harmonikus működését: erősítsük a kölcsönös megértést, az érzelmi támogatást, és fejlesszük a megküzdési és problémamegoldó készségeket. A család fogalmát tágan értelmezzük – számunkra minden olyan emberi közösség családnak számít, amelynek tagjai törődnek egymással, és magukat családként határozzák meg. A terápiás folyamatot mindig az adott család élethelyzetéhez, szükségleteihez és értékeihez igazítjuk."
    },
    {
      title: "Online párterápia",
      description: "A rendszerszemléletű párterápia egy olyan terápiás megközelítés, amely a párkapcsolatot nem egyének összességének, hanem rendszerként kezeli.",
      icon: <Sparkles className="h-6 w-6" />,
      details: "A rendszerszemléletű párterápia egy olyan terápiás megközelítés, amely a párkapcsolatot nem egyének összességének, hanem rendszerként kezeli, így a terápiás munka középpontjában maga a kapcsolat áll, a cél pedig a működési mintázatok megértése és, ha szükséges új mintázatok, stratégiák kialakítása. A párterápia biztonságos keretet ad ahhoz, hogy a felek nyíltan, őszintén beszélhessenek a nehézségeikről. A folyamat során közösen dolgozunk a rögzült kommunikációs és viselkedési minták feltárásán, megértjük ezek eredetét és hatását, majd segítünk olyan új kapcsolati működésmódokat kialakítani, amelyek támogatják a kapcsolat fejlődését és stabilitását."
    },
    {
      title: "Csoportterápiák",
      description: "Központunkban önismereti, meseterápiás, gyermekpszichodráma, irodalomterápiás és tematikus csoportokat tartunk.",
      icon: <Heart className="h-6 w-6" />,
      details: "Központunkban önismereti, meseterápiás, gyermekpszichodráma, irodalomterápiás és tematikus csoportokat tartunk."
    }
  ];

  const faqs = [
    {
      question: "Hogyan tudom, hogy szükségem van-e terápiára?",
      answer: "Ha úgy érzi, hogy a mindennapi életben nehézségei vannak, mint például szorongás, depresszió, stresszkezelési problémák vagy kapcsolati nehézségek, akkor a terápia segíthet. A legjobb módja annak, hogy megtudja, szüksége van-e terápiára, ha konzultál egy szakemberrel. Az első találkozó során átbeszéljük az Ön helyzetét és céljait."
    },
    {
      question: "Milyen hosszú ideig tart a terápia?",
      answer: "Az időtartam az Ön konkrét igényeitől és céljaitól függően változik. Egyes ügyfeleknek a rövid távú, adott problémákra összpontosító terápia (8-12 ülés) előnyös, míg mások a hosszabb távú munkát részesítik előnyben. Az első ülések során megbeszéljük a javaslatokat, és rendszeresen áttekintjük az előrehaladását."
    },
    {
      question: "Mi történik az első terápiás ülésen?",
      answer: "Általában az első ülés egy konzultáció, ahol átbeszéljük az Ön hátterét, jelenlegi problémáit és céljait. Ez egy lehetőség arra, hogy megismerjük egymást, és megbeszéljük a terápiás folyamatot. Nem szükséges semmilyen előkészületet tennie, csak hozza magával a nyitottságát és őszinteségét."
    },
    {
      question: "Hogyan válasszak pszichológust?",
      answer: "A pszichológus kiválasztása személyes preferenciákon múlik. Fontos, hogy olyan szakemberrel dolgozzon, akiben megbízik és akivel kényelmesen érzi magát. Nézze meg a pszichológusok profiljait, olvassa el a véleményeket, és ha lehetséges, kérjen ajánlást ismerősöktől vagy orvosoktól. Az első konzultáció során érdemes feltenni kérdéseket a terápiás megközelítésükről és tapasztalataikról."
    },
    {
      question: "Elfogadnak-e Önkéntes Egészségpénztári kártyát?",
      answer: "Igen, elfogadjuk az Önkéntes Egészségpénztári kártyát. Kérjük, hogy a foglalás megerősítésekor jelezze, hogy ezzel kíván fizetni, és mi segítünk a szükséges adminisztrációban."
    },
    {
      question: "A terápia bizalmas?",
      answer: "Igen, a terápia teljes mértékben bizalmas. A pszichológusok szigorúan betartják az etikai irányelveket, és semmilyen információt nem osztanak meg harmadik féllel az Ön beleegyezése nélkül. A bizalom és a biztonság alapvető fontosságú a terápiás folyamatban."
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <HeroSection 
          title="Szolgáltatásaink"
          subtitle=""
          imageSrc="/public/b61_img3.jpg"
          primaryButtonText="Foglaljon időpontot"
          primaryButtonLink="/idopontfoglalas"
          imagePosition="left"
        />

        {/* Service Details */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-therapy-dark mb-4">
                Részletes Szolgáltatások
              </h2>
              <p className="text-therapy-gray max-w-2xl mx-auto">
                Minden szolgáltatásunkat úgy alakítottuk ki, hogy támogassa az egyéni fejlődést és a lelki jólétet. Fedezze fel részletesen, mit kínálunk.
              </p>
            </div>

            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="bg-therapy-beige p-6 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-therapy-blue-light rounded-full flex items-center justify-center">
                      <div className="text-therapy-blue">{service.icon}</div>
                    </div>
                    <h3 className="text-xl font-medium text-therapy-dark">{service.title}</h3>
                  </div>
                  <p className="text-therapy-gray">{service.details}</p>
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

export default Services;
