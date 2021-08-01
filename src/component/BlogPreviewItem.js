import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import * as Markdown from 'react-markdown'
import moment from 'moment'

const BlogPreviewItem = (props) => {
  let match = useRouteMatch();
  let maxCharInPreview = 36;
  return (
    <>
      <div className='blogpost-preview'>
        <h2>{props.title}</h2>
        <Markdown
          source={
            props.content.split(" ").splice(0,maxCharInPreview).join(" ").concat('...')
          }
        />
        <div className="">
          <div className="">
            <Link
                className="button"
                to={{ pathname: `${match.url}/${props.path}`, ...props }}>
              Read More
            </Link>
          </div>
        <div className="">
          <p className="">
          {moment(props.date).calendar(null, {
              sameDay: '[Today]',
              lastDay: '[Yesterday]',
              lastWeek: '[Last] dddd',
              sameElse: 'MMM Do YYYY'
            })}
          </p>
        </div>
      </div>
      </div>
      
    </>
  );
}

export default BlogPreviewItem
