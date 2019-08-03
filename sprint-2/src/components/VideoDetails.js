import React from 'react';
import Hero from './components/Hero.js';
import MainArticle from './components/MainArticle.js';
import Form from './components/Form';
import Comments from './components/Comments';




class VideoDetails extends React.Component {
  render() {
    return (
      <>
        <Hero/>
        <div className="aside-design">
          <MainArticle />
          <Form />
          <Comments  />
        </div>
      </>
    )
  }
}


export default VideoDetails;