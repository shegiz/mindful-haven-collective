
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Practice from "./pages/Practice";
import Psychologists from "./pages/Psychologists";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/rolunk" element={<AboutUs />} />
            <Route path="/rendelo" element={<Practice />} />
            <Route path="/pszichologusok" element={<Psychologists />} />
            <Route path="/szolgaltatasok" element={<Services />} />
            <Route path="/idopontfoglalas" element={<Booking />} />
            <Route path="/kapcsolat" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
