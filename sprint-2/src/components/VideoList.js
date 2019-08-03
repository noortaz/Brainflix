import React from 'react';
import {Link} from 'react-router-dom';


  class VideoList extends React.Component {

  render() {
    const filterID = this.props.mainVideo.id;
    const vidList = this.props.sideVideo;
    const shortList = vidList.filter((nowPlaying) => nowPlaying.id !== filterID);
    
    return (
      <aside className="videos">
        <h4 className="videos--next">next video</h4>
        {shortList.map((item) => {
            return (
              <Link key={item.id} to={`/videos/${item.id}`}>
                <div  className="videos__list">
                  <img className="videos__list__sample-image" src={item.image} alt="" />
                  <div className="videos__list--description">
                    <p className="videos__list--description__title">{item.title}</p>
                    <p className="videos__list--description__channel">{item.channel}</p>
                  </div>
                </div>
              </Link>
            ) 
        })}
      </aside>
    );

    }
  }



export default VideoList;