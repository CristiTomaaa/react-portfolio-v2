import { motion } from "framer-motion";
import { pageAnimations } from "../animations";

const Contact = () => {
  return (
    <motion.div
      variants={pageAnimations}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Contact</h1>
    </motion.div>
  );
};

export default Contact;
