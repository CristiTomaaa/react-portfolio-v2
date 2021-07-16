import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { projectState } from "../projectState";
import { motion } from "framer-motion";
import { pageAnimations } from "../animations";
import ScrollTop from "../components/ScrollTop";

const Project = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects, setProjects] = useState(projectState);
  const [project, setProject] = useState(null);

  //useEffect
  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url
    );
    setProject(currentProject[0]);
  }, [projects, url]);

  return (
    <>
      {project && (
        <StyledProject
          variants={pageAnimations}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <StyledHeadline>
            <h2>{project.title}</h2>
            <img src={project.mainImg} alt="project" />
          </StyledHeadline>
          <StyledDescription>
            {project.awards.map((award) => (
              <Description
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
            <StyledButton>
              <a href={project.link} target="_blank" rel="noreferrer">
                VIEW ONLINE
              </a>
            </StyledButton>
          </StyledDescription>
          <ImageDisplay>
            <img src={project.secondaryImg} alt="full project" />
          </ImageDisplay>
          <ScrollTop />
        </StyledProject>
      )}
    </>
  );
};

const StyledButton = styled.div`
  font-weight: bold;
  cursor: pointer;
  padding: 1rem 4rem;
  background-color: #f54f33;
  color: #ffffff;
  transition: all 0.3s ease;
  border-radius: 4rem;
  font-family: "Inter", sans-serif;
  text-align: center;
  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    background-color: #f54f33;
    color: white;
  }
  @media (max-width: 1300px) {
    margin: 0rem 5rem 4rem 5rem;
  }
`;

const StyledProject = styled(motion.div)`
  color: black;
`;

const StyledHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 100%;
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(0px 15px 15px #e7e7e7);
  }
  @media (max-width: 1300px) {
    min-height: 30vh;
  }
`;

const StyledDescription = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300px) {
    display: block;
    margin: 2rem 0rem;
  }
  h3 {
    color: black;
  }
`;

const StyledContent = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    height: 0.3rem;
    border-radius: 50%;
    background: #f54f33;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    width: 100vh;
    object-fit: cover;
    margin-bottom: 5rem;
    @media (max-width: 1300px) {
      max-width: 100%;
    }
  }
`;

//Awards component

const Description = ({ title, description }) => {
  return (
    <StyledContent>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledContent>
  );
};

export default Project;
