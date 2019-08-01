import React from 'react';
import likeIcon from '../icons/SVG/Icon-likes.svg';
import viewIcon from '../icons/SVG/Icon-views.svg';


class MainArticle extends React.Component {
  render() {
    return (
      <article className="article">
        <h1 className="article__heading">{this.props.mainVideo.title}</h1>
        <div className="article__info">
          <div className="article--left">
            <h4 className="article--left__channel">By {this.props.mainVideo.channel}</h4>
            <div className="article--left__date">{this.props.mainVideo.timestamp}</div>
          </div>
          <div className="article--right">
            <img className="article--right__views" src={viewIcon} alt=""/>
            <p className="article--right__views--number">{this.props.mainVideo.views}</p>
            <img className="article--right__likes" src={likeIcon} alt=""/>
            <p className="article--right__likes--number">{this.props.mainVideo.likes}</p>
          </div>
        </div>
        <div className="article__body">
          {this.props.mainVideo.description}
        </div>
      </article>
    )
  }
}


export default MainArticle;