import './PhotoItem.css'

function PhotoItem({ src, alt }) {
  return (
    <div className="photo">
      <img
        loading="lazy"
        className="photo-img"
        src={src}
        alt={alt}
      />
    </div>
  )
}



export default PhotoItem
