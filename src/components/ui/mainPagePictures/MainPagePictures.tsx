import  './MainPagePictures.scss';
import { MainPicturesData } from './MainPagePicturesData';
import { motion } from 'framer-motion'; 
import React from "react";


export const MainPagePictures = () => {
  return (
    <>
      {
        MainPicturesData.map(data => 
          <motion.div 
            className={`mainpage__${data.wrapperClass}`} 
            key={data.id}
            initial={{
              x: data.xI,
              y: data.yI,
              opacity: 0
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1
            }}
            transition={{
              delay: .7,
              duration: 1.4
            }}
          >
            <img src={data.src} alt={data.alt} />
          </motion.div>
        )
      }
    </>
  )
}
