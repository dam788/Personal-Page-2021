import React from 'react';
import { resume } from '../data/data';

const Formation = () => {
  const { formacion } = resume;
  console.log(formacion);
  return (
    <>
      {formacion.map(
        ({ id, certified, date, institution, title, link }) => {
          return (
            <div className='formation-container' key={id}>
              <small className='date-formation'>{date}</small>
              <div className='formation'>
                <h4 className='title-formation'>{title}</h4>
                <span className='title-institution'>- {institution}</span>
              </div>
              {certified && (
                <div className='certified-formation'>
                  <a href={link}>
                    <i className='fi-rs-badge'></i>
                  </a>
                </div>
              )}
            </div>
          );
        }
      )}
    </>
  );
};

export default Formation;
