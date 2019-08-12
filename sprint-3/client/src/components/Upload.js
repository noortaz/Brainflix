import React from 'react';
import uploadPreview from '../images/upload-preview.jpg';
import { Link } from 'react-router-dom';
import Axios from 'axios';

let now = new Date();
let time = now.getTime();
class Upload extends React.Component {

  state = {
    title: '',
    channel: 'Video Uploader',
    description: '',
    image: uploadPreview,
    views: 0,
    likes: 0,
    duration: '',
    timestamp: time,
    video: '',
    comments: [{
      name: "Micheal Lyons",
      comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
      id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
      likes: 0,
      timestamp: 1545162149000
    },
    {
      name: "Gary Wong",
      comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
      id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
      likes: 0,
      timestamp: 1544595784046
    },
    {
      name: "Theodore Duncan",
      comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
      id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
      likes: 0,
      timestamp: 1542262984046
    }]

  }


  postVideoList = () => {
    Axios.post('http://localhost:5000/videos', {
      title: this.state.title,
      channel: this.state.channel,
      image: this.state.image,
      description: this.state.description,
      views: this.state.views,
      likes: this.state.likes,
      duration: this.state.duration,
      timestamp: this.state.timestamp,
      video: this.state.video,
      comments: this.state.comments
    })
      .then(response => {
        console.log(response);
      })
  }


  submitHandler = (event) => {
    event.preventDefault();
    this.postVideoList();

  }

  uploadTitle = (event) => {
    const newTitle = event.target.value;
    this.setState({
      title: newTitle,
    })
  }

  uploadDescription = (event) => {
    const newDes = event.target.value;
    this.setState({
      description: newDes,
    })
  }

  componentDidMount() {
    //this.postVideoList();
    //this.uploadTitle();
    //this.submitHandler();
  }


  render() {

    return (
      <form action="" className="upload" onSubmit={this.submitHandler}>
        <h2 className="upload__heading">Upload video</h2>
        <div className="upload__container">
          <div className="upload__thumbnail">
            <label className="upload__content__label">Video Thumbnail</label>
            <img className="upload__content__image" src={this.state.image} alt="" />
          </div>
          <div className="upload__content">
            <div className="upload__content--message">
              <label className="upload__content__label">title your video</label>
              <textarea onChange={this.uploadTitle} className="upload__content__input" name="title"
                placeholder="Add a title to your video" ></textarea>
            </div>
            <div className="upload__content--message">
              <label className="upload__content__label">Add a video description</label>
              <textarea onChange={this.uploadDescription} className="upload__content__input" name="description" rows="8" cols="45"
                placeholder="Add a description to your video" ></textarea>
            </div>
          </div>
        </div>
        <div className="upload--submission">
          <button className="button-publish" method="POST" type="submit">Publish</button>
          <Link to="/upload" className="upload--cancel">CANCEL</Link>
        </div>
      </form>
    )
  }
}

export default Upload;