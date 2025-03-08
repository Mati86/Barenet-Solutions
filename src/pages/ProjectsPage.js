import ProjectsSection from "../components/sections/ProjectsSection";
import SectionHeading from '../components/cssItems/SectionHeading'
import { motion } from "framer-motion"

export default function ProjectsPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SectionHeading title="Our Projects" prevPage="Home" prevUrl="/" currPage="Projects" />
            <ProjectsSection />
        </motion.div>
    )
}
