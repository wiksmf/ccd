import SocialItem from './SocialItem'

import facebook from '../../public/images/icons/facebook.svg'
import instagram from '../../public/images/icons/instagram.svg'

import './Social.css'

function Social() {
  return (
    <ul className="socials">
      <SocialItem src={facebook} />
      <SocialItem src={instagram} />
    </ul>
  )
}

export default Social
