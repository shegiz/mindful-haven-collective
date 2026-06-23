
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
  { id: "almassy-foldvary-zsofia", name: "Almássy-Földváry Zsófia" },
  { id: "foldvary-zsofia", name: "Földváry Zsófia" },
  { id: "javorszky-eszter", name: "Jávorszky Eszter" },
  { id: "jeney-gabriella", name: "Jeney Gabriella" },
  { id: "jozsa-balazs", name: "Józsa Balázs" },
  { id: "lencses-anita", name: "Lencsés Anita" },
  { id: "pajer-lilla", name: "Pajer Lilla" },
  { id: "szentes-annamaria", name: "Dr. Szentes Annamária" },
  { id: "vasarhelyi-kriszta", name: "Vásárhelyi Kriszta" }
];

const services = [
  { id: "egyeni", name: "Egyéni gyermekterápia" },
  { id: "csoport", name: "Csoportterápiák" },
  { id: "onlina", name: "Online párterápia" },
  { id: "par", name: "Pár- és családterápia" },
  { id: "tanacsadas", name: "Pszichológiai tanácsadás" }
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
    website: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const API_URL = '/api/booking_submit.php'; // or 'https://api.example.com/booking_submit.php'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        // credentials: 'include', // only if you need cookies
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Request failed');
      }

      toast({
        title: "Időpont kérését megkapuk",
        description: "Hamarosan felvesszük Önnel a kapcsolatot.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        psychologist: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
        website: '',
      });
    } catch (err: any) {
      toast({
        title: "Valami hiba lépett fel.",
        description: err.message || "Kérjük próbálja meg később.",
        // variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
        <input
          type="text"
          name="website"
          value={formData.website || ''}
          onChange={handleChange}
          style={{ display: "none" }} // hidden from humans
          tabIndex={-1}
          autoComplete="off"
        />
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
                  <SelectItem value="reggel">{t('morning')}</SelectItem>
                  <SelectItem value="délután">{t('afternoon')}</SelectItem>
                  <SelectItem value="este">{t('evening')}</SelectItem>
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
