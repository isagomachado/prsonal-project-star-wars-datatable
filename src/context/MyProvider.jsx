import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

import fetchPlanetsApi from '../api/planetsApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterByName, setFilterByName] = useState('');
  const [dataFilter, setDataFilter] = useState([]);

  const getPlanetsApi = async () => {
    setLoading(true);
    const planetsSW = await fetchPlanetsApi();
    setData(planetsSW.results);
    setDataFilter(planetsSW.results);
    setLoading(false);
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilterByName(value);
    console.log(value);

    if (value.length === 0) {
      setDataFilter(data);
    } else {
      const valueLower = value.toLowerCase();
      const aux = data.filter(({ name }) => name.toLowerCase().includes(valueLower));
      setDataFilter(aux);
    }
  };

  const contextValue = {
    loading,
    getPlanetsApi,
    filterByName,
    handleChange,
    dataFilter,
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
