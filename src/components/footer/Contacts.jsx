import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle, faClock, faPhone, faInbox, faCog } from '@fortawesome/free-solid-svg-icons';

library.add(faBicycle, faClock, faPhone, faInbox, faCog);

function Contacts() {
  const headerColor={
    color:'white'
  }
  return (
    <footer>
      <style jsx>{`
          p {
            color: #f4e2d3;
          }
          a {
            color: #f6d8c7;
          }
          .icons {
            margin-right: 10px;
          }
            `}</style>
          <h3 style={headerColor}>CONTACT OUR OFFICE</h3>
      <p><FontAwesomeIcon className="icons" icon="bicycle"/> 240 N Broadway, Suite 129 Portland, Oregon</p>

    <p><FontAwesomeIcon className="icons" icon="clock"/> 9am - 5pm, Monday - Friday</p>

  <p><FontAwesomeIcon className="icons" icon="phone"/> (503) 241 - 0032</p>

  <p><FontAwesomeIcon className="icons" icon="inbox"/> contact@portlandfarmersmarket.org</p>

      <p><FontAwesomeIcon className="icons" icon="cog"/> <a href='#'>Terms</a> | <a href='#'>Privacy</a> | <a href='#'>Cookies</a> | <a href='#'>Refunds</a> </p>

    </footer>
  );
}

export default Contacts;
