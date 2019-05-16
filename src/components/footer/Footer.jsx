import React from 'react';
import Contacts from './Contacts';
import Twitter from './Twitter';
import Instagram from './Instagram';


function Footer() {
  return(
    <footer className="flex">

      <style jsx>{`
        .flex {
          display: flex;
          justify-content: space-around;
          background-color: #9fa845;
          color: white;
          padding-top: 2%;
          background-color:#616429;
        }

        @media only screen and (max-width: 900px) {
          .flex {
            flex-direction: column;
            align-items: center;
          }
        }
            `}</style>
      
      <Instagram />
      <Contacts />
      <Twitter />
    </footer>
  );
}

export default Footer;
