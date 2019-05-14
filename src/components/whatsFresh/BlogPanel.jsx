import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComments, faFolder } from '@fortawesome/free-solid-svg-icons';

library.add(faCalendar, faComments, faFolder);

function BlogPanel(props) {
  return(
    <div className='blogPanel'>
      <div>
        <h2>{props.headline}</h2>
        <a href='#'>/   READ ALL</a>
      </div>
      <img src={require(`../../assets/${props.imageName}.jpg`)}></img>
      <h3>{props.blogTitle}</h3>
      <div>
        <FontAwesomeIcon icon='calendar'/> <a href='#'>{props.blogDate}</a>
        <FontAwesomeIcon icon='comments'/> <a href='#'>{props.comments}</a>
      </div>
      <p>{props.summary}</p>
      <p><FontAwesomeIcon icon='folder'/> {props.tags}</p>
    </div>
  );
}

export default BlogPanel;
