
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const psychologists = [
  { id: "dr-smith", name: "Dr. Emily Smith" },
  { id: "dr-johnson", name: "Dr. Michael Johnson" },
  { id: "dr-williams", name: "Dr. Sarah Williams" },
  { id: "dr-brown", name: "Dr. David Brown" },
];

const services = [
  { id: "child-psychology", name: "Child Psychology" },
  { id: "family-therapy", name: "Family Therapy" },
  { id: "tale-therapy", name: "Tale Therapy" },
  { id: "child-psychodrama", name: "Child Psychodrama" },
  { id: "individual-therapy", name: "Individual Therapy" },
  { id: "couple-counseling", name: "Couple Counseling" },
];

const BookingForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedPsychologist = searchParams.get('psychologist');
  
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    psychologist: preselectedPsychologist || '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Appointment Request Received",
        description: "We'll contact you shortly to confirm your appointment.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        psychologist: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-therapy-dark">Book Your Appointment</CardTitle>
        <CardDescription>
          Fill out the form below to request an appointment with one of our specialists.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Enter your full name" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Enter your email address" 
                required 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="Enter your phone number" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="psychologist">Preferred Psychologist</Label>
              <Select 
                value={formData.psychologist} 
                onValueChange={(value) => handleSelectChange('psychologist', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a psychologist" />
                </SelectTrigger>
                <SelectContent>
                  {psychologists.map((psychologist) => (
                    <SelectItem key={psychologist.id} value={psychologist.id}>
                      {psychologist.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="service">Service</Label>
              <Select 
                value={formData.service} 
                onValueChange={(value) => handleSelectChange('service', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredDate">Preferred Date</Label>
              <Input 
                id="preferredDate" 
                name="preferredDate" 
                type="date"
                value={formData.preferredDate} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="preferredTime">Preferred Time</Label>
              <Select 
                value={formData.preferredTime} 
                onValueChange={(value) => handleSelectChange('preferredTime', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12pm - 4pm)</SelectItem>
                  <SelectItem value="evening">Evening (4pm - 7pm)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Please share any specific concerns or questions you have"
              rows={4}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-therapy-blue hover:bg-therapy-blue/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Request Appointment"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default BookingForm;
