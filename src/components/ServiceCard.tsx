
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

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: string;
  buttonText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link = "/booking",
  buttonText = "Book a Session",
}) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-200 hover:shadow-lg">
      <CardHeader>
        {icon && (
          <div className="w-12 h-12 bg-therapy-blue-light rounded-full flex items-center justify-center mb-4">
            <div className="text-therapy-blue">{icon}</div>
          </div>
        )}
        <CardTitle className="text-xl text-therapy-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-therapy-gray">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Link to={link} className="w-full">
          <Button variant="outline" className="w-full border-therapy-blue text-therapy-blue hover:bg-therapy-blue/10">
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
