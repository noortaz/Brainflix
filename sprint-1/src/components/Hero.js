import React from 'react';
import playIcon from '../icons/SVG/Icon-play.svg';
import volumeIcon from '../icons/SVG/Icon-volume.svg';
import fullScreen from '../icons/SVG/Icon-fullscreen.svg';
import heroImage from '../images/video-list-0.jpg';



class Hero extends React.Component {
  render() {
    return (
      <section className="hero-container">
        <img className="hero-container__image" src={heroImage} alt="" />
        <div className="hero-container__icons">
          <img className="hero-container__icons--play" src={playIcon} alt="" />
          <img className="hero-container__icons--" src={fullScreen} alt="" />
          <img className="hero-container__icons--" src={volumeIcon} alt="" />
        </div>
      </section>
    )
  }
}


export default Hero;