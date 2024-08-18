import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import styled from 'styled-components';


const ChartSection = styled.div`
  margin-top: 20px;
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ChartTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const DredgingCharts = ({ sandData, waterData }) => {
  return (
    <>
      <ChartSection>
        <ChartTitle>Sand Dredging Overview</ChartTitle>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={sandData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {sandData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartSection>

      <ChartSection>
        <ChartTitle>Water Dredging Overview</ChartTitle>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={waterData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
              outerRadius={100}
              fill="#82ca9d"
              dataKey="value"
            >
              {waterData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartSection>

      <ChartSection>
        <ChartTitle>Sand and Water Comparison</ChartTitle>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={sandData.map((sand, index) => ({
              name: sand.name,
              Sand: sand.value,
              Water: waterData[index] ? waterData[index].value : 0,
            }))}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Sand" fill="#8884d8" />
            <Bar dataKey="Water" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </ChartSection>
    </>
  );
};

export default DredgingCharts;