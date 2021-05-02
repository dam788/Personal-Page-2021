import React from 'react';
import { resume } from '../data/data';

const Experience = () => {
  const { experiencia } = resume;
  return (
    <>
      <>
        {experiencia.map(({ id, date, title, place }) => {
          return (
            <div className='formation-container' key={id}>
              <small className='date-formation'>{date}</small>
              <div className='formation'>
                <h4 className='title-formation'>{title}</h4>
                <span className='title-institution'>- {place}</span>
              </div>
            </div>
          );
        })}
      </>
    </>
  );
};

export default Experience;
