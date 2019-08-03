import React from 'react';
import './styles.scss';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import MainArticle from './components/MainArticle.js';
import Form from './components/Form';
import Comments from './components/Comments';
import VideoList from './components/VideoList.js';

//import {sideVideo} from './data/video-info';
// import {mainVideo} from './data/video-info';
import Axios from 'axios';

class App extends React.Component {
  state = {
    mainVideo: { comments: []},
    sideVideo: []
  }



  getVideoList() {
    Axios.get('https://project-2-api.herokuapp.com/videos?api_key=997fdb70-0e59-42e6-84d5-d4de9ea0f253')
        .then(response => {
          console.log(response);
          
          this.setState({
            sideVideo: response.data,
            id: response.data[0].id,
          })
          
        })
  }

  getMainVideo(id) {
    Axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=997fdb70-0e59-42e6-84d5-d4de9ea0f253`)
    .then(response => {
      console.log(response.data);
      this.setState({
        mainVideo: response.data,
      })
    })
  
  }

  
  componentDidMount() {
    this.getVideoList();
    this.getMainVideo('1af0jruup5gu');
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getMainVideo(this.props.match.params.id);
    }
  }
 


  render() {
  
    return (
      <>
        <Hero mainVideo={this.state.mainVideo} />
        <div className="aside-design">
          <MainArticle mainVideo={this.state.mainVideo} />
          <Form />
          <Comments mainVideo={this.state.mainVideo} />
        </div>
        <VideoList mainVideo={this.state.mainVideo} sideVideo = {this.state.sideVideo}/>
      </>
    );
  }

}

export default App;
