import React from 'react';
import avatar from '../images/avatar.jpg'


class Form extends React.Component {
  render() {
    return (
      <form action="" className="form">
        <h2 className="form__heading">3 comments</h2>
        <div className="form__container">
          <img className="form__content__image" src={avatar} alt=""/>
            <div className="form__content">
              <div className="form__content--message">
                <label className="form__content__label">join the conversation</label>
                <textarea className="form__content__input form__content__messagebox" name="message" rows="6" cols="45"
                  placeholder="Add a new comment"></textarea>
              </div>
              <button className="button-comment" method="POST" type="submit">Comment</button>
            </div>
        </div> 
      </form>
    )
  }
}


export default Form;