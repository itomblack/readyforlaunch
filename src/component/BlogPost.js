import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import * as Markdown from 'react-markdown'
import ContentfulUtil from '../utils/ContentfulUtil'

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
      <Link to="/blog">Back to Blog</Link>
      <p>
        {moment(this.state.date).calendar(null, {
          sameDay: '[Today]',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM Do YYYY'
        })}
      </p>
      {this.state.featuredImage && <img src={'http:'+ this.state.featuredImage.fields.file.url + '?w=300&h=300'} alt={this.state.title} title={this.state.title}/>}
      <h1>{this.state.title}</h1>
      <Markdown source={this.state.content} />
    </>
  );

  render = () => {
    return this.renderBlogPost() ;
  }
}

export default BlogPost
