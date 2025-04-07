
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
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg h-full flex flex-col">
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-therapy-dark">{name}</CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-therapy-gray mb-4">{shortBio}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {specialties.map((specialty, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-therapy-blue-light text-therapy-blue"
            >
              {specialty}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/booking?psychologist=${id}`} className="w-full">
          <Button className="w-full bg-therapy-blue hover:bg-therapy-blue/90">
            Book an Appointment
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PsychologistCard;
