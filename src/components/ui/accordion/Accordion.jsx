import  './Accordion.scss';
import { AccordionData } from './AccordionData';
import { useEffect, useState } from 'react';


export const Accordion = () => {
  const [isShow, setIsShow] = useState(true);
  const [accordionId, setAccordionId] = useState(1);

  useEffect(() => {
    if (isShow) {
      setIsShow(!isShow);
    };
  }, [accordionId, isShow] )

  return (
    
    AccordionData.map(data => 
        <div className='accordion__wrapper' key={data.id}>
        <div className='accordion__inner'>
          {<div 
            className={`accordion__content ${accordionId === data.id && 'active'} `}>
              <div className='accordion__content-picture'>
                <img src={data.img} alt={data.alt} />
              </div>
              <div className={`accordion__content-text-wrapper ${accordionId === data.id && 'active'}`}>
                <div className='accordion__content-text-inner-left'>
                  <p className='accordion__content-text-title'>
                    {data.title}
                  </p>
                  <p className='accordion__content-text-date'>
                    {data.date}
                  </p>
                </div>
                <div className='accordion__content-text-inner-right'>
                  <p className='accordion__content-text-number'>
                    {data.number}
                  </p>
                </div>
              </div>
          </div>}
          <div className={`accordion__head ${accordionId === data.id && 'active'}`} onClick={() => {
            setAccordionId(data.id)
            }}>
            <div className='accordion__head-content'>
              <div className='accordion__head-picture'>
                <img src={data.smalimg} alt={data.smalalt} />
              </div>
              <p className='accordion__head-number'>{data.number}</p>
              <h3 className='accordion__head-title'>{data.title}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
