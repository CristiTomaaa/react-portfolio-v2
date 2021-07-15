import addflight from "../img/addflight010.png";
import bgcimg from "../img/portfoliobackground.png";
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
            <div className="img-zoom">
              <img src={addflight} alt="project image" />
            </div>
          </StyledHide>
        </Link>
      </StyledProject>
      <StyledProject>
        <motion.h2 variants={fade}>AddFlight.com</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/portfolio/addflight">
          <StyledHide>
            <div className="img-zoom">
              <img src={addflight} alt="project image" />
            </div>
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
    text-align: center;
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
    border-radius: 50%;
    background: #f54f33;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 100%;
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(0px 15px 15px #e0e0e0);
    /* object-fit: fill; */
    /* overflow: show; */
  }
  @media (max-width: 1300px) {
    padding-bottom: 3rem;
    img {
      max-width: 100%;
      height: auto;
      -webkit-filter: drop-shadow(5px 5px 5px #222);
      filter: drop-shadow(0px 15px 15px #e7e7e7);
      @media (max-width: 1300px) {
      }
    }
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
  width: 100%;
  img {
    margin: 2.5rem auto;
  }
  .img-zoom {
    position: relative;
    margin: auto;
    overflow: hidden;
    width: 100%;
  }
  .img-zoom img {
    max-width: 100%;
    transition: all 0.3s;
    display: block;
    width: 100%;
    height: auto;
    transform: scale(1);
  }
  .img-zoom:hover img {
    transform: scale(1.03);
  }
`;

export default Portfolio;
