import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterInputName() {
  const { filterByName, handleChange } = useContext(MyContext);

  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ filterByName }
      onChange={ handleChange }
    />
  );
}

export default FilterInputName;
