import React from 'react';



class Comments extends React.Component {
  
  render() {
    const accessTime = this.props.accessTime;
    return (
      <section className="comments">
        {this.props.mainVideo.comments.map((item) => {
          return (
            <div key={item.id} className="comments__box">
              <div className="comments__box__image"><img className="comments__box__image" src="" alt="" /></div>
              <div className="comments__box__content">
                <div className="comments__box__name">{item.name}</div>
                <div className="comments__box__date">{accessTime(item.timestamp)}</div>
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