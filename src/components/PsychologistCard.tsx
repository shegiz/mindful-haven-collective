
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PsychologistCardProps {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  image: string;
  shortBio: string;
}

const PsychologistCard: React.FC<PsychologistCardProps> = ({
  id,
  name,
  title,
  specialties,
  image,
  shortBio,
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg h-full">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left side: Photo, name, title, specialties, button */}
        <div className="md:w-1/2 flex flex-col">
          <div className="h-48 md:h-64 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <CardTitle className="text-xl text-therapy-dark mb-2">{name}</CardTitle>
            <CardDescription className="mb-4">{title}</CardDescription>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {specialties.map((specialty, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-xs rounded-full bg-therapy-blue-light text-therapy-blue"
                >
                  {specialty}
                </span>
              ))}
            </div>
            
            <div className="mt-auto">
              <Link to={`/idopontfoglalas?psychologist=${id}`} className="w-full">
                <Button className="w-full bg-therapy-blue hover:bg-therapy-blue/90">
                  Foglaljon időpontot
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Right side: Introduction */}
        <div className="md:w-1/2 p-6 flex items-center">
          <p className="text-sm text-therapy-gray leading-relaxed">{shortBio}</p>
        </div>
      </div>
    </Card>
  );
};

export default PsychologistCard;
