import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface SimplePsychologistCardProps {
  name: string;
  title: string;
  specialties: string[];
}

const SimplePsychologistCard: React.FC<SimplePsychologistCardProps> = ({
  name,
  title,
  specialties,
}) => {
  return (
    <Card className="h-full transition-all duration-200 hover:shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl text-therapy-dark">{name}</CardTitle>
        <CardDescription className="text-therapy-gray">{title}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
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
    </Card>
  );
};

export default SimplePsychologistCard;