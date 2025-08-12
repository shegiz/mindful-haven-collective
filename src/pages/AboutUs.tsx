
import React from 'react';
import { Heart, Target, Globe, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection 
          title="Bemutatkozás"
          subtitle="Learn about our mission, values, and the story behind our psychology practice."
          imageSrc="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          primaryButtonText="Meet Our Team"
          primaryButtonLink="/psychologists"
          secondaryButtonText="Our Services"
          secondaryButtonLink="/services"
          imagePosition="left"
        />

        {/* Our Story */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-therapy-dark mb-6">Our Story</h2>
            </div>
            <div className="prose prose-lg max-w-none text-therapy-gray">
              <p>
                MindfulHaven was founded in 2010 by Dr. Emily Smith and Dr. Michael Johnson, two passionate psychologists who shared a vision of creating a practice that provides comprehensive mental health services in a warm, supportive environment.
              </p>
              <p>
                What began as a small two-person practice has grown into a thriving collective of specialized psychologists, each bringing unique expertise and approaches to our team. Throughout our growth, we've remained committed to our founding principles: providing personalized care, using evidence-based approaches, and creating a safe space for healing and growth.
              </p>
              <p>
                Today, MindfulHaven serves hundreds of individuals, families, and children each year. We continue to evolve our practice, integrating innovative therapeutic techniques with traditional approaches to address the ever-changing needs of our community.
              </p>
              <p>
                Our diverse team of specialists allows us to offer a wide range of services, from child psychology and family therapy to specialized approaches like tale therapy and child psychodrama. This collaborative environment ensures that each client receives the most appropriate care for their unique situation.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="section-padding bg-therapy-beige">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-therapy-dark mb-4">Our Mission & Values</h2>
              <p className="text-therapy-gray max-w-2xl mx-auto">
                The core principles that guide our practice and shape everything we do.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
              <h3 className="text-2xl font-medium text-therapy-dark mb-4">Our Mission</h3>
              <p className="text-therapy-gray">
                To provide compassionate, effective psychological services that promote mental wellbeing and empower individuals and families to thrive. We strive to create a supportive environment where clients feel respected, understood, and equipped with the tools they need for lasting positive change.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <div className="mb-4 w-12 h-12 bg-therapy-blue-light rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-therapy-blue" />
                </div>
                <h3 className="text-xl font-medium text-therapy-dark mb-2">Compassion</h3>
                <p className="text-therapy-gray">
                  We approach each client with empathy, understanding, and genuine care. We believe that compassion is the foundation of effective therapy.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <div className="mb-4 w-12 h-12 bg-therapy-green-light rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-therapy-green" />
                </div>
                <h3 className="text-xl font-medium text-therapy-dark mb-2">Excellence</h3>
                <p className="text-therapy-gray">
                  We are committed to the highest standards of professional practice. Our team continuously updates their knowledge and skills to provide the best possible care.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <div className="mb-4 w-12 h-12 bg-therapy-blue-light rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-therapy-blue" />
                </div>
                <h3 className="text-xl font-medium text-therapy-dark mb-2">Inclusivity</h3>
                <p className="text-therapy-gray">
                  We respect and celebrate diversity in all its forms. We create a welcoming space where everyone feels valued and understood regardless of background or identity.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <div className="mb-4 w-12 h-12 bg-therapy-green-light rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-therapy-green" />
                </div>
                <h3 className="text-xl font-medium text-therapy-dark mb-2">Collaboration</h3>
                <p className="text-therapy-gray">
                  We believe in working together—with our clients and with each other—to achieve the best possible outcomes. Your active participation is vital to the therapeutic process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-therapy-dark mb-6">Our Approach</h2>
            </div>
            <div className="prose prose-lg max-w-none text-therapy-gray">
              <p>
                At MindfulHaven, we believe in a holistic approach to mental health that considers the whole person—not just symptoms. We understand that each person is unique, with their own strengths, challenges, and goals. That's why we tailor our therapeutic approaches to meet individual needs.
              </p>
              <p>
                Our practice integrates evidence-based techniques with innovative approaches to provide comprehensive care. We draw from various therapeutic modalities, including cognitive-behavioral therapy, psychodynamic approaches, family systems theory, and creative arts therapies.
              </p>
              <p>
                We place particular emphasis on creating a safe, nurturing environment where clients feel comfortable exploring their thoughts and feelings. Building a strong therapeutic relationship is central to our work—we believe that trust and connection are essential components of effective therapy.
              </p>
              <p>
                Whether working with children, adults, couples, or families, our goal is to empower clients with insights, skills, and strategies they can use in their everyday lives. We see ourselves as guides in your journey toward greater well-being, resilience, and fulfillment.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
