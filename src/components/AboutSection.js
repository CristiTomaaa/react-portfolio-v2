import home1 from "../img/aboutimg.png";
import styled from "styled-components";
import { StyledAbout, StyledDescription, StyledImage } from "../styles";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true !</h2>
          </StyledHide>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ab!
        </p>
        <button>Contact</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt=" big red circle" />
      </StyledImage>
    </StyledAbout>
  );
};

const StyledHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
