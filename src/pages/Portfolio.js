import addflight from "../img/addflight.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimations } from "../animations";

const Portfolio = () => {
  return (
    <StyledWork
      variants={pageAnimations}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <StyledProject>
        <h2>AddFlight.com</h2>
        <div className="line"></div>
        <Link to="/portfolio/addflight">
          <img src={addflight} alt="project image" />
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
`;

export default Portfolio;
