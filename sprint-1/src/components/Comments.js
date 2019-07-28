import React from 'react';



class Comments extends React.Component {
  render() {
    return (
      <section className="comments">
        {this.props.mainVideo.comment.map((item, index) => {
          return (
            <div key={item.id} className="comments__box">
              <div className="comments__box__image"><img className="comments__box__image" src="" alt="" /></div>
              <div className="comments__box__content">
                <div className="comments__box__name">{item.name}</div>
                <div className="comments__box__date">{item.timestamp}</div>
              </div>
              <div className="comments__box__message">{item.comment}</div>
            </div>
          )
        })}
      </section>
    )
  }
}




export default Comments;