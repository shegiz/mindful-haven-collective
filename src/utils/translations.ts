
type TranslationKey = 
  | 'home' 
  | 'aboutUs' 
  | 'practice' 
  | 'psychologists' 
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
  | 'appointmentInfoText3'
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
    services: 'Services',
    contact: 'Contact',
    bookAppointment: 'Book Appointment',

    // Booking Page
    bookingTitle: 'Book an Appointment',
    bookingSubtitle: 'Take the first step towards mental wellness. Fill out the form below to request an appointment, and we\'ll get back to you to confirm your session.',
    
    // Booking Form
    fullName: 'Full Name',
    enterFullName: 'Enter your full name',
    email: 'Email',
    enterEmail: 'Enter your email address',
    phone: 'Phone Number',
    enterPhone: 'Enter your phone number',
    preferredPsychologist: 'Preferred Psychologist',
    selectPsychologist: 'Select a psychologist',
    service: 'Service',
    selectService: 'Select a service',
    preferredDate: 'Preferred Date',
    preferredTime: 'Preferred Time',
    selectTime: 'Select a time',
    morning: 'Morning (9am - 12pm)',
    afternoon: 'Afternoon (12pm - 4pm)',
    evening: 'Evening (4pm - 7pm)',
    additionalInfo: 'Additional Information',
    additionalInfoPlaceholder: 'Please share any specific concerns or questions you have',
    requestAppointment: 'Request Appointment',
    submitting: 'Submitting...',
    
    // Sidebar sections
    appointmentInfo: 'Appointment Information',
    appointmentInfoText1: 'Initial consultations typically last 60 minutes. Follow-up sessions are usually 50 minutes.',
    appointmentInfoText2: 'We\'ll contact you within 24 business hours to confirm your appointment or suggest alternative times.',
    appointmentInfoText3: 'If you need to cancel or reschedule, please provide at least 24 hours\' notice.',
    needHelp: 'Need Help?',
    openHours: 'Monday - Friday: 9am - 7pm\nSaturday: 10am - 4pm\nSunday: Closed',
    insurance: 'Insurance',
    insuranceText: 'We accept most major insurance plans. Please have your insurance information ready when we contact you to confirm your appointment, and we\'ll verify your benefits.'
  },

  hu: {
    // Navbar
    home: 'Főoldal',
    aboutUs: 'Bemutatkozás',
    //practice: 'A Rendelő',
    psychologists: 'Szakemberek',
    services: 'Szolgáltatások',
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
    morning: 'Délelőtt (9:00 - 12:00)',
    afternoon: 'Délután (12:00 - 16:00)',
    evening: 'Este (16:00 - 19:00)',
    additionalInfo: 'További információk',
    additionalInfoPlaceholder: 'Kérem, ossza meg velünk konkrét kérdéseit vagy problémáját',
    requestAppointment: 'Időpontkérés',
    submitting: 'Küldés folyamatban...',
    
    // Sidebar sections
    appointmentInfo: 'Információk a foglalásról',
    appointmentInfoText1: 'Az első konzultáció általában 60 percig tart. A követő alkalmak 50 percesek.',
    appointmentInfoText2: 'Munkanap 24 órán belül felvesszük Önnel a kapcsolatot a foglalás megerősítéséhez vagy alternatív időpontok ajánlásához.',
    appointmentInfoText3: 'Lemondás vagy átfoglalás esetén kérjük, legalább 24 órával előbb jelezzen.',
    needHelp: 'Segítségre van szüksége?',
    openHours: 'Hétfő - Péntek: 9:00 - 19:00\nSzombat: 10:00 - 16:00\nVasárnap: Zárva',
    insurance: 'Egészségbiztosítás',
    insuranceText: 'A legtöbb nagyobb biztosítót elfogadjuk. Kérjük, hogy a foglalás megerősítésekor készítse elő biztosítási adatait, hogy ellenőrizhessük a fedezetet.'
  }
};
