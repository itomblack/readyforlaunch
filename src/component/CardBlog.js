import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import * as Markdown from 'react-markdown'
import moment from 'moment'

const CardBlog = (props) => {
  let match = useRouteMatch();
  let maxCharInPreview = 36;
  return (
    <>
      <div className='blogpost-preview'>
        <div className="blogpost-preview-content">
          <h2>{props.title}</h2>
          <Link
              className="icon-button"
              to={{ pathname: `${match.url}/${props.path}`, ...props }}>
            <i className="icono-arrow1-left"></i>
          </Link>
        </div>
      </div>
      
    </>
  );
}

export default CardBlog
