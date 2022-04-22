import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

import fetchPlanetsApi from '../api/planetsApi';

const OPTIONS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterByName, setFilterByName] = useState('');
  const [filtersUsed, setFiltersUsed] = useState([]);
  const [optionsValue, setOptionsValue] = useState(OPTIONS);

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
    setFiltersUsed((prevState) => [...prevState, { column, comparison, valueCompare }]);
    const optionsFiltered = optionsValue.filter((item) => item !== column);
    setOptionsValue(optionsFiltered);

    if (comparison === 'maior que') {
      const aux = dataFilter
        .filter((item) => Number(item[column]) > Number(valueCompare));
      setDataFilter(aux);
    } else if (comparison === 'menor que') {
      const aux = dataFilter
        .filter((item) => Number(item[column]) < Number(valueCompare));
      setDataFilter(aux);
    } else {
      const aux = dataFilter
        .filter((item) => Number(item[column]) === Number(valueCompare));
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
    filtersUsed,
    optionsValue,
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
