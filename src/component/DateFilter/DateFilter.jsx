import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DateFilter.css';

export default function DateFilter({ setSales }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    if (startDate && endDate) {

      axios.get(`http://localhost:3000/sales?start_date=${startDate}&end_date=${endDate}`)
      .then(response => {

        let data = response.data.filter( d => {
          const saleDate = new Date(d.date);
          return saleDate >= new Date(startDate) && saleDate <= new Date(endDate);
        });

        setSales(data);
        console.log(data);
      })
      .catch(error => console.error('Error fetching data:', error));

    }
  }, [startDate, endDate]);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <nav>
      <h3>Analitik Penjualan</h3>
      <div className="periode">
        <input type="date" name="start_date" id="start_date" onChange={handleStartDateChange} />
        <span> s/d </span>
        <input type="date" name="end_date" id="end_date" onChange={handleEndDateChange} />
      </div>
    </nav>
  );
}
