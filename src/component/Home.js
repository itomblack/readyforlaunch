import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.PureComponent {
  render() {
    return (
      <>
        <h1>Welcome Home!</h1>
        <Link to="blog">Go to blog</Link>
        <div className="podcast-player">
          <iframe src="https://open.spotify.com/embed/show/0FX2hELh5i2jYqGmBJkRhg?theme=0" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
       <div className="podcast-links">
         <a className='button' target="_blank" href="https://open.spotify.com/show/0FX2hELh5i2jYqGmBJkRhg?si=QZUE2RljRCyCd7-6f9mmkw&dl_branch=1">
           Spotify
          </a>
         <a className='button' target="_blank" href="https://podcasts.apple.com/ca/podcast/ready-for-launch/id1561648024">
           Apple Podcasts
           </a>
       </div>
        
      </>
    );
  }
}

export default Home;