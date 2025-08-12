
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
    },
    {
      title: "Párterápua",
      description: "Supporting couples in improving communication and strengthening their relationship.",
      icon: <Frown className="h-6 w-6" />,
      details: "Couple counseling helps partners improve communication, resolve conflicts, rebuild trust, and strengthen their emotional connection. Whether you're facing specific challenges or simply want to enhance an already good relationship, our therapists provide tools and strategies for creating a healthier partnership."
    }
  ];

  const faqs = [
    {
      question: "How do I know if I need therapy?",
      answer: "If you're experiencing persistent sadness, anxiety, relationship difficulties, or struggling to cope with life's challenges, therapy might be beneficial. It's also valuable for personal growth or during life transitions, even when there isn't a specific mental health concern."
    },
    {
      question: "How long does therapy usually last?",
      answer: "The duration varies depending on your specific needs and goals. Some clients benefit from short-term therapy (8-12 sessions) focused on specific issues, while others prefer longer-term work. We'll discuss recommendations during your initial sessions and regularly review your progress."
    },
    {
      question: "What happens in a typical therapy session?",
      answer: "Sessions typically last 50 minutes. In the first session, we'll discuss your concerns and goals for therapy. Subsequent sessions involve exploring your thoughts, feelings, and behaviors related to your concerns. The exact format depends on the therapeutic approach and your specific needs."
    },
    {
      question: "How do I choose the right psychologist for me?",
      answer: "Consider their specialization, therapeutic approach, and whether you feel comfortable with them. It's important to have a good rapport with your therapist. We're happy to help match you with a psychologist based on your needs, or you can review our team profiles and select someone you think might be a good fit."
    },
    {
      question: "Do you accept insurance?",
      answer: "We work with most major insurance providers. Please contact our office with your insurance information, and we'll verify your benefits before your first appointment. We also offer self-pay options and sliding scale fees for those without insurance coverage."
    },
    {
      question: "Are therapy sessions confidential?",
      answer: "Yes, confidentiality is a fundamental part of therapy. Information shared in sessions is protected by law with few exceptions (such as risk of harm to self or others, or court orders). We'll discuss these limits to confidentiality during your first session."
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <HeroSection 
          title="Our Services"
          subtitle="Comprehensive psychological services tailored to meet the unique needs of individuals, families, and children."
          imageSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          primaryButtonText="Book an Appointment"
          primaryButtonLink="/booking"
          secondaryButtonText="Contact Us"
          secondaryButtonLink="/contact"
          imagePosition="left"
        />

        {/* Services Grid */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-therapy-dark mb-4">What We Offer</h2>
              <p className="text-therapy-gray max-w-2xl mx-auto">
                Our wide range of services is designed to address different needs across all age groups.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="section-padding bg-therapy-beige">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-therapy-dark mb-4">Service Details</h2>
              <p className="text-therapy-gray max-w-2xl mx-auto">
                Learn more about our specialized therapeutic approaches.
              </p>
            </div>

            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
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

        {/* FAQs */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-therapy-dark mb-4">Frequently Asked Questions</h2>
              <p className="text-therapy-gray max-w-2xl mx-auto">
                Answers to common questions about our services and therapy in general.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-therapy-dark">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-therapy-gray">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-therapy-blue py-16">
          <div className="container-custom text-center text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Start Your Journey?</h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Take the first step toward improved mental well-being. Schedule an appointment with one of our 
              experienced psychologists today.
            </p>
            <Link to="/booking">
              <Button className="bg-white text-therapy-blue hover:bg-white/90 px-8 py-6">
                Book an Appointment
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
