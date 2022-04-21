import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function FilterInputNumber() {
  const [column, setColumn] = useState('population');
  const [comparison, setcomparison] = useState('maior que');
  const [valueCompare, setvalue] = useState(0);

  const { handleChangeFilterNumeric } = useContext(MyContext);

  const handleChangeGeneric = ({ target }) => {
    const { name, value } = target;

    if (name === 'column') {
      setColumn(value);
    } else if (name === 'comparison') {
      setcomparison(value);
    } else {
      setvalue(value);
    }
  };

  return (
    <div>
      <label htmlFor="column-filter">
        Coluna:
        {' '}
        <select
          name="column"
          id="column-filter"
          data-testid="column-filter"
          onChange={ handleChangeGeneric }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      {' '}
      <label htmlFor="column-filter">
        Operador:
        {' '}
        <select
          name="comparison"
          id="column-filter"
          data-testid="comparison-filter"
          onChange={ handleChangeGeneric }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      {' '}
      <input
        type="number"
        data-testid="value-filter"
        name="valueCompare"
        value={ valueCompare }
        onChange={ handleChangeGeneric }
      />
      {' '}
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          handleChangeFilterNumeric({ column, comparison, valueCompare });
        } }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterInputNumber;
