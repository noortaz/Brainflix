import React from 'react';
import likeIcon from '../icons/SVG/Icon-likes.svg';
import viewIcon from '../icons/SVG/Icon-views.svg';


class MainArticle extends React.Component {
  render() {
    return (
      <article className="article">
        <h1 className="article__heading">BMX Rampage: 2018 Highlights</h1>
        <div className="article__info">
          <div className="">
            <h4 className="article__channel">By Red Cow</h4>
            <div className="article__date">12/18/2018</div>
          </div>
          <div className="">
            <img className="article__views" src={viewIcon} alt=""/>
            <p className="article__views--number">1,001,023</p>
            <img className="article__likes" src={likeIcon} alt=""/>
            <p className="article__likes--number">110,985</p>
          </div>
        </div>
        <div className="article__body">
          On a gusty day in Southern Utah, a group of 25
          daring mountain bikers blew the doors off what is
          possible on two wheels, unleashing some of the
          biggest moments the sport has ever seen. While
          mother nature only allowed for one full run before
          the conditions made it impossible to ride, that was
          all that was needed for event veteran Kyle Strait,
          who won the event for the second time -- eight years
          after his first Red Cow Rampage title
        </div>
      </article>
    )
  }
}


export default MainArticle;