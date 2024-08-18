function SocialItem({ src }) {
  return (
    <li className="social social-facebook">
      <a href="#" rel="external nofollow" target="_blank" title="Facebook">
        <img
          loading="lazy"
          className="social-img"
          src={src}
          alt="Facebook"
        />
      </a>
    </li>
  )
}

export default SocialItem;
