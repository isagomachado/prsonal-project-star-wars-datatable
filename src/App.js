import React from 'react';

import Provider from './context/MyProvider';
import Table from './components/Table';
import FilterInputName from './components/FilterInputName';
import FilterInputNumber from './components/FilterInputNumber';

import './App.css';

function App() {
  return (
    <Provider>
      <FilterInputName />
      <FilterInputNumber />
      <Table />
    </Provider>
  );
}

export default App;
