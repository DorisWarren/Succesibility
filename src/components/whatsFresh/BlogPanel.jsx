import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComments, faFolder } from '@fortawesome/free-solid-svg-icons';

library.add(faCalendar, faComments, faFolder);

function BlogPanel(props) {

  const black = {
    color: 'black',
  }
  return(
    <div className='blogPanel'>
      <style jsx>{`
          .blogPanel {
            width: 30%;
          }
          .headline {
            display: flex;
            justify-content: left;
            align-items: center;
          }
          img {
            width: 100%;
          }
          .fontColor {
            color: #A9672D;
          }
            `}</style>
          <div className='headline'>
        <h2>{props.headline}</h2>
        <a className="fontColor" href='#'>/   READ ALL</a>
      </div>
      <img src={require(`../../assets/${props.imageName}.jpg`)}></img>
      <h3>{props.blogTitle}</h3>
      <div>
        <FontAwesomeIcon icon='calendar'/> <a className='fontColor' href='#'>{props.blogDate}</a>
        <FontAwesomeIcon icon='comments'/> <a className='fontColor' href='#'>{props.comments}</a>
      </div>
      <p className='fontColor'>{props.summary}</p>
      <p className='fontColor'><FontAwesomeIcon style={black} icon='folder'/> {props.tags}</p>
    </div>
  );
}

export default BlogPanel;
