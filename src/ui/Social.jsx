import SocialItem from './SocialItem'

import './Social.css'

function Social() {
  return (
    <ul className="socials">
      <SocialItem src={'/public/icons/facebook.svg'} />
      <SocialItem src={'/public/icons/instagram.svg'} />
    </ul>
  )
}

export default Social
