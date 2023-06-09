import { useEffect, useState } from 'react';
import  './Accordion.scss';
import { AccordionButton } from '../buttons/AccordionButton';
import { AccordionData } from './AccordionData';
import React from "react";

interface IAccordionData {
  id: number;
  number: string;
  title: string;
  date: string;
  img: string;
  alt: string;
  smalimg: string;
  smalalt: string;
}

export const Accordion = () => {
  const [isShow, setIsShow] = useState(true);
  const [accordionId, setAccordionId] = useState(1);

  useEffect(() => {
    if (isShow) {
      setIsShow(!isShow);
    };
  }, [accordionId, isShow] )

  return (
    <>
      {AccordionData.map((data: IAccordionData) => (
        <div className="accordion__wrapper" key={data.id}>
          <div className="accordion__inner">
            {
              <div
                className={`accordion__content ${
                  accordionId === data.id && "active"
                } `}
              >
                <div className="accordion__content-picture">
                  <img src={data.img} alt={data.alt} />
                </div>
                <div
                  className={`accordion__content-text-wrapper ${
                    accordionId === data.id && "active"
                  }`}
                >
                  <div className="accordion__content-text-inner-left">
                    <p className="accordion__content-text-title">
                      {data.title}
                    </p>
                    <p className="accordion__content-text-date">{data.date}</p>
                    <a
                      className="accordionbutton__link"
                      href="https://egorovagency.by/#main"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AccordionButton />
                    </a>
                  </div>
                  <div className="accordion__content-text-inner-right">
                    <p className="accordion__content-text-number">
                      {data.number}
                    </p>
                  </div>
                </div>
              </div>
            }
            <div
              className={`accordion__head ${
                accordionId === data.id && "active"
              }`}
              onClick={() => {
                setAccordionId(data.id);
              }}
            >
              <div className="accordion__head-content">
                <div className="accordion__head-picture">
                  <img src={data.smalimg} alt={data.smalalt} />
                </div>
                <p className="accordion__head-number">{data.number}</p>
                <h3 className="accordion__head-title">{data.title}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
