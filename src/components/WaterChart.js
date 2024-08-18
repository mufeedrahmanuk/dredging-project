import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, BarElement } from 'chart.js';
import styled from 'styled-components';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const MainChartContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%;
  height: 400px;
`;

const MiniChartsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;

const MiniChartContainer = styled.div`
  flex: 1;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 250px;
`;

const TheoryContainer = styled.div`
  padding: 20px;
  background-color: #eaf0f6;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const TheoryText = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const WaterChart = () => {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [
      {
        label: 'Water Dredged (cubic meters)',
        data: [500, 800, 300, 700, 1000, 960, 710, 650],
        fill: false,
        backgroundColor: '#003366',
        borderColor: '#003366',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
      title: {
        display: true,
        text: 'Water Dredging Over Time',
        font: {
          size: 18,
        },
      },
    },
  };

  const completionData = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        label: 'Project Status',
        data: [60, 40],
        backgroundColor: ['#28a745', '#dc3545'], 
      },
    ],
  };

  const completionOptions = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Project Completion Status',
        font: {
          size: 16,
        },
      },
    },
  };


  const monthlyProgressData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Progress (%)',
        data: [10, 20, 15, 25, 30],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: '#36A2EB',
        borderWidth: 1,
      },
    ],
  };

  const monthlyProgressOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
      title: {
        display: true,
        text: 'Monthly Progress (%)',
        font: {
          size: 16,
        },
      },
    },
  };

  return (
    <>
      
      <MainChartContainer>
        <Line data={data} options={options} />
      </MainChartContainer>
      <MiniChartsContainer>
        <MiniChartContainer>
          <Bar data={completionData} options={completionOptions} />
        </MiniChartContainer>
        <MiniChartContainer>
          <Bar data={monthlyProgressData} options={monthlyProgressOptions} />
        </MiniChartContainer>
      </MiniChartsContainer>
      <TheoryContainer>
        <TheoryText>
          <strong>Water Dredging Analysis:</strong> This chart provides a detailed view of water dredged over time. The line chart displays the total cubic meters of water dredged each month, allowing for trend analysis and performance tracking. The completion status chart shows the proportion of work completed versus remaining, providing insight into project progress. Additionally, the monthly progress bar chart illustrates the percentage of progress made each month.
        </TheoryText>
      </TheoryContainer>
    </>
  );
};

export default WaterChart;
