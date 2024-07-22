import { HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2";

import './Contact.css'
import AnchorLink from './AnchorLink';
import Map from './Map';

function Contact() {
  return (
    <section id="contact">
      <div className="mw-wrapper">

        <div className="section">
          <h2 className="h-h2 d-grid txt--b">
            <span className="d-grid--line"></span>
            <strong className="d-grid--txt">Kontakt</strong>
            <span className="d-grid--line"></span>
          </h2>

          <p className="p--md m-mtb txt--g">
            <strong>Masz pytania? Zadzwoń!</strong>
          </p>

          <ul className="contact-list">
            <li className="contact-li">
              <span className='contact-icon contact-icon--pin'>
                <HiOutlineMapPin />
              </span>

              <p className="p--sm txt--b">
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
        </div>

        <Map />
      </div>
    </section>
  )
}

export default Contact
