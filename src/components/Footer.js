import styled from "styled-components";
import facebook from "../img/fb-icon.png";
import linkedin from "../img/linkedin-icon.png";
import github from "../img/git-icon.png";
import stackoverflow from "../img/stack-icon.png";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="logo">
        <code>{`<CristiDev />`}</code>
      </div>
      <StyledSocials>
        <a href="#">
          <img src={facebook}></img>
        </a>
        <a href="#">
          <img src={linkedin}></img>
        </a>
        <a href="#">
          <img src={github}></img>
        </a>
        <a href="#">
          <img src={stackoverflow}></img>
        </a>
      </StyledSocials>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem 10rem;
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
  a {
    margin-left: 2rem;
  }
`;

export default Footer;
