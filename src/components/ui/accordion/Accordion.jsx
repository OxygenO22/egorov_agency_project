import  './Accordion.scss';
import { AccordionData } from './AccordionData';
import { useState } from 'react';


export const Accordion = () => {
  const [isShow, setIsShow] = useState(true);
  const [accordionId, setAccordionId] = useState(1);
  return (
    
    AccordionData.map(data => 
        <div className='accordion__wrapper' key={data.id}>
        <div className='accordion__inner'>
          <div className='accordion__head' onClick={() => {
            setIsShow(isShow => !isShow);
            setAccordionId(data.id)
            }}>
            <div className='accordion__head-content'>
              <p className='accordion__head-number'>{data.number}</p>
              <h3 className='accordion__head-title'>{data.title}</h3>
            </div>
          </div>
          <div 
            className={`accordion__content ${isShow && accordionId === data.id ? 'active' : ''}`}>
              <p className='accordion__content-text'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum mollitia nobis quaerat, autem sed quia fuga saepe necessitatibus totam odio. Velit delectus, alias quaerat consectetur quos sequi dicta voluptates quas consequuntur quis neque deleniti minus ducimus aspernatur cum error tenetur impedit soluta id nostrum reiciendis, veniam, aliquam facere! Excepturi, amet?
              </p>
          </div>
        </div>
      </div>
    )
  )
}
