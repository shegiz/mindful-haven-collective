
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
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
  { id: "jeney-gabriella", name: "Jeney Gabriella" },
  { id: "jozsa-balazs", name: "Józsa Balázs" },
  { id: "szentes-annamaria", name: "Dr. Szentes Annamária" },
  { id: "vasarhelyi-kriszta", name: "Vásárhelyi Kriszta" },
  { id: "pajer-lilla", name: "Pajer Lilla" },
  { id: "lencses-anita", name: "Lencsés Anita" }
];

const services = [
  { id: "egyeni", name: "Egyéni gyermekterápia" },
  { id: "tanacsadas", name: "Pszichológiai tanácsadás" },
  { id: "par", name: "Pár- és családterápia" },
  { id: "onlina", name: "Online párterápia" },
  { id: "csoport", name: "Csoportterápiák" }
];

const BookingForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedPsychologist = searchParams.get('psychologist');
  const { t } = useLanguage();
  
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
        <CardTitle className="text-therapy-dark">{t('bookingTitle')}</CardTitle>
        <CardDescription>
          {t('bookingSubtitle')}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('fullName')}</Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder={t('enterFullName')} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('email')}</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder={t('enterEmail')} 
                required 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">{t('phone')}</Label>
              <Input 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder={t('enterPhone')} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="psychologist">{t('preferredPsychologist')}</Label>
              <Select 
                value={formData.psychologist} 
                onValueChange={(value) => handleSelectChange('psychologist', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t('selectPsychologist')} />
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
              <Label htmlFor="service">{t('service')}</Label>
              <Select 
                value={formData.service} 
                onValueChange={(value) => handleSelectChange('service', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t('selectService')} />
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
              <Label htmlFor="preferredDate">{t('preferredDate')}</Label>
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
              <Label htmlFor="preferredTime">{t('preferredTime')}</Label>
              <Select 
                value={formData.preferredTime} 
                onValueChange={(value) => handleSelectChange('preferredTime', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t('selectTime')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">{t('morning')}</SelectItem>
                  <SelectItem value="afternoon">{t('afternoon')}</SelectItem>
                  <SelectItem value="evening">{t('evening')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t('additionalInfo')}</Label>
            <Textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder={t('additionalInfoPlaceholder')}
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
            {isSubmitting ? t('submitting') : t('requestAppointment')}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default BookingForm;
