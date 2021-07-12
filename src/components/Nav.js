import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          <code>{`<CristiDev />`}</code>
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/portfolio" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #ffffff;
  box-shadow: 0 10px 6px -6px #cfcfcf;
  position: sticky;
  top: 0%;
  z-index: 10;

  /* &:before,
  &:after {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 15px;
    left: 10px;
    width: 50%;
    top: 80%;
    max-width: 400px;
    background: #777;
    box-shadow: 0 15px 10px #616161;
    transform: rotate(-3deg);
  }
  &:after {
    transform: rotate(3deg);
    right: 10px;
    left: auto;
  } */
  a {
    text-decoration: none;
    color: #f54f33;
    font-weight: bold;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.6rem;
    font-weight: bold;
  }
  li {
    padding-left: 6rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 2rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  background: #f54f33;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;
