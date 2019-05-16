import React from 'react';
import Iframe from 'react-iframe';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram);

function Instagram() {
  const headerColor={
    color:'white'
  }
  return (
    <div>

      <h3 style={headerColor}>FOLLOW US ON INSTAGRAM</h3>
      <Iframe
        title="instagramGrid"
        src="//lightwidget.com/widgets/10897160832f5a1d8758fdc13cc5e178.html"
        scrolling="no"
        allowtransparency="true"
        class="lightwidget-widget"
        style="width:100%;border:0;overflow:hidden;">
      </Iframe>
      <a href='#'><button><FontAwesomeIcon icon={faInstagram}/> Follow on Instagram</button></a>
    </div>
  );
}

export default Instagram;
