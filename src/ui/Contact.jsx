import { HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2";

import './Contact.css'
import AnchorLink from './AnchorLink';
import Map from './Map';

function Contact() {
  return (
    <section id="contact">
      <div className="mw-wrapper">
        <div className="section m-mb">
          <h2 className="txt--g txt--g-1">
            <strong>Masz pytania? Zadzwoń!</strong>
          </h2>
        </div>

        <div className="contact-wrapper">
          <ul className="contact-list m-mb">
            <li className="contact-li">
              <span className='contact-icon contact-icon--pin'>
                <HiOutlineMapPin />
              </span>

              <p className="p p--sm txt--b">
                <strong>Carbon Care Detailing</strong>
                <span className="d-block">Ulica Jakas Tam 4</span>
                <span className="d-block">00-000 Gdzies Tam</span>
              </p>
            </li>

            <li className="contact-li">
              <span className='contact-icon contact-icon--phone'>
                <HiOutlinePhone />
              </span>

              <AnchorLink href={'tel:+48XXXXXXXXX'} className={'p txt--b'}>
                <strong>+48 XXX XXX XXX</strong>
              </AnchorLink>
            </li>
          </ul>

          <Map />
        </div>
      </div>
    </section>
  )
}

export default Contact;
