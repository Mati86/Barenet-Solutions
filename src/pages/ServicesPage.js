import ServicesSection from "../components/sections/ServicesSection";
import SectionHeading from '../components/cssItems/SectionHeading'
import ChooseUsSection from "../components/sections/ChooseUsSection";
import {motion} from "framer-motion"

export default function ServicesPage() {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}        
        >
            <SectionHeading title="Our Services" prevPage="Home" prevUrl="/" currPage="Services" />
            <ServicesSection displayHeading=""/>
            <ChooseUsSection />
        </motion.div>
    )
}
