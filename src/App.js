import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';
import Header from './components/Header';
import Home from './pages/Home';
import WaterChart from './components/WaterChart';
import SandChart from './components/SandChart';
import ProjectDetail from './pages/ProjectDetails';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/water" element={<WaterChart />} />
          <Route path="/sand" element={<SandChart />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
