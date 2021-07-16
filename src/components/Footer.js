import styled from "styled-components";
import facebook from "../img/facebook-f-brands.svg";
import linkedin from "../img/linkedin-in-brands.svg";
import github from "../img/github-brands.svg";
import stackoverflow from "../img/stack-overflow-brands.svg";
import banner from "../img/footerwave.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="logo">
        <code>{`<CristiDev />`}</code>
      </div>
      <StyledSocials>
        <p>You can find me on :</p>
        <a
          href="https://www.facebook.com/cristi.toma/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social-icon" alt="facebook logo" src={facebook}></img>
        </a>
        <a
          href="https://www.linkedin.com/in/cristi-toma-b5791217a/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social-icon" alt="linkedin logo" src={linkedin}></img>
        </a>
        <a
          href="https://github.com/CristiTomaaa"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social-icon" alt="github logo" src={github}></img>
        </a>
        <a
          href="https://stackoverflow.com/users/14477897/cristit"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="social-icon"
            alt="stack logo"
            src={stackoverflow}
          ></img>
        </a>
      </StyledSocials>
      <Banner>
        <img src={banner} alt="" />
      </Banner>
    </StyledFooter>
  );
};

const Banner = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 6rem;
  z-index: 100;
  @media (max-width: 1300px) {
    display: none;
  }
`;

const StyledFooter = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 0rem 10rem;
  align-items: center;
  background-color: #f54f33;
  /* box-shadow: 0 -10px 16px -5px #bbbbbb; */
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    padding: 0rem 3rem;
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

    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }
  .social-icon:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.3);
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
