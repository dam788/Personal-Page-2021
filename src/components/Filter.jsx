import React, { useState, useContext } from 'react';
import { FilterContext } from '../context/filterContext';

const Filter = ({ filter }) => {
  const { dispatch } = useContext(FilterContext);

  const [check, setCheck] = useState(true);

  const handleCheck = () => {
    setCheck(!check);

    if (check) {
      return dispatch({
        type: 'addFilter',
        filter,
      });
    }
    return dispatch({
      type: 'removeFilter',
      filter,
    });
  };

  return (
    <>
      {check ? (
        <div className='filter' key={filter}>
          <i className='fi-rs-square' onClick={handleCheck}></i>
          <span className='filter_name'>{filter}</span>
        </div>
      ) : (
        <div className='filter'>
          <i className='fi-rs-checkbox' onClick={handleCheck}></i>
          <span className='filter_name_checked'>{filter}</span>
        </div>
      )}
    </>
  );
};

export default Filter;
