import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import styled from 'styled-components';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
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

const SandChart = () => {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [
      {
        label: 'Sand Dredged (tons)',
        data: [300, 450, 120, 600, 750, 1000, 950, 350],
        backgroundColor: 'rgba(255, 204, 0, 0.6)',
        borderColor: '#FFCC00',
        borderWidth: 1,
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
        text: 'Sand Dredging Over Time',
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
        data: [70, 30],
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
        data: [15, 25, 20, 30, 40],
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
        <Bar data={data} options={options} />
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
          <strong>Sand Dredging Analysis:</strong> The Sand Dredging chart displays the total volume of sand dredged each month. The bar chart provides an overview of the quantity in tons for each month, illustrating trends and fluctuations in dredging activity. Alongside, the project completion status chart represents the proportion of work completed versus remaining, offering insight into the progress of the dredging project. The monthly progress bar chart shows the percentage of progress made each month, helping track how the project is advancing towards its goals.
        </TheoryText>
      </TheoryContainer>
    </>
  );
};

export default SandChart;
