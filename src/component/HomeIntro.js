import React from 'react'
import ContentfulUtil from '../utils/ContentfulUtil'


class HomeIntro extends React.Component {

    // state = {
    // posts: []
    // }

    // componentDidMount() {
    // ContentfulUtil.fetchSectionByID('5rZdbG1QHQz6GbIOts7Soa').then(this.setPosts);
    // console.log(this)
    // }

    // setPosts = response => {
    // this.setState({
    //     posts: response.items
    // })
    // }

    render() {
        // console.log('test')
        // console.log(this.state.posts[0])
        
        return (

            <div className='Title-Para-Img-Block Black-box'>
                <div className="TPI-Text-Content">
                    <h1>Welcome, friend!</h1>
                    <p>This is Ready For Launch. A brand new show that explores the fascinating world of launching ideas and creating businesses. Your host Ian Black talks with early-stage startup founders and creators about the obstacles that get in the way of getting a project off the ground.</p>
                    <p>Available wherever you listen to your podcasts.</p>
                </div>
                <div className="podcast-links">
                    <a className='button' target="_blank" href="https://open.spotify.com/show/0FX2hELh5i2jYqGmBJkRhg?si=QZUE2RljRCyCd7-6f9mmkw&dl_branch=1">
                    Listen on Spotify
                    </a>
                    <a className='button' target="_blank" href="https://podcasts.apple.com/ca/podcast/ready-for-launch/id1561648024">
                    Listen on Apple Podcasts
                    </a>
                </div>
            </div>
        )
    }

}


export default HomeIntro
