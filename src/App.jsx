import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';

import DateFilter from "./component/DateFilter/DateFilter";
import Statistics from "./component/Statistics/Statistics";
import SalesChart from './component/SalesChart/SalesChart';
import SearchBar from './component/SearchBar/SearchBar';
import SalesTable from './component/SalesTable/SalesTable';

function App() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3000/sales')
        .then(response => {
          setSales(response.data);
        })
        .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
        <DateFilter setSales={setSales} />
        <SearchBar sales={sales} setSales={setSales} />
        <Statistics sales={sales} />
        <SalesChart sales={sales} />
        <SalesTable sales={sales} />
    </>
  );
}

export default App;
