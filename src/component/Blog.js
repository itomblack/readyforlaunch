import React from 'react'
import BlogPreviewItem from './BlogPreviewItem'
import ContentfulUtil from '../utils/ContentfulUtil'
import { Link } from 'react-router-dom';

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
        <Link to="home">Go to home</Link>
        <h1>Blog</h1>
        {
          this.state.posts.map(({fields}, i) =>
              <BlogPreviewItem key={i} {...fields} />
        )}
      </div>
    )
  }
}

export default Blog
