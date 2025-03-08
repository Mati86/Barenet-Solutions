import { useParams } from "react-router";
import { motion } from "framer-motion"
import ProjectDetailsSection from "../components/sections/ProjectDetailsSection";

export default function ProjectDetailsPage() {
    let { id } = useParams();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <ProjectDetailsSection id={id} />
        </motion.div>
    )
}
