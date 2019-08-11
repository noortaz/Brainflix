import React from 'react';
import uploadPreview from '../images/upload-preview.jpg';
import {Link} from 'react-router-dom';
import Axios from 'axios';


class Upload extends React.Component {

  state = {
    title: '',
    channel: 'Video Uploader',
    description: '',
    image: "https://i.imgur.com/q3lL1cE.jpg"
  }

  
  postVideoList = () => {
  Axios.post('http://localhost:5000/videos', {
    title: this.state.title,
    channel: this.state.channel,
    image: "https://i.imgur.com/q3lL1cE.jpg",
    description: this.state.description
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
    const newDes = event.target.value;
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
                <img className="upload__content__image" src={this.state.image} alt=""/>
              </div>             
              <div className="upload__content">
                <div className="upload__content--message">
                  <label className="upload__content__label">title your video</label>

                  <textarea onChange={this.uploadTitle} className="upload__content__input" name="title"
                placeholder="Add a title to your video" ></textarea>

                <p>{this.state.title}</p>
                </div>
                <div className="upload__content--message">
                  <label className="upload__content__label">Add a video description</label>

              <textarea onChange={this.uploadDescription} className="upload__content__input" name="description" rows="8" cols="45"
                placeholder="Add a description to your video" ></textarea>
              <p>{this.state.description}</p>

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