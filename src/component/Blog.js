import React from 'react'
// import BlogPreviewItem from './BlogPreviewItem'
import CardBlog from './CardBlog'
import ContentfulUtil from '../utils/ContentfulUtil'

class Blog extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    ContentfulUtil.fetchAllBlogPosts().then(this.setPosts);
  }

  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }

  render() {
    return (
      <div>
        <div className="podcast-player">
          <iframe src="https://open.spotify.com/embed/show/0FX2hELh5i2jYqGmBJkRhg?theme=0" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        
        <div className="blog-card-wrap">
        {
          this.state.posts.map(({fields}, i) =>
              <CardBlog key={i} {...fields} />
        )}
        </div>
        
      </div>
    )
  }
}

export default Blog
