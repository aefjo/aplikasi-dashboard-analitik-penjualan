// LineChartComponent.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components with ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChartComponent = ( { sales }) => {

  let labels = sales.map(sale => sale.date);
  let datas = sales.map(sale => sale.sales);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: datas,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.4)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Penjualan Harian',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChartComponent;
