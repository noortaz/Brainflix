import React from 'react';


  class VideoList extends React.Component {
  render() {
    return (
      <aside className="videos">
        <h4 className="videos--next">next video</h4>
        
        {this.props.sideVideo.map((item) => {
          if (item.id !== 0) {
            return (
              <div key={item.id} className="videos__list">
                <img className="videos__list__sample-image" src={item.image} alt="" />
                <div className="videos__list--description">
                  <p className="videos__list--description__title">{item.title}</p>
                  <p className="videos__list--description__channel">{item.channel}</p>
                </div>
              </div>
            )
          }
          
        })}
      </aside>
    );

    }
  }



export default VideoList;