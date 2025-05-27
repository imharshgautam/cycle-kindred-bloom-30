
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PeriodTracker from "./pages/PeriodTracker";
import Educational from "./pages/Educational";
import Store from "./pages/Store";
import Consultation from "./pages/Consultation";
import FloatingChatbot from "./components/chat/FloatingChatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tracker" element={<PeriodTracker />} />
          <Route path="/learn" element={<Educational />} />
          <Route path="/shop" element={<Store />} />
          <Route path="/consult" element={<Consultation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingChatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
