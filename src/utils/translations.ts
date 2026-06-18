
type TranslationKey = 
  | 'home' 
  | 'aboutUs' 
  | 'practice' 
  | 'psychologists'
  | 'partners'
  | 'services'
  | 'contact'
  | 'bookAppointment'
  | 'bookingTitle'
  | 'bookingSubtitle'
  | 'fullName'
  | 'enterFullName'
  | 'email'
  | 'enterEmail'
  | 'phone'
  | 'enterPhone'
  | 'preferredPsychologist'
  | 'selectPsychologist'
  | 'service'
  | 'selectService'
  | 'preferredDate'
  | 'preferredTime'
  | 'selectTime'
  | 'morning'
  | 'afternoon'
  | 'evening'
  | 'additionalInfo'
  | 'additionalInfoPlaceholder'
  | 'requestAppointment'
  | 'submitting'
  | 'appointmentInfo'
  | 'appointmentInfoText1'
  | 'appointmentInfoText2'
  | 'needHelp'
  | 'openHours'
  | 'insurance'
  | 'insuranceText';

export type Translations = {
  [key in TranslationKey]: string;
};

export const translations: Record<string, Translations> = {
  en: {
    // Navbar
    home: 'Home',
    aboutUs: 'About Us',
    practice: 'The Practice',
    psychologists: 'Psychologists',
    partners: 'Partners',
    services: 'Services',
    contact: 'Contact',
    bookAppointment: 'Foglaljon időpontot',

    // Booking Page
    bookingTitle: 'Időpontfoglalás',
    bookingSubtitle: 'Tegye meg az első lépést a mentális egészség felé. Töltse ki az alábbi űrlapot időpontkéréshez, és hamarosan visszajelzünk a foglalás megerősítéséhez.',
    
    // Booking Form
    fullName: 'Teljes Név',
    enterFullName: 'Adja meg a teljes nevét',
    email: 'Email',
    enterEmail: 'Adja meg az email címét',
    phone: 'Telefonszám',
    enterPhone: 'Adja meg a telefonszámát',
    preferredPsychologist: 'Kiválasztott Pszichológus',
    selectPsychologist: 'Válasszon pszichológust',
    service: 'Szolgáltatás',
    selectService: 'Válasszon szolgáltatást',
    preferredDate: 'Dátum',
    preferredTime: 'Időpont',
    selectTime: 'Válasszon időpontot',
    morning: 'Délelőtt (8-12:00)',
    afternoon: 'Délután (12-4:00)',
    evening: 'Este (4-8:00)',
    additionalInfo: 'További információk',
    additionalInfoPlaceholder: 'Kérem, ossza meg velünk konkrét kérdéseit vagy problémáját',
    requestAppointment: 'Időpontkérés',
    submitting: 'Küldés...',
    
    // Sidebar sections
    appointmentInfo: 'Appointment Information',
    appointmentInfoText1: 'Initial consultations typically last 60 minutes. Follow-up sessions are usually 50 minutes.',
    appointmentInfoText2: 'We\'ll contact you within 24 business hours to confirm your appointment or suggest alternative times.',
    needHelp: 'Need Help?',
    openHours: 'Monday - Friday: 9am - 7pm\nSaturday: 10am - 4pm\nSunday: Closed',
    insurance: 'Insurance',
    insuranceText: 'We accept most major insurance plans. Please contact us to verify coverage.'
  },

  hu: {
    // Navbar
    home: 'Főoldal',
    aboutUs: 'Bemutatkozás',
    practice: 'A Rendelő',
    psychologists: 'Szakembereink',
    partners: 'Partnereink',
    services: 'Szolgáltatásaink',
    contact: 'Árak / Kapcsolat',
    bookAppointment: 'Időpontfoglalás',

    // Booking Page
    bookingTitle: 'Időpontfoglalás',
    bookingSubtitle: 'Tegye meg az első lépést a mentális egészség felé. Töltse ki az alábbi űrlapot időpontkéréshez, és hamarosan visszajelzünk a foglalás megerősítéséhez.',
    
    // Booking Form
    fullName: 'Teljes név',
    enterFullName: 'Adja meg a teljes nevét',
    email: 'Email',
    enterEmail: 'Adja meg az email címét',
    phone: 'Telefonszám',
    enterPhone: 'Adja meg a telefonszámát',
    preferredPsychologist: 'Választott pszichológus',
    selectPsychologist: 'Válasszon pszichológust',
    service: 'Szolgáltatás',
    selectService: 'Válasszon szolgáltatást',
    preferredDate: 'Kívánt dátum',
    preferredTime: 'Kívánt időpont',
    selectTime: 'Válasszon időpontot',
    morning: 'Délelőtt (08:00 - 12:00)',
    afternoon: 'Délután (12:00 - 16:00)',
    evening: 'Este (16:00 - 20:00)',
    additionalInfo: 'További információk',
    additionalInfoPlaceholder: 'Kérem, ossza meg velünk konkrét kérdéseit vagy problémáját',
    requestAppointment: 'Időpontkérés',
    submitting: 'Küldés folyamatban...',
    
    // Sidebar sections
    appointmentInfo: 'Információk',
    appointmentInfoText1: 'Munkanapokon 24 órán belül felvesszük Önnel a kapcsolatot.',
    appointmentInfoText2: 'Lemondás vagy módosítás esetén kérjük, legalább 24 órával előbb jelezzen',
    needHelp: 'Elérhetőség',
    openHours: 'Hétfő - Péntek: 8:00 - 20:00\nSzombat: 8:00 - 12:00\nVasárnap: Zárva\nBejelentkezés szükséges!',
    insurance: 'Biztosítás',
    insuranceText: 'A legtöbb nagyobb biztosító támogatja szolgáltatásainkat. Kérjük, érdeklődjön nálunk a fedezettségről.'
  }
};
