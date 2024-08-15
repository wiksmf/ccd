import './PhotoItem.css'

function PhotoItem({ src, alt }) {
  return (
    <li className="photo">
      <div className='photo-out'>
        <div className='photo-in'>
          <img
            loading="lazy"
            className="photo-img"
            src={src}
            alt={alt}
          />
        </div>
      </div>
    </li>
  )
}



export default PhotoItem
