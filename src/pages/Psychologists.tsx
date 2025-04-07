
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import PsychologistCard from '@/components/PsychologistCard';

const Psychologists = () => {
  const psychologists = [
    {
      id: "dr-smith",
      name: "Dr. Emily Smith",
      title: "Clinical Psychologist",
      specialties: ["Child Psychology", "Family Therapy"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      shortBio: "Dr. Smith specializes in child psychology and family therapy with over 10 years of experience helping families thrive."
    },
    {
      id: "dr-johnson",
      name: "Dr. Michael Johnson",
      title: "Family Therapist",
      specialties: ["Family Therapy", "Tale Therapy"],
      image: "https://images.unsplash.com/photo-1553867745-6e038d085e86?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      shortBio: "Dr. Johnson uses innovative approaches like tale therapy to help families communicate effectively and resolve conflicts."
    },
    {
      id: "dr-williams",
      name: "Dr. Sarah Williams",
      title: "Child Psychologist",
      specialties: ["Child Psychodrama", "Child Psychology"],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      shortBio: "Dr. Williams is passionate about helping children express themselves through psychodrama techniques."
    },
    {
      id: "dr-brown",
      name: "Dr. David Brown",
      title: "Adult Psychologist",
      specialties: ["Individual Therapy", "Couple Counseling"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      shortBio: "Dr. Brown has extensive experience working with adults facing life transitions, anxiety, depression, and relationship challenges."
    },
    {
      id: "dr-davis",
      name: "Dr. Jennifer Davis",
      title: "Clinical Psychologist",
      specialties: ["Child Psychology", "Tale Therapy"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      shortBio: "Dr. Davis combines traditional therapeutic approaches with innovative tale therapy to help children work through emotional challenges."
    },
    {
      id: "dr-wilson",
      name: "Dr. Robert Wilson",
      title: "Family Systems Therapist",
      specialties: ["Family Therapy", "Couple Counseling"],
      image: "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      shortBio: "Dr. Wilson helps families and couples understand their dynamics and develop healthier patterns of interaction."
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <HeroSection 
          title="Our Psychologists"
          subtitle="Meet our team of experienced, compassionate professionals dedicated to supporting your mental health journey."
          imageSrc="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          primaryButtonText="Book an Appointment"
          primaryButtonLink="/booking"
          secondaryButtonText="View Services"
          secondaryButtonLink="/services"
        />

        {/* Team */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-therapy-dark mb-4">Meet Our Team</h2>
              <p className="text-therapy-gray max-w-2xl mx-auto">
                Our diverse team of psychologists brings specialized expertise to address a wide range of needs.
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
              <h2 className="text-therapy-dark mb-4">Our Professional Standards</h2>
              <p className="text-therapy-gray max-w-2xl mx-auto">
                What you can expect from our licensed professionals.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-therapy-gray">
              <p>
                At MindfulHaven, all our psychologists hold advanced degrees in their fields and are licensed by the appropriate state boards. We maintain the highest ethical standards and are committed to continuing education to stay current with the latest research and therapeutic approaches.
              </p>
              <p>
                Our team engages in regular peer consultation to ensure we're providing the best possible care. This collaborative approach allows us to draw on the collective wisdom and diverse expertise of our entire staff when addressing complex cases.
              </p>
              <p>
                We believe in transparent communication and will always provide clear explanations about our therapeutic approaches, expected outcomes, and practice policies. You'll never be left wondering about the direction of your treatment or why particular techniques are being used.
              </p>
              <p>
                Most importantly, we recognize that the foundation of effective therapy is a strong therapeutic relationship. Our psychologists prioritize creating a safe, trusting connection with each client, knowing that this relationship is essential to the healing process.
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
