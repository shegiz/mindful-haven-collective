
import React, { useState } from 'react';
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

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    website: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const API_URL = '/api/contact_submit.php';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const contentType = res.headers.get('content-type') || '';
      const raw = await res.text();
      let data: any = {};

      if (contentType.includes('application/json')) {
        data = raw ? JSON.parse(raw) : {};
      }

      if (!res.ok || !data.success) {
        throw new Error(data.message || (res.status === 404 ? 'Service not found' : 'Request failed'));
      }

      toast({
        title: "Üzenet elküldve",
        description: "Köszönjük megkeresését, hamarosan válaszolunk.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        website: '',
      });
    } catch (err: any) {
      toast({
        title: "Hiba történt",
        description: err.message || "Kérjük próbálja meg később.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
          type="text"
          name="website"
          value={formData.website || ''}
          onChange={handleChange}
          style={{ display: "none" }} // hidden from humans
          tabIndex={-1}
          autoComplete="off"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Név</Label>
          <Input 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Az Ön teljes neve" 
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
            placeholder="Az Ön email címe" 
            required 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            placeholder="Az Ön telefonszáma" 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Tárgy</Label>
          <Select value={formData.subject} onValueChange={handleSelectChange}>
            <SelectTrigger>
              <SelectValue placeholder="Válasszon tárgyat" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">Általános megkeresés</SelectItem>
              <SelectItem value="appointment">Időpontfoglalási kérdés</SelectItem>
              <SelectItem value="services">Szolgáltatással kapcsolatos kérdés</SelectItem>
              <SelectItem value="other">Egyéb</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Üzenet</Label>
        <Textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Miben segíthetünk?"
          rows={6}
          required
        />
      </div>

      <Button 
        type="submit" 
        className="w-full md:w-auto bg-therapy-blue hover:bg-therapy-blue/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
