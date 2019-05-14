import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle, faClock, faPhone, faInbox, faCog } from '@fortawesome/free-solid-svg-icons';

library.add(faBicycle, faClock, faPhone, faInbox, faCog);

function Contacts() {
  return (
    <div>
      <h5>CONTACT OUR OFFICE</h5>
      <p><FontAwesomeIcon icon="bicycle"/> 240 N Broadway, Suite 129 Portland, Oregon</p>

    <p><FontAwesomeIcon icon="clock"/> 9am - 5pm, Monday - Friday</p>

  <p><FontAwesomeIcon icon="phone"/> (503) 241 - 0032</p>

  <p><FontAwesomeIcon icon="inbox"/> contact@portlandfarmersmarket.org</p>

      <p><FontAwesomeIcon icon="cog"/> <a href='#'>Terms</a> | <a href='#'>Privacy</a> | <a href='#'>Cookies</a> | <a href='#'>Refunds</a> </p>

    </div>
  );
}

export default Contacts;
