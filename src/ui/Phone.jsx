import { useState } from 'react';
import { HiOutlinePhone } from 'react-icons/hi2';

import Button from './Button';
import AnchorLink from './AnchorLink';

import './Phone.css';

function Phone() {
  const [showPhone, setShowPhone] = useState(false);

  function handleShowPhone() {
    setShowPhone(!showPhone);
  }

  return (
    <div className={`phone ${showPhone ? 'phone--show' : ''}`}>
      <AnchorLink
        href={'tel:+48666699955'}
        className={'phone-a'}
      >
        <strong>+48 666 699 955</strong>
      </AnchorLink>

      <Button
        aria='Zadzwoń do nas'
        onClick={handleShowPhone}
      >
        <HiOutlinePhone />
      </Button>
    </div>
  );
}

export default Phone;
