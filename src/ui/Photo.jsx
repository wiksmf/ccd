import PhotoItem from './PhotoItem';

import './Photo.css'

function Photo({ images }) {

  return (
    <div className="photo-main">
      <div className="photo-wrapper">
        {images.map(img => <PhotoItem key={img.id} src={img.src} />)}
      </div>
    </div>
  )
}

export default Photo
