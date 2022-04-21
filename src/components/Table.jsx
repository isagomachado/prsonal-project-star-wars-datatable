import React, { useContext, useEffect } from 'react';

import MyContext from '../context/MyContext';
import TableHeader from './TableHeader';
import TableLine from './TableLine';

function Table() {
  const { dataFilter, getPlanetsApi } = useContext(MyContext);

  useEffect(() => {
    getPlanetsApi();
  }, []);

  return (
    <div>
      <table>
        <TableHeader />
        {
          dataFilter.map((planet) => (
            <TableLine key={ planet.name } planet={ planet } />
          ))
        }
      </table>
    </div>
  );
}

export default Table;
