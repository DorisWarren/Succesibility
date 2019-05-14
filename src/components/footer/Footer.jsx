import React from 'react';
import Iframe from 'react-iframe';
import './styles.scss';

function Footer() {
  return(
    <div className="flex">
      <div>
        <h5>Follow Us on Instagram</h5>
        <Iframe src="//lightwidget.com/widgets/10897160832f5a1d8758fdc13cc5e178.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></Iframe>
      </div>
      <div>
        <h5>Contact Our Office</h5>
      </div>
      <div>
        <h5>Follow Us on Twitter</h5>
        <a className="twitter-timeline" data-width="400" data-height="800" href="https://twitter.com/portlandfarmers?ref_src=twsrc%5Etfw">Tweets by portlandfarmers</a>
      </div>
    </div>
  );
}

export default Footer;
