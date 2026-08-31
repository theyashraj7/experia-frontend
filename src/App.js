import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Toaster } from "@/components/ui/sonner";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import LivePage from "@/pages/LivePage";
import ExpertsPage from "@/pages/ExpertsPage";
import TopicsPage from "@/pages/TopicsPage";
import QuestionsPage from "@/pages/QuestionsPage";
import TopicDetail from "@/pages/TopicDetail";
import ExpertDetail from "@/pages/ExpertDetail";
import ConversationDetail from "@/pages/ConversationDetail";
import LearningPage from "@/pages/LearningPage";
import AboutPage from "@/pages/AboutPage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import BecomeExpertPage from "@/pages/BecomeExpertPage";
import CareersPage from "@/pages/CareersPage";
import ContactPage from "@/pages/ContactPage";
import HelpCenterPage from "@/pages/HelpCenterPage";
import CommunityGuidelinesPage from "@/pages/CommunityGuidelinesPage";
import SafetyPage from "@/pages/SafetyPage";
import ContactSupportPage from "@/pages/ContactSupportPage";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import ReservationPolicyPage from "@/pages/ReservationPolicyPage";
import ExpertGuidelinesPage from "@/pages/ExpertGuidelinesPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="App">
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Login />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/live" element={<ProtectedRoute><LivePage /></ProtectedRoute>} />
              <Route path="/experts" element={<ProtectedRoute><ExpertsPage /></ProtectedRoute>} />
              <Route path="/experts/:slug" element={<ProtectedRoute><ExpertDetail /></ProtectedRoute>} />
              <Route path="/topics" element={<ProtectedRoute><TopicsPage /></ProtectedRoute>} />
              <Route path="/topic/:slug" element={<ProtectedRoute><TopicDetail /></ProtectedRoute>} />
              <Route path="/questions" element={<ProtectedRoute><QuestionsPage /></ProtectedRoute>} />
              <Route path="/conversations/:slug" element={<ProtectedRoute><ConversationDetail /></ProtectedRoute>} />
              <Route path="/learning" element={<ProtectedRoute><LearningPage /></ProtectedRoute>} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/become-an-expert" element={<BecomeExpertPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/help" element={<HelpCenterPage />} />
              <Route path="/community-guidelines" element={<CommunityGuidelinesPage />} />
              <Route path="/safety" element={<SafetyPage />} />
              <Route path="/contact-support" element={<ContactSupportPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/reservation-policy" element={<ReservationPolicyPage />} />
              <Route path="/expert-guidelines" element={<ExpertGuidelinesPage />} />
              <Route path="*" element={<Home />} />
            </Routes>
            <Toaster position="bottom-right" />
          </BrowserRouter>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
