import AboutSection from "../components/sections/AboutSection";
import CallToActionSection from "../components/sections/CallToActionSection";
import SectionHeading from '../components/cssItems/SectionHeading'
import { motion } from "framer-motion"
import MissionSection from "../components/sections/MissionSection";
import VisionSection from "../components/sections/VisionSection";

export default function AboutPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SectionHeading title="About Us" prevPage="Home" prevUrl="/" currPage="About" />
            <AboutSection />
            <MissionSection />
            <VisionSection />
            <CallToActionSection />
            {/* <Counter /> */}
        </motion.div>
    )
}
