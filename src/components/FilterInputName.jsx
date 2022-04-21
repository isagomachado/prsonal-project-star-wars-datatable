import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterInputName() {
  const { filterByName, handleChangeFilterName } = useContext(MyContext);

  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ filterByName }
      onChange={ handleChangeFilterName }
    />
  );
}

export default FilterInputName;
