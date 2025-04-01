import SocialItem from './SocialItem';

import facebook from '../../public/images/icons/facebook.svg';
import instagram from '../../public/images/icons/instagram.svg';

import './Social.css';

function Social() {
  return (
    <ul className='socials'>
      <SocialItem
        src={facebook}
        href='https://www.facebook.com/share/1B82rC4PTh/'
      />
      <SocialItem
        src={instagram}
        href={'https://www.instagram.com/carboncaredetailing/'}
      />
    </ul>
  );
}

export default Social;
