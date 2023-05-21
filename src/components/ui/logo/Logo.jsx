import  './Logo.scss';
import { LogoData } from './LogoData';

export const Logo = () => {
  return (
    <>
      {
        LogoData.map(data => 
          <div className={data.className} key={data.id}>
            <a  href="!"  rel='noreferrer'>
              <img src={data.src} alt={data.alt} />
            </a>
          </div>
        )
      }
    </>
  )
}
