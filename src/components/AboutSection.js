import home1 from "../img/aboutimg.png";
import banner from "../img/wave2.svg";
import banner2 from "../img/wave1.svg";
import styled from "styled-components";
import { StyledAbout, StyledDescription, StyledImage } from "../styles";
import { motion } from "framer-motion";
import { titleAnimation, fade } from "../animations";
import ParticleBackground from "./ParticleBackground";
import { Link } from "react-router-dom";

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
        <Link to="/contact">
          <motion.button variants={fade}>Contact</motion.button>
        </Link>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt=" big red circle" />
      </StyledImage>
      <Banner>
        <img src={banner} alt="" />
      </Banner>
      <Banner2>
        <img src={banner2} alt="" />
      </Banner2>
    </StyledAbout>
  );
};

const StyledHide = styled.div`
  overflow: hidden;
`;

const Banner = styled.div`
  position: absolute;
  top: 78vh;
  left: 0;
  right: 0;
  img {
    width: 100%;
  }
  width: 100%;
  z-index: 5;
  @media (max-width: 1300px) {
    display: none;
  }
`;
const Banner2 = styled.div`
  position: absolute;
  top: 90vh;
  left: 0;
  right: 0;
  img {
    width: 100%;
  }
  width: 100%;
  z-index: 5;
  @media (max-width: 1300px) {
    display: none;
  }
`;

export default AboutSection;
