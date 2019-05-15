import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComments, faFolder } from '@fortawesome/free-solid-svg-icons';

library.add(faCalendar, faComments, faFolder);

function BlogPanel(props) {
 console.log(props.altTags)
  const black = {
    color: 'black',
    marginRight: '10px'
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
          .dateAndComments{
            display: flex;
            flex-flow: row nowrap;
            width: 40%;
            align-items: center;
            justify-content: space-around;
          }

            `}</style>
          <div className='headline'>
        <h2>{props.headline}</h2>
        <a className="fontColor"  href='#'>/   READ ALL</a>
      </div>
      <img src={require(`../../assets/${props.imageName}.jpg`)} alt={props.altTags}></img>
      <h3>{props.blogTitle}</h3>
      <div className="dateAndComments">
        <FontAwesomeIcon icon='calendar'/> <p className='fontColor' >{props.blogDate}</p>
        <FontAwesomeIcon icon='comments'/> <p className='fontColor' >{props.comments}</p>
      </div>
      <p className='fontColor'>{props.summary}</p>
      <p className='fontColor'><FontAwesomeIcon style={black} icon='folder'/> {props.tags}</p>
    </div>
  );
}

export default BlogPanel;
