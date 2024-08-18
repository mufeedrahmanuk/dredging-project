import React from 'react';
import ProjectList from '../components/ProjectList';
import projects from '../data/project';
import HeroSection from '../components/HeroSection';
import DataVisualization from '../components/DataVisualization';
import Footer from '../components/Footer';


const Home = () => (
  <>
    <HeroSection />
    <ProjectList projects={projects} />
    <DataVisualization />
    <Footer />
  </>
);

export default Home;
