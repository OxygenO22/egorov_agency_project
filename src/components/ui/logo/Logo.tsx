import  './Logo.scss';
import { LogoData } from './LogoData';
import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <>
      {
        LogoData.map(data => 
          <motion.div 
            className={data.className} key={data.id}
            initial={{
              y: -50,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              delay: .1,
              duration: 1
            }}
          >
            <a  href="!"  rel='noreferrer'>
              <img src={data.src} alt={data.alt} />
            </a>
          </motion.div>
        )
      }
    </>
  )
}
