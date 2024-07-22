import { NavLink } from 'react-router-dom'
import { HiOutlineChevronDown } from 'react-icons/hi2'

import AnchorLink from './AnchorLink'
import Button from './Button'

import './NavItems.css'

function NavItems({ showDropdown, onShowDropdown, onCloseMenu }) {
  return (
    <ul className='nav-list'>
      <li className='nav-item'>
        <NavLink to='/' className={'nav-link'} onClick={onCloseMenu}>Strona główna</NavLink>
      </li>

      <li className='nav-item'>
        <NavLink to='/o-mnie' className={'nav-link'} onClick={onCloseMenu}>O mnie</NavLink>
      </li>

      <div className={`nav-dropdown  ${showDropdown ? 'nav-dropdown--show' : ''}`}>
        <Button className={'nav-link'} onClick={onShowDropdown}>
          <span>Usługi</span>
          <span className='nav-icon--arrow'>
            <HiOutlineChevronDown />
          </span>
        </Button>

        <ul className='nav-dropdown--list'>
          <li className='nav-item li-marker'>
            <NavLink to='/detailing-zewnetrzny' className={'nav-link'} onClick={onCloseMenu}>Detailing zewnetrzny</NavLink>
          </li>

          <li className='nav-item li-marker'>
            <NavLink to='/detailing-wewnetrzny' className={'nav-link'} onClick={onCloseMenu}>Detailing wewnętrzny</NavLink>
          </li>

          <li className='nav-item li-marker'>
            <NavLink to='/detailing-dodatkowe-uslugi' className={'nav-link'} onClick={onCloseMenu}>Usługi dodatkowe</NavLink>
          </li>
        </ul>
      </div>

      <li className='nav-item'>
        <NavLink to='/galeria' className={'nav-link'} onClick={onCloseMenu}>Galeria</NavLink>
      </li>

      <li className='nav-item'>
        <NavLink to='/blog' className={'nav-link'} onClick={onCloseMenu}>Blog</NavLink>
      </li>

      <li className='nav-item'>
        <AnchorLink href={'#contact'} className={'nav-link'} onClick={onCloseMenu}>
          Kontakt
        </AnchorLink>
      </li>
    </ul>
  )
}

export default NavItems
