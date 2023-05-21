import styles from './Clock.module.scss';
import WavePic from '../../../icons/Wave.svg';

export const Clock = () => {

  const clockData = [
    {id: 1, text: 92, waveText: 'Days', src: `${WavePic}`, alt: 'wave'},
    {id: 2, text: 11, waveText: 'Hours', src: `${WavePic}`, alt: 'wave'},
    {id: 3, text: 41, waveText: 'Minutes', src: `${WavePic}`, alt: 'wave'},
    {id: 4, text: 48, waveText: 'Seconds', src: `${WavePic}`, alt: 'wave'},
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
              <div className={styles.clock__wave_picture }>
                <img className={styles.clock__wave_img} src={data.src} alt={data.alt} />
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
