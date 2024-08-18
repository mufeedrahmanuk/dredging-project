import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const Container = styled.div`
  padding: 40px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
  font-family: 'Merriweather', serif;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px; 
`;

const ProjectList = ({ projects }) => (
  <Container>
    <Heading>Projects</Heading>
    <ProjectContainer>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ProjectContainer>
  </Container>
);

export default ProjectList;
