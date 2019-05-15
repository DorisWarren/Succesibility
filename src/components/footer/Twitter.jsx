import React from 'react';

function Twitter() {
  return(
    <div>
      <style jsx>{`
          a .customisable-hightlight {
            color: white !important;
          }`}</style>
      <h5>FOLLOW US ON TWITTER</h5>
      <a className="twitter-timeline" data-height="350" data-theme="dark" data-link-color="#ffffff" data-chrome="transparent" data-tweet-limit="1" data-aria-polite="assertive" href="https://twitter.com/portlandfarmers?ref_src=twsrc%5Etfw">Recent Tweet by portlandfarmers</a>
    </div>
  );
}

export default Twitter;
