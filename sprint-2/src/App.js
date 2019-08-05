import React from 'react';
import './styles.scss';

import Hero from './components/Hero.js';
import MainArticle from './components/MainArticle.js';
import Form from './components/Form';
import Comments from './components/Comments';
import VideoList from './components/VideoList.js';

import Axios from 'axios';

class App extends React.Component {

  state = {
    mainVideo: { comments: []},
    sideVideo: []
  }

  accessTime = (timestamp) => {
    let now = new Date(timestamp);

    let newDate = now.getDate();
    let newMonth = now.getMonth();
    let newYear = now.getFullYear();

    let newDay = newMonth + '/' + newDate + '/' + newYear;
    return newDay;
  }


  getVideoList() {
    Axios.get('https://project-2-api.herokuapp.com/videos?api_key=997fdb70-0e59-42e6-84d5-d4de9ea0f253')
    .then(response => {
      console.log(response);
      
      this.setState({
        sideVideo: response.data,
        id: response.data[0].id
      })
      
    })
  }

  getMainVideo(id) {
    Axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=997fdb70-0e59-42e6-84d5-d4de9ea0f253`)
    .then(response => {
      console.log(response.data);
      this.setState({
        mainVideo: response.data
      })
    })
  }

  /*postComments(id) {
    Axios.post(`https://project-2-api.herokuapp.com/videos/${id}/comments?api_key=997fdb70-0e59-42e6-84d5-d4de9ea0f253`, {
      name: 'Unknown Person',
      comments: 'Test 1'
    }).then(response => {
        console.log(response.data);
        this.setState({
          mainVideo[comments]: response.data
        })
      })
  }*/

 /* submitComment = (event) => {
    console.log(event);
    console.log(event.target.value);
    const { value, name } = event.target;
    /*this.setState({
      mainVideo[name] = value;
    });
  }*/

  
  componentDidMount() {
    this.getVideoList();
    this.getMainVideo('1af0jruup5gu');
    //this.postComments('1af0jruup5gu');
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
          <MainArticle mainVideo={this.state.mainVideo} accessTime={this.accessTime}/>
          <Form mainVideo={this.state.mainVideo} />
          <Comments mainVideo={this.state.mainVideo} accessTime={this.accessTime}/>
        </div>
        <VideoList mainVideo={this.state.mainVideo} sideVideo = {this.state.sideVideo}/>
      </>
    );
  }

}

export default App;
