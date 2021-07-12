import addflight from "../img/addflight.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageAnimations,
  fade,
  photoAnimation,
  lineAnimation,
} from "../animations";
import { useScroll } from "../components/useScroll";

const Portfolio = () => {
  const [element, controls] = useScroll();
  const [element1, controls1] = useScroll();
  return (
    <StyledWork
      variants={pageAnimations}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledProject>
        <motion.h2 variants={fade}>AddFlight.com</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/portfolio/addflight">
          <StyledHide>
            <motion.img
              variants={photoAnimation}
              src={addflight}
              alt="project image"
            />
          </StyledHide>
        </Link>
      </StyledProject>
      <StyledProject>
        <motion.h2 variants={fade}>AddFlight.com</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/portfolio/addflight">
          <StyledHide>
            <motion.img
              variants={photoAnimation}
              src={addflight}
              alt="project image"
            />
          </StyledHide>
        </Link>
      </StyledProject>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

const StyledProject = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.3rem;
    border-radius: 50rem;
    background: #f54f33;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

export default Portfolio;
