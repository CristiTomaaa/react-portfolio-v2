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
        <p>Look mom, I am famous !</p>
        <a href="https://www.facebook.com/cristi.toma/">
          <img className="social-icon" src={facebook}></img>
        </a>
        <a href="https://www.linkedin.com/in/cristi-toma-b5791217a/">
          <img className="social-icon" src={linkedin}></img>
        </a>
        <a href="https://github.com/CristiTomaaa">
          <img className="social-icon" src={github}></img>
        </a>
        <a href="https://stackoverflow.com/users/14477897/cristit">
          <img className="social-icon" src={stackoverflow}></img>
        </a>
      </StyledSocials>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem 10rem;
  align-items: center;
  background-color: #f54f33;
  box-shadow: 0 -10px 6px -6px #c2c2c2;
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
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
    @media (max-width: 1300px) {
      margin-top: 2rem;
      display: inline-block;
    }
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
  @media (max-width: 1300px) {
    display: block;
    margin-bottom: 3rem;
    .social-icon {
      margin: 0rem 1rem;
    }
  }
`;

export default Footer;
