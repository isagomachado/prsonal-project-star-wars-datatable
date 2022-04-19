import React from 'react';

import Provider from './context/MyProvider';
import Table from './components/Table';

import './App.css';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
