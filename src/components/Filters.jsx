import React from 'react';
import { Filter } from '../components';

const Filters = ({ filters }) => {
  return (
    <div className='filters'>
      <h4 className='filters_h3'>FILTERS</h4>
      {filters.map((filter) => (
        <Filter filter={filter} key={filter} />
      ))}
    </div>
  );
};

export default Filters;
