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
        <h2>{props.title}</h2>
        <div className="">
          <div className="">
            <Link
                className="icon-button"
                to={{ pathname: `${match.url}/${props.path}`, ...props }}>
              <i class="icono-arrow1-left"></i>
            </Link>
          </div>
      </div>
      </div>
      
    </>
  );
}

export default CardBlog
