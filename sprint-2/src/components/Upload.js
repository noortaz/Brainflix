import React from 'react';
import uploadPreview from '../images/upload-preview.jpg';
import {Link} from 'react-router-dom';




class Upload extends React.Component {
  render() {
    return (
        <>
          <form action="" className="upload">
            <h2 className="upload__heading">Upload video</h2>
            <div className="upload__container">
              <div className="upload__thumbnail">
                <label className="upload__content__label">Video Thumbnail</label>
                <img className="upload__content__image" src={uploadPreview} alt="" />
              </div>
              
              <div className="upload__content">
                <div className="upload__content--message">
                  <label className="upload__content__label">title your video</label>
                  <textarea className="upload__content__input" name="title"
                    placeholder="Add a title to your video"></textarea>
                </div>
                <div className="upload__content--message">
                  <label className="upload__content__label">Add a video description</label>
                  <textarea className="upload__content__input" name="description" rows="8" cols="45"
                    placeholder="Add a description to your video"></textarea>
                </div>  
              </div>
            </div>
            <div className="upload--submission">
              <button className="button-publish" method="POST" type="submit">Publish</button>
              <Link to="/upload" className="upload--cancel">CANCEL</Link>
            </div>
          </form>

        </>
    )
  }
}

export default Upload;