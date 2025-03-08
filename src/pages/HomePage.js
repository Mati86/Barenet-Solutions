import HeroSection from "../components/sections/HeroSection"
import ServicesSection from "../components/sections/ServicesSection"
import CallToActionSection from "../components/sections/CallToActionSection"
import AboutSection from "../components/sections/AboutSection"
import ChooseUsSection from "../components/sections/ChooseUsSection"
import ContactSection from "../components/sections/ContactSection"
import { motion } from "framer-motion"

export default function HomePage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <HeroSection />
            <ServicesSection />
            <CallToActionSection />
            <AboutSection />
            <ChooseUsSection />
            <ContactSection />

        </motion.div>
    );
}
