import React from 'react';
import foto from '../img/foto.png';
import hello from '../img/hello.svg';
import { Contacts } from '../components';

const Card = () => {
  return (
    <>
      <div className='card'>
        <img src={foto} alt='foto de Dam' className='card_img' />
        <div className='card_content'>
          <img src={hello} alt='hello' className='hello' />
          <h1 className='card_name'>Soy Hugo Morales</h1>
          <span className='card_speciality'>
            DESARROLLADOR FRONTEND JUNIOR
          </span>
          <hr className='card_hr' />
          <p className='card_description'>
            Desarrollo en Javascript y React, y tengo conocimientos básicos
            en Node JS, trabajo en equipo a través de control de versiones
            en Git / Github. Experiencia en Wordpress. Mis fortalezas son
            el FrontEnd y las herramientas de Diseño Gráfico. Empatía y
            buena predisposición a la hora del Trabajo en Equipo.
          </p>
        </div>
        <Contacts />
      </div>
    </>
  );
};

export default Card;
