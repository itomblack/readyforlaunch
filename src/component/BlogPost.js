import React from 'react'
import { Link } from 'react-router-dom'
import * as Markdown from 'react-markdown'
import ContentfulUtil from '../utils/ContentfulUtil'
import './Styles-Blog-Post.scss';

class BlogPost extends React.Component {
  state = {
    date: "",
    title: "",
    featuredImage: "",
    content: ""
  };

  setPost = post => {
    if (post && post.items.length) {
      this.setState({
        date: post.items[0].fields.date,
        title: post.items[0].fields.title,
        featuredImage: post.items[0].fields.featuredImage,
        content: post.items[0].fields.content
      });
    }
  };

  componentDidMount() {
    if (this.isBlogPostInProps()) {
      this.setState({
        date: this.props.location.date,
        title: this.props.location.title,
        featuredImage: this.props.location.featuredImage,
        content: this.props.location.content
      });
    } else {
      ContentfulUtil.fetchPostByPathName(this.props.match.params.blogPost)
          .then((response) => this.setPost(response));
    }
  };

  isBlogPostInProps = () => 
      this.props &&
      this.props.location &&
      this.props.location.date &&
      this.props.location.title &&
      this.props.location.featuredImage &&
      this.props.location.content;


  renderBlogPost = () => (
    <>
    <div className="body-wrap">
      <div className="Blog-post">
        {/* Image */}  
        {this.state.featuredImage && <div className='img-wrap'><img src={'http:'+ this.state.featuredImage.fields.file.url + '?w=800&h=400'} alt={this.state.title} title={this.state.title}/></div>}
        {/* Title */}  
        <h1>{this.state.title}</h1>
        {/* Article */}
        <Markdown source={this.state.content} />
        {/* Link Back to blog */}  
        <Link to="/blog">Back to Blog</Link>
      </div>
    </div>
   
    </>
  );

  render = () => {
    return this.renderBlogPost() ;
  }
}

export default BlogPost
