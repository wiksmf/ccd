import { HiOutlineMapPin } from 'react-icons/hi2';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

import AnchorLink from './AnchorLink';
import Map from './Map';

import './Contact.css';

function Contact() {
  return (
    <section id='contact'>
      <div className='mw-wrapper'>
        <div className='section m-mb'>
          <h2 className='txt--g txt--g-1'>
            <strong>Masz pytania? Zadzwoń!</strong>
          </h2>
        </div>

        <div className='contact-wrapper'>
          <ul className='contact-list m-mb'>
            <li className='contact-li'>
              <span className='contact-icon contact-icon--pin'>
                <HiOutlineMapPin />
              </span>

              <p className='p p--sm txt--b'>
                <strong>Carbon Care Detailing</strong>
                <span className='d-block'>Olkusz, ul. Jasna 80</span>
              </p>
            </li>

            <li className='contact-li'>
              <span className='contact-icon contact-icon--phone'>
                <HiOutlinePhone />
              </span>

              <AnchorLink
                href={'tel:+48666699955'}
                className={'p txt--b'}
              >
                <strong>+48 666 699 955</strong>
              </AnchorLink>
            </li>

            <li className='contact-li'>
              <span className='contact-icon contact-icon--phone'>
                <HiOutlineMail />
              </span>

              <AnchorLink
                href={'mailto:kontakt@carbon-care-detailing.pl'}
                className={'p txt--b'}
              >
                <strong>kontakt@carboncare.pl</strong>
              </AnchorLink>
            </li>
          </ul>

          <Map />
        </div>
      </div>
    </section>
  );
}

export default Contact;
