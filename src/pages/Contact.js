import { motion } from "framer-motion";
import { pageAnimations, titleAnimation } from "../animations";
import styled from "styled-components";
import ContactSection from "../components/ContactSection";
// import facebook from "../img/facebook-f-brands.svg";
// import linkedin from "../img/linkedin-in-brands.svg";
// import github from "../img/github-brands.svg";
// import stackoverflow from "../img/stack-overflow-brands.svg";
import ScrollTop from "../components/ScrollTop";

const Contact = () => {
  return (
    <StyledContact
      variants={pageAnimations}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledForm>
        <ContactSection />
      </StyledForm>
      <StyledTitle>
        <StyledHide>
          <motion.h2 variants={titleAnimation}>
            Ready to make something special? Me too!
          </motion.h2>
          <p>Cristi Toma</p>
          <p>hello@cristidev.co.uk</p>
          <p>(+44) 07397 561 016</p>
        </StyledHide>
        {/* <StyledSocials>
          <a href="https://www.facebook.com/cristi.toma/">
            <img
              className="social-icon"
              alt="facebook logo"
              src={facebook}
            ></img>
          </a>
          <a href="https://www.linkedin.com/in/cristi-toma-b5791217a/">
            <img
              className="social-icon"
              alt="linkedin logo"
              src={linkedin}
            ></img>
          </a>
          <a href="https://github.com/CristiTomaaa">
            <img className="social-icon" alt="github logo" src={github}></img>
          </a>
          <a href="https://stackoverflow.com/users/14477897/cristit">
            <img
              className="social-icon"
              alt="stack logo"
              src={stackoverflow}
            ></img>
          </a>
        </StyledSocials> */}
      </StyledTitle>
      <ScrollTop />
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  padding: 5rem 10rem;
  color: black;
  min-height: 90vh;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    padding: 0rem 1rem;
  }
`;

const StyledTitle = styled.div`
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  display: flex;
  margin: 7rem 3rem;
  color: black;
  flex: 1;
`;

const StyledForm = styled.div`
  display: flex;
  flex: 1;
`;

const StyledHide = styled.div`
  overflow: hidden;
  p {
    padding: 1rem;
  }
  h2 {
    font-size: 3rem;
    margin-bottom: 4rem;
  }
`;

// const StyledSocials = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   margin: 5rem;
//   img {
//     box-shadow: 0px 0px 5px #dadada;
//   }
//   .social-icon {
//     margin: 2rem;
//     filter: invert(54%) sepia(76%) saturate(6225%) hue-rotate(345deg)
//       brightness(108%) contrast(92%);
//     width: 50px;
//     height: 50px;
//     -webkit-transform: translateZ(0);
//     transform: translateZ(0);
//     box-shadow: 0 0 1px rgba(0, 0, 0, 0);
//     -webkit-backface-visibility: hidden;
//     backface-visibility: hidden;
//     -moz-osx-font-smoothing: grayscale;
//     -webkit-transition-duration: 0.3s;
//     transition-duration: 0.3s;
//     -webkit-transition-property: transform;
//     transition-property: transform;
//   }
//   .social-icon:hover {
//     -webkit-transform: scale(1.1);
//     transform: scale(1.3);
//   }
//   @media (max-width: 1300px) {
//     /* display: block; */
//     display: flex;
//     flex-wrap: wrap;
//     flex-direction: row;
//     margin-bottom: 3rem;
//     .social-icon {
//       margin: 1rem 1rem;
//       width: 40px;
//       height: 40px;
//     }
//   }
// `;

export default Contact;
