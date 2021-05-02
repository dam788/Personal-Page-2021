import React from 'react';
import { certified, habilities, experience } from '../img/resume';
import { NavLink } from 'react-router-dom';

const ResumeButtons = () => {
  return (
    <>
      <div className='resume-sections'>
        <NavLink
          to='/resume/habilities'
          activeClassName='resume-btn-active'
        >
          <div className='resume-btn'>
            <img className='resume-btn-img' src={habilities} alt='' />
            <span className='resume-btn-span'>HABILIDADES</span>
          </div>
        </NavLink>
        <NavLink
          to='/resume/formation'
          activeClassName='resume-btn-active'
        >
          <div className='resume-btn'>
            <img className='resume-btn-img' src={certified} alt='' />
            <span className='resume-btn-span'>FORMACIÓN</span>
          </div>
        </NavLink>
        <NavLink
          to='/resume/experience'
          activeClassName='resume-btn-active'
        >
          <div className='resume-btn'>
            <img className='resume-btn-img' src={experience} alt='' />
            <span className='resume-btn-span'>EXPERIENCIA</span>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default ResumeButtons;
