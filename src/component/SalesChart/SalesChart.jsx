import React from 'react';
import './SalesChart.css';
import BarChartComponent from './ChartJs/BarChartComponent';
import LineChartComponent from './ChartJs/LineChartComponent';

export default function SalesChart({ sales }) {
  return (
    <div className='container-chart'>
        <div className="box"><LineChartComponent sales={sales} /></div>
        <div className="box"><BarChartComponent sales={sales} /></div>
    </div>
  )
}
