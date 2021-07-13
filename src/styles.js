import { motion } from "framer-motion";
import styled from "styled-components";
export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0rem;
  color: black;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const StyledDescription = styled.div`
  padding: 5rem 10rem;
  flex: 1;
  /* padding-right: 5rem; */
  h2 {
    font-weight: lighter;
  }
  p {
    line-height: 2.5rem;
  }
  @media (max-width: 1300px) {
    padding: 0rem;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const StyledImage = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 30rem;
    object-fit: contain;
    display: flex;
  }
`;
