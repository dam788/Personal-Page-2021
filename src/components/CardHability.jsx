import React from 'react';

const CardHability = ({ title, hability }) => {
  return (
    <>
      <h5 className='section-card-title'>{title}</h5>
      <div className='section-card' key={title}>
        {hability.map(({ title, icon }) => {
          return (
            <div className='card-hability' key={title}>
              <img src={icon} alt='' />
              <small className='span-card'>{title}</small>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardHability;
