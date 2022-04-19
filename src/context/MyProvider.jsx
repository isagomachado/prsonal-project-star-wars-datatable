import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

import fetchPlanetsApi from '../api/planetsApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPlanetsApi = async () => {
    setLoading(true);
    const planetsSW = await fetchPlanetsApi();
    setData(planetsSW.results);
    setLoading(false);
  };

  const contextValue = {
    data,
    loading,
    getPlanetsApi,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
