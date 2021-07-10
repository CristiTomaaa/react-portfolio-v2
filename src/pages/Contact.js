import { motion } from "framer-motion";
import { pageAnimations, titleAnimation } from "../animations";
import styled from "styled-components";

const Contact = () => {
  return (
    <StyledContact
      variants={pageAnimations}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledTitle>
        <StyledHide>
          <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
        </StyledHide>
      </StyledTitle>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  color: black;
  min-height: 90vh;
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

export default Contact;
