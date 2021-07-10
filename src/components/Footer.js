import styled from "styled-components";
import facebook from "../img/facebook-f-brands.svg";
import linkedin from "../img/linkedin-in-brands.svg";
import github from "../img/github-brands.svg";
import stackoverflow from "../img/stack-overflow-brands.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <StyledFooter layout>
      <div className="logo">
        <code>{`<CristiDev />`}</code>
      </div>
      <StyledSocials>
        <p>You can find me on:</p>
        <a href="#">
          <img className="social-icon" src={facebook}></img>
        </a>
        <a href="#">
          <img className="social-icon" src={linkedin}></img>
        </a>
        <a href="#">
          <img className="social-icon" src={github}></img>
        </a>
        <a href="#">
          <img className="social-icon" src={stackoverflow}></img>
        </a>
      </StyledSocials>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0rem 10rem;
  align-items: center;
  background-color: #f54f33;
  box-shadow: 0 -10px 6px -6px #c2c2c2;
  ul {
    display: flex;
    list-style: none;
    a {
      text-decoration: none;
      margin: 0rem 2rem;
      color: white;
    }
  }
  .logo {
    color: white;
    font-size: 1.6rem;
    font-weight: lighter;
  }
  p {
    color: white;
  }
`;

const StyledSocials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  .social-icon {
    margin-left: 2rem;
    filter: invert(88%) sepia(100%) saturate(2%) hue-rotate(52deg)
      brightness(110%) contrast(101%);
    width: 35px;
    height: 35px;
  }
`;

export default Footer;
