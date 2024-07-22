import './Photo.css'

function Photo({ index, src, alt }) {
  const i = index + 1;

  return (
    <div className={`gallery-border gallery-border--${i}`}>
      <img
        loading="lazy"
        className={`gallery-img gallery-img--${i}`}
        src={src}
        alt={alt}
      />
    </div>
  )
}

export default Photo
