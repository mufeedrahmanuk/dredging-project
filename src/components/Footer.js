import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Boskalis Data Visualization. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;