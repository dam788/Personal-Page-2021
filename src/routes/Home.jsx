import React from 'react';

const Home = () => {
  return (
    <div className='container container_home'>
      <a
        href='https://drive.google.com/file/d/1_tz9QKbzUfOereeZtUnTQJcI_kXN6rqx/view?usp=sharing'
        target='blank'
      >
        <button className='btn_downloadCV'>
          <i className='fi-rs-download'></i>
          Download CV
        </button>
      </a>
    </div>
  );
};

export default Home;
