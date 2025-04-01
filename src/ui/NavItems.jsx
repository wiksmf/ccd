import { NavLink, useLocation } from 'react-router-dom';
import { HiOutlineChevronDown } from 'react-icons/hi2';

import { useMediaQuery } from 'react-responsive';
import { useOutsideClick } from '../hooks/useOutsideClick';

import AnchorLink from './AnchorLink';
import Button from './Button';

import './NavItems.css';

function NavItems({ showDropdown, onShowDropdown, onCloseDropdown, onCloseMenu }) {
  const isMobile = useMediaQuery({ maxWidth: '1199px' });
  const ref = useOutsideClick(onCloseDropdown);
  const location = useLocation();

  const dropdownLinks = ['/detailing-pakiety', '/folie', '/dodatkowe-uslugi', '/carbon', '/promocje'];
  const isDropdownActive = dropdownLinks.includes(location.pathname);

  return (
    <ul className='nav-list'>
      <li className='nav-item'>
        <NavLink
          to='/'
          className={'nav-link'}
          onClick={onCloseMenu}
        >
          Strona główna
        </NavLink>
      </li>

      <li className='nav-item'>
        <NavLink
          to='/o-mnie'
          className={'nav-link'}
          onClick={onCloseMenu}
        >
          O mnie
        </NavLink>
      </li>

      <div 
        className={`nav-dropdown  ${showDropdown ? 'nav-dropdown--show' : ''} `} 
        ref={isMobile ? null : ref}
      >
        <Button
          className={`nav-link ${isDropdownActive ? ' active' : ''}`}
          onClick={onShowDropdown}
        >
          <span>Oferta</span>
          <span className='nav-icon--arrow'>
            <HiOutlineChevronDown />
          </span>
        </Button>

        <ul className='nav-dropdown--list'>
          <li className='nav-item li-marker'>
            <NavLink
              to='/detailing-pakiety'
              className={'nav-link'}
              onClick={isMobile ? onCloseMenu : onCloseDropdown}
            >
              Detailing Pakiety
            </NavLink>
          </li>

          <li className='nav-item li-marker'>
            <NavLink
              to='/folie'
              className={'nav-link'}
              onClick={isMobile ? onCloseMenu : onCloseDropdown}
            >
              Folie
            </NavLink>
          </li>

          <li className='nav-item li-marker'>
            <NavLink
              to='/dodatkowe-uslugi'
              className={'nav-link'}
              onClick={isMobile ? onCloseMenu : onCloseDropdown}
            >
              Dodatkowe usługi
            </NavLink>
          </li>

          <li className='nav-item li-marker'>
            <NavLink
              to='/carbon'
              className={'nav-link'}
              onClick={isMobile ? onCloseMenu : onCloseDropdown}
            >
              Carbon
            </NavLink>
          </li>

          <li className='nav-item li-marker'>
            <NavLink
              to='/promocje'
              className={'nav-link'}
              onClick={isMobile ? onCloseMenu : onCloseDropdown}
            >
              Promocje
            </NavLink>
          </li>
        </ul>
      </div>

      <li className='nav-item'>
        <NavLink
          to='/realizacje'
          className={'nav-link'}
          onClick={onCloseMenu}
        >
          Realizacje
        </NavLink>
      </li>

      <li className='nav-item'>
        <NavLink
          to='/blog'
          className={'nav-link'}
          onClick={onCloseMenu}
        >
          Blog
        </NavLink>
      </li>

      <li className='nav-item'>
        <AnchorLink
          href={'#contact'}
          className={'nav-link'}
          onClick={onCloseMenu}
        >
          Kontakt
        </AnchorLink>
      </li>
    </ul>
  );
}

export default NavItems;
