import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import projects from '../data/project';
import DredgingCharts from '../components/DredgingChart';

const DetailContainer = styled.div`
  padding: 50px;
  max-width: 1200px;
  margin: 0 auto;
  background: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ReadMoreButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project = projects.find(p => p.id === projectId);

  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) return <p>Project not found</p>;

  const projectData = {
    1: {
      sandData: [
        { name: 'Excavated Sand', value: 400 },
        { name: 'Deposited Sand', value: 350 },
        { name: 'Remaining Sand', value: 150 },
        { name: 'Transported Sand', value: 100 },
      ],
      waterData: [
        { name: 'Cleaned Water', value: 500 },
        { name: 'Filtered Water', value: 300 },
        { name: 'Used Water', value: 200 },
      ],
    },
    2: {
      sandData: [
        { name: 'Excavated Sand', value: 600 },
        { name: 'Deposited Sand', value: 400 },
        { name: 'Remaining Sand', value: 100 },
        { name: 'Transported Sand', value: 200 },
      ],
      waterData: [
        { name: 'Cleaned Water', value: 400 },
        { name: 'Filtered Water', value: 350 },
        { name: 'Used Water', value: 150 },
      ],
    },
    3: {
      sandData: [
        { name: 'Excavated Sand', value: 500 },
        { name: 'Deposited Sand', value: 300 },
        { name: 'Remaining Sand', value: 200 },
        { name: 'Transported Sand', value: 150 },
      ],
      waterData: [
        { name: 'Cleaned Water', value: 450 },
        { name: 'Filtered Water', value: 400 },
        { name: 'Used Water', value: 250 },
      ],
    },
  };

  const { sandData, waterData } = projectData[projectId];

  return (
    <DetailContainer>
      <ProjectTitle>{project.name}</ProjectTitle>
      <ProjectImage src={`/images/${project.detailImage}`} alt={project.name} />
      <ProjectDescription>
        {showMore ? project.details : `${project.details.substring(0, 200)}...`}
      </ProjectDescription>
      <ReadMoreButton onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Read Less' : 'Read More'}
      </ReadMoreButton>
      <DredgingCharts sandData={sandData} waterData={waterData} />
    </DetailContainer>
  );
};

export default ProjectDetail;
