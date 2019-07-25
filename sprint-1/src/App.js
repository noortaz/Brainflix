import React from 'react';
import './styles.scss';
import headerLogo  from './logo/logo-brainflix.svg';
import avatar from './images/avatar.jpg';
import searchIcon from './icons/SVG/Icon-search.svg';
import uploadIcon from './icons/SVG/Icon-upload.svg';
import playIcon from './icons/SVG/Icon-play.svg';
import volumeIcon from './icons/SVG/Icon-volume.svg';
import fullScreen from './icons/SVG/Icon-fullscreen.svg';
import heroImage from './images/video-list-0.jpg';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="nav-bar">
          <ul className="nav-bar__list">
            <li className="nav-bar__list__items">
              
              <img className="nav-bar__logo" src={headerLogo} alt=""/>
              
            </li>
            <li className="nav-bar__list__items">
              <img className="nav-bar__icon--search" src={searchIcon} alt=""/>
              <input className="nav-bar__search-box" type="name" placeholder="Search"/>
            </li>
            <li className="nav-bar__list__items">
              <button className="nav-bar__upload-btn">
                <img className="nav-bar__icon--upload" src={uploadIcon} alt=""/>
                 upload
              </button>
              <img className="nav-bar__avatar" src={avatar} alt=""/>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}


class Hero extends React.Component {
  render() {
    return (
      <section className="hero-container">
          <img className= "hero-container__image" src={heroImage} alt=""/>
          <div className= "hero-container__icons">
            <img className="hero-container__icons--play" src={playIcon} alt=""/>
            <img className="hero-container__icons--" src={fullScreen} alt=""/>
            <img className="hero-container__icons--" src={volumeIcon} alt=""/>
          </div>
      </section>
    )
  }
}



function App() {
  return (
    <>
    <Header />
    <Hero />
    </>
  );
}

export default App;
