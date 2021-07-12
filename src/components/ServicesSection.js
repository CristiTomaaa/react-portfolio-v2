import teamwork from "../img/money.svg";
import home1 from "../img/aboutimg.png";

import { StyledAbout, StyledDescription, StyledImage } from "../styles";
import styled from "styled-components";
import { fade, scrollReveal } from "../animations";

const ServicesSection = () => {
  return (
    <StyledServices>
      <StyledImage>
        <img src={home1} alt="running code" />
      </StyledImage>
      <StyledDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="teamwork " />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="teamwork " />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="teamwork " />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="teamwork " />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1300px) {
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const StyledCard = styled.div`
  flex-basis: 20rem;
  @media (max-width: 1300px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      margin-left: 1rem;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
