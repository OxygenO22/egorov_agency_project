import { MainPicturesData } from './MainPagePicturesData';
import  './MainPagePictures.scss'; 


export const MainPagePictures = () => {
  return (
    <>
      {
        MainPicturesData.map(data => 
          <div className={`mainpage__${data.wrapperClass}`} key={data.id}>
            <img src={data.src} alt={data.alt} />
          </div>
        )
      }
    </>
  )
}
