import PhotoItem from './PhotoItem';

import './Photo.css'

function Photo({ images }) {

  console.log(images)

  return (
    <div className="photo-main">
      <div className="photo-wrapper">
        {images.map(img => <PhotoItem key={img.id} src={img.url} />)}
      </div>
    </div>
  )
}

export default Photo
