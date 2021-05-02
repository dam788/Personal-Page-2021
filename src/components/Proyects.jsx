import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { FilterContext } from '../context/filterContext';
import { filterProyects } from '../utils/filterProyects';

const Proyects = ({ proyects }) => {
  const { state } = useContext(FilterContext);
  const proyectsFiltered = filterProyects(proyects, state);

  return proyectsFiltered.map((proyect) => {
    const { title, description, link1, link2, photo, tecnology } = proyect;
    return (
      <div className='proyects_container' key={title}>
        <div className='proyect'>
          <img className='proyect_img' src={photo} alt='' />
          <div className='proyect_content'>
            <h3 className='proyect_title'>{title}</h3>
            <span className='proyect_description'>{description}</span>
            <div className='proyect_tags'>
              {tecnology.map((data) => (
                <div className='tag' key={data}>
                  <span>{data}</span>
                </div>
              ))}
            </div>
            <div className='proyect_links'>
              <a href={link1} className='proyect_link' target='blank'>
                <FontAwesomeIcon icon={faChrome} />
              </a>
              <a href={link2} className='proyect_link' target='blank'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Proyects;
