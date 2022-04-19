import React, { useContext, useEffect } from 'react';

import MyContext from '../context/MyContext';
import TableHeader from './TableHeader';
import TableLine from './TableLine';

function Table() {
  const { data, getPlanetsApi } = useContext(MyContext);

  useEffect(() => {
    getPlanetsApi();
  }, []);

  return (
    <div>
      <p>Tabela</p>
      <table>
        <TableHeader />
        {
          data.map((planet) => (
            <TableLine key={ planet.name } planet={ planet } />
          ))
        }
      </table>
    </div>
  );
}

export default Table;
