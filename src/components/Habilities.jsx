import React from 'react';
import { resume } from '../data/data';
import { CardHability } from './';

const Habilities = () => {
  const { habilidades } = resume;
  const { basics, dgWeb, node, react, uxui } = habilidades;
  return (
    <>
      <div className='container-cards'>
        <CardHability title={'BÁSICAS'} hability={basics} />
        <CardHability title={'DISEÑO WEB'} hability={dgWeb} />
        <CardHability title={'NODE JS'} hability={node} />
        <CardHability title={'REACT JS'} hability={react} />
        <CardHability title={'UX/UI'} hability={uxui} />
      </div>
    </>
  );
};

export default Habilities;
