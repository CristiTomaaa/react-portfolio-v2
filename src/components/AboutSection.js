import home1 from "../img/aboutimg.png";
import styled from "styled-components";
import { StyledAbout, StyledDescription, StyledImage } from "../styles";
import { motion } from "framer-motion";
import { titleAnimation, fade } from "../animations";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div className="title">
          <StyledHide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>true !</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ab!
        </motion.p>
        <motion.button variants={fade}>Contact</motion.button>
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
