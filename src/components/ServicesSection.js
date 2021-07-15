import servicesimg from "../img/servicesimg.png";
import webdesign from "../img/web-design.svg";
import webdevelopment from "../img/data.svg";
import ecommerce from "../img/online-shopping.svg";
import cms from "../img/cms.svg";

import { StyledAbout, StyledDescription } from "../styles";
import styled from "styled-components";
const ServicesSection = () => {
  return (
    <StyledServices>
      <StyledDescription>
        <h2>
          High <span>quality</span> services.
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={webdesign} alt="teamwork " />
              <h3>Web Design</h3>
            </div>
            <p>
              Web design is vital when developing a digital product since it
              ensures usability, good user experience, and great aesthetics.
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={webdevelopment} alt="teamwork " />
              <h3>Web Development</h3>
            </div>
            <p>
              Web development is the work involved in developing a Web site for
              the Internet following the latest trends in web development.
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={ecommerce} alt="teamwork " />
              <h3>Ecommerce</h3>
            </div>
            <p>
              I can produce Ecommerce solutions that drive sales and generate
              leads. My websites are designed to maximise conversion rate on
              desktop or mobile devices.
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={cms} alt="teamwork " />
              <h3>CMS</h3>
            </div>
            <p>
              We can provide you with a Content Management System (CMS) so that
              once the development process is finished you can add or make small
              adjustments via a user friendly control panel.
            </p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledServicesImage>
        <img src={servicesimg} alt="running code" />
      </StyledServicesImage>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  /* display: flex; */
  flex-wrap: wrap;
  justify-content: space-between;

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

const StyledServicesImage = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 30rem;
    object-fit: contain;
    display: flex;
    @media (max-width: 1300px) {
      width: 75%;
      margin: 0 auto;
    }
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 24rem;
  @media (max-width: 1300px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  p {
    font-size: 1.2rem;
  }
  .icon {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
    }
    h3 {
      margin-left: 1rem;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
