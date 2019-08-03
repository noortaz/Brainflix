import React from 'react';
import video0 from '../images/video-list-0.jpg';
import {Link} from 'react-router-dom';




class Upload extends React.Component {
  render() {
    return (
        <>
          <form action="" className="form">
            <h2 className="form__heading">Upload video</h2>
            <div className="form__container">
              <label className="form__content__label">Video Thumbnail</label>
              <img className="form__content__image" src={video0} alt="" />
              <div className="form__content">
                <div className="form__content--message">
                  <label className="form__content__label">title your video</label>
                  <textarea className="form__content__input form__content__messagebox" name="message" rows="6" cols="45"
                    placeholder="Add a title to your video"></textarea>
                </div>
              <div className="form__content--message">
                <label className="form__content__label">Add a video description</label>
                <textarea className="form__content__input form__content__messagebox" name="message" rows="6" cols="45"
                  placeholder="Add a description to your video"></textarea>
              </div>
              <button className="button-comment" method="POST" type="submit">Publish</button>
              <Link to="/upload">CANCEL</Link>

              </div>
            </div>
          </form>

        </>
    )
  }
}

export default Upload;