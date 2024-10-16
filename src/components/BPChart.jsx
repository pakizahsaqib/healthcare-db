import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,  // Register the category scale
  LinearScale,
  LineElement,
  PointElement,
  LineController,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
Chart.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LineController,
  Title,
  Tooltip,
  Legend
);


const BPChart = ({ bpData }) => {
  const recentData = bpData.slice(0, 6);
  const labels = recentData.map(item => `${item.month.slice(0,3)}, ${item.year}`);
  const systolicData = recentData.map(item => item.blood_pressure.systolic.value);
  const diastolicData = recentData.map(item => item.blood_pressure.diastolic.value);
 
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Systolic BP',
        data: systolicData,
        fill: false,
        borderColor: '#E66FD2',
        tension: 0.1
      },
      {
        label: 'Diastolic BP',
        data: diastolicData,
        fill: false,
        borderColor: '#7E6CAB',
        tension: 0.1
      }
    ]
  };


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      }
    }
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default BPChart;
