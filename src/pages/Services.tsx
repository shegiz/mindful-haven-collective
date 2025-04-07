
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
      title: "Gyermekterápia",
      description: "A gyermekterápia alapvetően eltér a felnőttek számára kialakított terápiás módszerektől.",
      icon: <Smile className="h-6 w-6" />,
      details: "A gyermekterápia alapvetően eltér a felnőttek számára kialakított terápiás módszerektől. A pszichológus elsődleges célja, hogy a gyermek számára biztonságos és támogató légkört teremtsen, amelyben az életkorához illeszkedő eszközök – például játékok, kreatív feladatok, rajzok vagy tesztek – segítségével tárja fel és értse meg a problémák mögött húzódó okokat. A gyerekekkel való munka során a verbális kommunikáció kevésbé hangsúlyos, helyette a játék, a fantázia, a bábjáték, a mesék és az alkotó tevékenységek kerülnek középpontba. Ezek az eszközök segítenek a gyermeknek abban, hogy megjelenítse és kifejezze belső világát, nehézségeit, érzéseit és feszültségeit, így a problémák feldolgozhatóvá válnak."
    },
    {
      title: "Családterápia",
      description: "A családterápia egy pszichoterápiás módszer, amely az egyéni problémákat a családi és kapcsolati rendszer összefüggéseiben vizsgálja.",
      icon: <Users className="h-6 w-6" />,
      details: "A családterápia egy pszichoterápiás módszer, amely az egyéni problémákat a családi és kapcsolati rendszer összefüggéseiben vizsgálja. Célja a család működésének javítása, a megértés és érzelmi támogatás erősítése, valamint a problémamegoldó készségek fejlesztése. Segít feltárni a kapcsolati problémák okait, és hatékony megoldásokat kínál. Ha a család működése elakad, a terápia támogatást nyújt a konfliktusok megértésében és kezelésében, elősegítve a harmonikusabb együttélést. A családterápiás ülések 3-4 heti gyakorisággal zajlanak, 90 percben, két családterapeuta vezetésével."
    },
    {
      title: "Meseterápia",
      description: "Using storytelling as a therapeutic tool to help express emotions and gain new perspectives.",
      icon: <Book className="h-6 w-6" />,
      details: "Tale therapy harnesses the power of stories to help clients express difficult emotions, explore different perspectives, and find meaning in their experiences. This approach is particularly effective with children but can benefit clients of all ages, especially those who find direct discussion of emotions challenging."
    },
    {
      title: "Gyermekpszichodráma",
      description: "A creative approach that uses guided dramatic play to help children process emotions.",
      icon: <Sparkles className="h-6 w-6" />,
      details: "Child psychodrama uses role-playing and guided dramatic play to help children express feelings, work through traumatic experiences, and develop social skills. This approach allows children to safely explore difficult emotions and situations through play, leading to emotional healing and personal growth."
    },
    {
      title: "Egyéni terápia",
      description: "Az egyéni felnőtt terápia egy pszichoterápiás folyamat, amely a személyes fejlődést, önismeretet és a mindennapi élet nehézségeivel való megküzdést célozza.",
      icon: <Heart className="h-6 w-6" />,
      details: "Az egyéni felnőtt terápia egy pszichoterápiás folyamat, amely a személyes fejlődést, önismeretet és a mindennapi élet nehézségeivel való megküzdést célozza. Célja, hogy segítse a klienset megérteni érzéseit, gondolatait és viselkedési mintáit, valamint hatékony problémamegoldó készségeket fejlesszen. A terápia során a szakember biztonságos és támogató környezetet biztosít, ahol a kliens szabadon kifejezheti aggályait. Különösen hasznos lehet olyan problémák kezelésében, mint élethelyzeti változások, szorongás, depresszió, önértékelési gondok vagy gyász. Emellett lehetőséget ad a múltbeli nehézségek feldolgozására, miközben elősegíti a kliens önállóbb és kiegyensúlyozottabb életvitelét."
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
