import React from 'react';
import HomeIntro from "./HomeIntro";
import HostIntro from "./HostIntro";
import ContentfulUtil from '../utils/ContentfulUtil'
import './Styles-Home.scss';


class Home extends React.PureComponent { 


  render() {
    return (
      <>
      <div className='body-wrap'>
        {/* Podcast Show */}
        <div className="podcast-player">
          <iframe src="https://open.spotify.com/embed/show/0FX2hELh5i2jYqGmBJkRhg?theme=0" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>

      {/* Intro Block */}
      <HomeIntro/> 

      {/* Will need to make a new component and import it */}
      <HostIntro/> 

      {/* Host Block */}


      </div>
        
      </>
    );
  }
}

export default Home;