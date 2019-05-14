import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle, faClock, faPhone, faInbox, faCog } from '@fortawesome/free-solid-svg-icons';

library.add(faBicycle, faClock, faPhone, faInbox, faCog);

function Contacts() {
  return (
    <div>
      <h1>CONTACT OUR OFFICE</h1>
        <FontAwesomeIcon icon="bicycle"/>
        <FontAwesomeIcon icon="clock"/>
          <FontAwesomeIcon icon="phone"/>
            <FontAwesomeIcon icon="inbox"/>
              <FontAwesomeIcon icon="cog"/>
    </div>
  );
}

export default Contacts;
