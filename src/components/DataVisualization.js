import React from 'react';
import styled from 'styled-components';
import SandChart from './SandChart';
import WaterChart from './WaterChart';

const VisualizationContainer = styled.section`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  gap: 40px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
  font-family: 'Merriweather', serif;
`;

const DataVisualization = () => (
  <VisualizationContainer>
    <Heading>In Progress</Heading>
    <SandChart />
    <WaterChart />
  </VisualizationContainer>
);

export default DataVisualization;