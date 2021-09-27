import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import * as Markdown from 'react-markdown'
import moment from 'moment'

const CardBlog = (props) => {
  let match = useRouteMatch();

  // REMOVE
  console.log(props)
  
  return (
    <>
      <div className='blogpost-preview'>
        <div className="blogpost-preview-content">
          <div className="">
            <h4>{props.category}</h4>
            <h3>{props.title}</h3>
          </div>
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
