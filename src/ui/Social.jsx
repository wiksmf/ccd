import SocialItem from './SocialItem'

import facebook from '../../public/icons/facebook.svg'
import instagram from '../../public/icons/instagram.svg'

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
