import PhotoItem from './PhotoItem';

import './Photo.css'

function Photo({ images }) {

  return (
    <div className="photo-main">
      <ul className="photo-wrapper">
        {images.map(img => <PhotoItem key={img.id} src={img.src} />)}
      </ul>
    </div>
  )
}

export default Photo
