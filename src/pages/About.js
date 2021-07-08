import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import { motion } from "framer-motion";
import { pageAnimations } from "../animations";
const About = () => {
  return (
    <motion.div
      variants={pageAnimations}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
    </motion.div>
  );
};

export default About;
