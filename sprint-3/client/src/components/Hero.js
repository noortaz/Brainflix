import React from 'react';
//import playIcon from '../icons/SVG/Icon-play.svg';
//import volumeIcon from '../icons/SVG/Icon-volume.svg';
//import fullScreen from '../icons/SVG/Icon-fullscreen.svg';
//import scrubberIcon from '../icons/SVG/Icon-scrubber-control.svg';
//import heroImage from '../images/video-list-0.jpg';



class Hero extends React.Component {
  render() {
    return (
      <section className="hero-container">
        <video className="hero-container__image" poster={this.props.mainVideo.image} controls></video>
      </section>
      /*
      <div className="hero-container__icons">
          <img className="hero-container__icons--play" src={playIcon} alt="" />
          <img className="hero-container__icons--scrubber" src={scrubberIcon} alt="" />
          <img className="hero-container__icons--fullscreen" src={fullScreen} alt="" />
          <img className="hero-container__icons--volume" src={volumeIcon} alt="" />
      </div>
      */
    )
  }
}


export default Hero;