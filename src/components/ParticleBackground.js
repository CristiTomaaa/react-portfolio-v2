import Particles from "react-particles-js";
import particleConfig from "../particleConfig";
import styled from "styled-components";

const ParticleBackground = () => {
  return (
    <ParticleHeader>
      <Particles params={particleConfig}></Particles>
    </ParticleHeader>
  );
};

const ParticleHeader = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: -1;
  margin-left: 0rem;

  @media (max-width: 1300px) {
    display: none;
  }
`;

export default ParticleBackground;
