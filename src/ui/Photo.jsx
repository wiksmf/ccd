import './Photo.css'

function Photo({ index, src, alt }) {
  const i = index + 1;

  return (
    <div className={`photo-border photo-border--${i}`}>
      <img
        loading="lazy"
        className={`photo-img photo-img--${i}`}
        src={src}
        alt={alt}
      />
    </div>
  )
}

export default Photo
