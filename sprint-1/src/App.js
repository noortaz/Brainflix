import React from 'react';
import './styles.scss';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import MainArticle from './components/MainArticle.js';
import VideoList from './components/VideoList.js';
import {sideVideo} from './data/video-info';

class App extends React.Component {

  render() {

    return (
      <>
        <Header />
        <Hero />
        <MainArticle />
        <VideoList sideVideo = {sideVideo}/>
      </>
    );
  }

}

export default App;
