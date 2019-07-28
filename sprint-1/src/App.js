import React from 'react';
import './styles.scss';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import MainArticle from './components/MainArticle.js';
import Form from './components/Form';
import Comments from './components/Comments';
import VideoList from './components/VideoList.js';
import {sideVideo} from './data/video-info';
import {mainVideo} from './data/video-info';

class App extends React.Component {

  render() {

    return (
      <>
        <Header />
        <Hero />
        <div className="aside-design">
          <MainArticle mainVideo={mainVideo} />
          <Form />
          <Comments mainVideo={mainVideo} />
        </div>
        <VideoList mainVideo={mainVideo} sideVideo = {sideVideo}/>
      </>
    );
  }

}

export default App;
