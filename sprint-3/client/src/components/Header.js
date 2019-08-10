import React from 'react';
import headerLogo from '../logo/logo-brainflix.svg';
import avatar from '../images/avatar.jpg';
import searchIcon from '../icons/SVG/Icon-search.svg';
import uploadIcon from '../icons/SVG/Icon-upload.svg';

import {Link} from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="nav-bar">
          <ul className="nav-bar__list">
            <li className="nav-bar__list__items">

              <Link to="/videos/1af0jruup5gu"><img className="nav-bar__logo" src={headerLogo} alt="" /></Link>

            </li>
            <li className="nav-bar__list__items">
              <img className="nav-bar__icon--search" src={searchIcon} alt="" />
              <input className="nav-bar__search-box" type="name" placeholder="Search" />
            </li>
            <li className="nav-bar__list__items">
              <button className="nav-bar__upload-btn">
                <Link to="/upload">
                  <img className="nav-bar__icon--upload" src={uploadIcon} alt="" />
                  upload
                </Link> 
              </button>
              <img className="nav-bar__avatar" src={avatar} alt="" />
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}


export default Header;