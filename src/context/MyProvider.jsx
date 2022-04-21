import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

import fetchPlanetsApi from '../api/planetsApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterByName, setFilterByName] = useState('');

  const getPlanetsApi = async () => {
    setLoading(true);
    const planetsSW = await fetchPlanetsApi();
    setData(planetsSW.results);
    setDataFilter(planetsSW.results);
    setLoading(false);
  };

  const handleChangeFilterName = ({ target }) => {
    const { value } = target;
    setFilterByName(value);

    if (value.length === 0) {
      setDataFilter(data);
    } else {
      const valueLower = value.toLowerCase();
      const aux = data.filter(({ name }) => name.toLowerCase().includes(valueLower));
      setDataFilter(aux);
    }
  };

  const handleChangeFilterNumeric = ({ column, comparison, valueCompare }) => {
    if (comparison === 'maior que') {
      const aux = data.filter((item) => Number(item[column]) > Number(valueCompare));
      setDataFilter(aux);
    } else if (comparison === 'menor que') {
      const aux = data.filter((item) => Number(item[column]) < Number(valueCompare));
      setDataFilter(aux);
    } else {
      const aux = data.filter((item) => Number(item[column]) === Number(valueCompare));
      setDataFilter(aux);
    }
  };

  const contextValue = {
    dataFilter,
    loading,
    getPlanetsApi,
    filterByName,
    handleChangeFilterName,
    handleChangeFilterNumeric,
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
