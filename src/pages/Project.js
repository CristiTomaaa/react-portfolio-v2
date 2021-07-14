import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { projectState } from "../projectState";
import { motion } from "framer-motion";
import { pageAnimations } from "../animations";

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
            <img src={project.mainImg} alt="project image" />
          </StyledHeadline>
          <StyledDescription>
            {project.awards.map((award) => (
              <Description
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyledDescription>
          <ImageDisplay>
            <img src={project.secondaryImg} alt="full project image" />
          </ImageDisplay>
        </StyledProject>
      )}
    </>
  );
};

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
    filter: drop-shadow(0px 15px 25px #858585);
  }
  @media (max-width: 1300px) {
    min-height: 60vh;
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
    margin: 2rem 2rem;
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
    border-radius: 50rem;
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
