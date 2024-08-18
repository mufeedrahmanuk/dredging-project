import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeInSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CardContainer = styled.div`
  width: 300px;
  margin: 20px;
  cursor: pointer;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: max-height 0.5s ease-in-out, box-shadow 0.3s ease-in-out;
  max-height: ${({ isExpanded }) => (isExpanded ? '500px' : '300px')};
  padding-bottom: ${({ isExpanded }) => (isExpanded ? '20px' : '0')};
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  backface-visibility: hidden;
`;

const Title = styled.h3`
  margin: 15px 0 5px;
  font-size: 1.5em;
  color: #333;
`;

const Content = styled.div`
  padding: 10px 20px;
  opacity: ${({ isExpanded }) => (isExpanded ? 1 : 0)};
  animation: ${({ isExpanded }) => (isExpanded ? fadeInSlideUp : 'none')} 0.5s ease-in-out;
`;

const Description = styled.p`
  margin-bottom: 10px;
  color: #666;
  font-size: 0.9em;
  line-height: 1.4;
`;

const ViewDetailsButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 0.9em;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <CardContainer onClick={handleToggle}>
      <Card isExpanded={isExpanded}>
        <Image src={`/${project.image}`} alt={project.name} /> 
        <Title>{project.name}</Title>
        {isExpanded && (
          <Content isExpanded={isExpanded}>
            <Description>{project.description}</Description>
            <ViewDetailsButton to={`/project/${project.id}`}>View Details</ViewDetailsButton>
          </Content>
        )}
      </Card>
    </CardContainer>
  );
};

export default ProjectCard;
