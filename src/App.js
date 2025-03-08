import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import { Routes, Route, useLocation  } from "react-router-dom";
import HeaderSection from "./components/sections/HeaderSection";
import FooterSection from "./components/sections/FooterSection";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ScrollToTopSection from "./components/sections/ScrollToTopSection";
import {AnimatePresence} from "framer-motion"
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

function App() {
  const location = useLocation();
  return (
        <AnimatePresence>
          <ScrollToTopSection />
          <HeaderSection />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailsPage />} />
          </Routes>
          <FooterSection />
        </AnimatePresence>
  );
}

export default App;
