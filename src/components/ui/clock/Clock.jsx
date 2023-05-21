import styles from './Clock.module.scss';
import WapePic from '../../../icons/Wave.svg';

export const Clock = () => {

  const clockData = [
    {id: 1, text: 92, waveText: 'Days', src: `${WapePic}`, alt: 'wave'},
    {id: 2, text: 11, waveText: 'Hours', src: `${WapePic}`, alt: 'wave'},
    {id: 3, text: 41, waveText: 'Minutes', src: `${WapePic}`, alt: 'wave'},
    {id: 4, text: 48, waveText: 'Seconds', src: `${WapePic}`, alt: 'wave'},
  ];

  return (
    <div className={styles.clock__wrapper}>
      {
        clockData.map(data => 
          <div className={styles.clock__item} key={data.id}>
            <div className={styles.clock__text_wrapper}>
              <p className={styles.clock__text}>{data.text}</p>
            </div>
            <div className={styles.clock__wave_wrapper}>
              <p className={styles.clock__wave_text}>{data.waveText}</p>
              <img className={styles.clock__wave_img} src={data.src} alt={data.alt} />
            </div>
          </div>
        )
      }
    </div>
  )
}
