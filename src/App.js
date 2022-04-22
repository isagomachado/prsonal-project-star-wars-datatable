import React from 'react';

import Provider from './context/MyProvider';
import Table from './components/Table';
import FilterInputName from './components/FilterInputName';
import FilterInputNumber from './components/FilterInputNumber';
import FilterCard from './components/FilterCard';

import './App.css';

function App() {
  return (
    <Provider>
      <FilterInputName />
      <FilterInputNumber />
      <FilterCard />
      <Table />
    </Provider>
  );
}

export default App;
