import React from 'react';
import { Filters, Proyects } from '../components';
import { proyects, filters } from '../data/data';

const Porfolio = () => {
  return (
    <div className='container'>
      <div className='titleSection'>
        <hr className='titleSection_hrLeft' />
        <h1 className='resume_title'>Porfolio</h1>
        <hr className='titleSection_hrRight' />
      </div>
      <div className='proyects'>
        <Filters filters={filters} />
        <Proyects proyects={proyects} />
      </div>
    </div>
  );
};

export default Porfolio;
