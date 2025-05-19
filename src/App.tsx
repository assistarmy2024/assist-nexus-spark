
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ChildJourney from "./pages/ChildJourney";
import ElderlyJourney from "./pages/ElderlyJourney";
import HomemakerJourney from "./pages/HomemakerJourney";
import NotFound from "./pages/NotFound";

// Create placeholder components for new journeys
const StudentJourney = () => <div className="p-8 text-center">StudyBuddy journey coming soon...</div>;
const HealthcareJourney = () => <div className="p-8 text-center">MedicoMate journey coming soon...</div>;
const BusinessJourney = () => <div className="p-8 text-center">BizAdvisor journey coming soon...</div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/child" element={<ChildJourney />} />
          <Route path="/elderly" element={<ElderlyJourney />} />
          <Route path="/homemaker" element={<HomemakerJourney />} />
          <Route path="/student" element={<StudentJourney />} />
          <Route path="/healthcare" element={<HealthcareJourney />} />
          <Route path="/business" element={<BusinessJourney />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
