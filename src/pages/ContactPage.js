import SectionHeading from '../components/cssItems/SectionHeading'
import ContactSection from '../components/sections/ContactSection'
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SectionHeading title="Contact Us" prevPage="Home" prevUrl="/" currPage="Contact" />
      <ContactSection />
    </motion.div>
  )
}
