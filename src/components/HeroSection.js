import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundImage1 from '../assets/hero-bg1.jpg';
import backgroundImage2 from '../assets/hero-bg2.jpg';
import backgroundImage3 from '../assets/hero-bg3.jpg';

const rotateBackground = keyframes`
  0% { background-image: url(${backgroundImage1}); }
  33% { background-image: url(${backgroundImage1}); }
  33.01% { background-image: url(${backgroundImage2}); }
  66% { background-image: url(${backgroundImage2}); }
  66.01% { background-image: url(${backgroundImage3}); }
  100% { background-image: url(${backgroundImage3}); }
`;

const HeroContainer = styled.section`
  animation: ${rotateBackground} 6s infinite;
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  position: relative;
`;

const HeroText = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin: 0;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin: 15px 0 0;
  line-height: 1.5;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 20px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'white' : 'rgba(255, 255, 255, 0.5)')};
  transition: background-color 0.3s ease;
`;

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [backgroundImage1, backgroundImage2, backgroundImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <HeroContainer style={{ backgroundImage: `url(${images[currentImage]})` }}>
      <HeroText>
        <HeroTitle>Visualizing Dredging Data</HeroTitle>
        <HeroSubtitle>Insights into Sand and Water Dredging</HeroSubtitle>
      </HeroText>
      <DotsContainer>
        {images.map((_, index) => (
          <Dot key={index} active={index === currentImage} />
        ))}
      </DotsContainer>
    </HeroContainer>
  );
};

export default HeroSection;
