import './Clock.scss';
import WavePic from '../../../icons/Wave.svg';
import WavePicLittle from '../../../icons/WaveLittle.svg';
import { useEffect, useRef, useState } from 'react';
import { getPadTime } from './getPadTime';

export const Clock = () => {
  const [difference, setDifference] = useState(null);
  const daysLeft = getPadTime(Math.floor(difference / 1000 / 60 / 60 / 24));
  const hoursLeft = getPadTime(Math.floor(difference / 1000 / 60 / 60) % 24);
  const minutesLeft = getPadTime(Math.floor(difference / 1000 / 60) % 60);
  const secondsLeft = getPadTime(Math.floor(difference / 1000) % 60);
  let interval = useRef();
  const timer = () => {
    const nextDate = new Date(`May 31 2023`);
    interval = setInterval(() => {
      const currentTime = new Date();
      const dist = nextDate - currentTime;
      if (dist <= 0 ) {
        clearInterval(interval.current);
      } else {
        setDifference(dist);
      }
    }, 1000)
  };

  useEffect(() => {
    const stopInterval = interval.current;
    timer();
    return () => clearInterval(stopInterval);
  });
  
  const clockData = [
    {id: 1, text: `${daysLeft}`, waveText: 'Days', waveTextShot: 'DD', src: `${WavePic}`, srcLittle: `${WavePicLittle}`, alt: 'wave'},
    {id: 2, text: `:`, waveText: '', src: ``, alt: ''},
    {id: 3, text: `${hoursLeft}`, waveText: 'Hours', waveTextShot: 'HH', src: `${WavePic}`, srcLittle: `${WavePicLittle}`, alt: 'wave'},
    {id: 4, text: `:`, waveText: '', src: ``, alt: ''},
    {id: 5, text: `${minutesLeft}`, waveText: 'Minutes',waveTextShot: 'MM', src: `${WavePic}`, srcLittle: `${WavePicLittle}`, alt: 'wave'},
    {id: 6, text: `:`, waveText: '', src: ``, alt: ''},
    {id: 7, text: `${secondsLeft}`, waveText: 'Seconds', waveTextShot: 'SS', src: `${WavePic}`, srcLittle: `${WavePicLittle}`, alt: 'wave'},
  ];

  return (
    <div className='clock__wrapper'>
      {
        clockData.map(data => 
          <div className={data.src === '' ? 'clock__item_dot' : 'clock__item'} key={data.id}>
            <div className='clock__text-wrapper'>
              <p className='clock__text'>{data.text}</p>
            </div>
            <div className='clock__wave-wrapper'>
              <p className='clock__wave-text'>{data.waveText}</p>
              <p className='clock__wave-text-shot'>{data.waveTextShot}</p>
              {data.src !== '' &&
                <div className='clock__wave-picture'>
                  <img className='clock__wave-img' src={data.src} alt={data.alt} />
                  <img className='clock__wave-img-little' src={data.srcLittle} alt={data.alt} />
                </div>
              }
            </div>
          </div>
        )
      }
    </div>
  )
}
