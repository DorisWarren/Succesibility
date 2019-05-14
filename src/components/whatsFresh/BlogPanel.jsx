import React from 'react';

function BlogPanel(props) {
  return(
    <div>
      <div>
        <h2>{props.headline}</h2>
        <a href='#'>/   READ ALL</a>
      </div>
      <img src={require(`../../assets/${props.imageName}.jpg`)}></img>
      <h3>{props.blogTitle}</h3>
      <div>

      </div>
      <p>{props.summary}</p>
      <p>{props.tags}</p>
    </div>
  );
}

export default BlogPanel;
