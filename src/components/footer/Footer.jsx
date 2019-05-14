import React from 'react';
import Contacts from './Contacts';
import Twitter from './Twitter';
import Instagram from './Instagram';
import './styles.scss';

function Footer() {
  return(
    <div className="flex">
      <Instagram />
      <Contacts />
      <Twitter />
    </div>
  );
}

export default Footer;
