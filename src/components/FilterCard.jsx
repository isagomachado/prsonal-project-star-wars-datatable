import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterCard() {
  const { filtersUsed } = useContext(MyContext);

  return (
    filtersUsed.map((item) => (
      <div key={ item.column }>
        <p>{ `${item.column} ${item.comparison} ${item.valueCompare}` }</p>
        <button type="button">X</button>
      </div>
    ))
  );
}

export default FilterCard;
