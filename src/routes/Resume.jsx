import React from 'react';
import { ResumeCV } from '../components';
const Resume = () => {
  return (
    <>
      <div className='container'>
        <div className='titleSection'>
          <hr className='titleSection_hrLeft' />
          <h1 className='resume_title'>Resumen</h1>
          <hr className='titleSection_hrRight' />
        </div>
        <ResumeCV />
      </div>
    </>
  );
};

export default Resume;
