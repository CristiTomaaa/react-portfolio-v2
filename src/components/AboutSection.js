import home1 from "../img/aboutimg.png";
import styled from "styled-components";
import { StyledAbout, StyledDescription, StyledImage } from "../styles";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div className="title">
          <StyledHide>
            <motion.h2>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>true !</motion.h2>
          </StyledHide>
        </motion.div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ab!
        </p>
        <button>Contact</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt=" big red circle" />
      </StyledImage>
    </StyledAbout>
  );
};

const StyledHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
