
import React from 'react';
import { Link } from 'react-router-dom';
import { Smile, Users, Award, Clock } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import PsychologistCard from '@/components/PsychologistCard';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const featuredPsychologists = [
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
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        {/* Featured Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-therapy-dark mb-4">Our Services</h2>
              <p className="text-therapy-gray max-w-2xl mx-auto">
                We offer a wide range of psychological services tailored to meet the unique needs of 
                individuals, families, and children.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Child Psychology"
                description="Specialized therapy approaches for children to help them navigate emotional challenges and develop healthy coping mechanisms."
                icon={<Smile className="h-6 w-6" />}
              />
              <ServiceCard
                title="Family Therapy"
                description="Helping families improve communication, resolve conflicts, and strengthen relationships through collaborative therapeutic sessions."
                icon={<Users className="h-6 w-6" />}
              />
              <ServiceCard
                title="Tale Therapy"
                description="Using storytelling as a therapeutic tool to help clients express emotions, gain insights, and discover new perspectives."
                icon={<Award className="h-6 w-6" />}
              />
            </div>

            <div className="text-center mt-12">
              <Link to="/szolgaltatasok">
                <Button variant="outline" className="border-therapy-blue text-therapy-blue hover:bg-therapy-blue/10">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-therapy-beige">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-therapy-dark mb-4">Why Choose MindfulHaven</h2>
              <p className="text-therapy-gray max-w-2xl mx-auto">
                At MindfulHaven, we're committed to providing exceptional care in a warm and supportive environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-therapy-blue-light rounded-full flex items-center justify-center">
                  <Award className="h-7 w-7 text-therapy-blue" />
                </div>
                <h3 className="text-xl font-medium text-therapy-dark mb-2">Expert Team</h3>
                <p className="text-therapy-gray text-sm">
                  Our highly qualified psychologists bring years of specialized experience and training.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-therapy-green-light rounded-full flex items-center justify-center">
                  <Users className="h-7 w-7 text-therapy-green" />
                </div>
                <h3 className="text-xl font-medium text-therapy-dark mb-2">Personalized Care</h3>
                <p className="text-therapy-gray text-sm">
                  We create tailored treatment plans that address your unique needs and goals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-therapy-blue-light rounded-full flex items-center justify-center">
                  <Smile className="h-7 w-7 text-therapy-blue" />
                </div>
                <h3 className="text-xl font-medium text-therapy-dark mb-2">Comfortable Setting</h3>
                <p className="text-therapy-gray text-sm">
                  Our practice is designed to be a safe, welcoming space for healing and growth.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-therapy-green-light rounded-full flex items-center justify-center">
                  <Clock className="h-7 w-7 text-therapy-green" />
                </div>
                <h3 className="text-xl font-medium text-therapy-dark mb-2">Flexible Scheduling</h3>
                <p className="text-therapy-gray text-sm">
                  We offer evening appointments and telehealth options to accommodate your busy life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-therapy-dark mb-4">Meet Our Psychologists</h2>
              <p className="text-therapy-gray max-w-2xl mx-auto">
                Our team of experienced professionals is dedicated to supporting your mental health journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPsychologists.map((psychologist) => (
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

            <div className="text-center mt-12">
              <Link to="/pszichologusok">
                <Button variant="outline" className="border-therapy-blue text-therapy-blue hover:bg-therapy-blue/10">
                  Meet All Our Psychologists
                </Button>
              </Link>
            </div>
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
            <Link to="/idopontfoglalas">
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

export default Index;
