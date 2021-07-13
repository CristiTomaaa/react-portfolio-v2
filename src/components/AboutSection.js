import home1 from "../img/aboutimg.png";
import styled from "styled-components";
import { StyledAbout, StyledDescription, StyledImage } from "../styles";
import { motion } from "framer-motion";
import { titleAnimation, fade } from "../animations";
import ParticleBackground from "./ParticleBackground";

const AboutSection = () => {
  return (
    <StyledAbout>
      <ParticleBackground />
      <StyledDescription>
        <motion.div className="title">
          <StyledHide>
            <motion.h2 variants={titleAnimation}>Do you know </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              how many <span>ATOMS</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              are in the universe ?
            </motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          An estimated five trillion hydrogen atoms can fit on the head of a
          pin. Make sure your website isn't just another atom in the world wide
          web !<br /> I am a <span>Front-End Web Developer</span> passionate
          about creating interactive applications and experiences.
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
