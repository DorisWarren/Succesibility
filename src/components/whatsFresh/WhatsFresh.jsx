import React from 'react';
import BlogPanel from './BlogPanel';


function WhatsFresh() {
  return(
    <div>

      <BlogPanel
        headline='VENDORS'
        imageName='asparagus'
        blogTitle="Spring's Resplendence"
        summary='Days are lengthening, seeds have sprouted, and we’re beginning to taste spring (asparagus, anyone?). Spring brings so much bounty to the Pacific Northwest and the...'
        tags='MARKET BOUNTY, NEWS, VENDORS' />
      <BlogPanel
        headline='NEWS'
        imageName='contestants'
        blogTitle='2019 Portland Farmers Market Reusable Bag Design Contest Entries Wanted'
        summery='COUNTRY Financial® and Portland Farmers Market are inviting students to submit a design for the 2019 Portland Farmers Market Reusable Bag Design Contest. High school...'
        tags='SPONSORS' />
      <BlogPanel
        headline='RECIPES'
        imageName='pickledVeggies'
        blogTitle='Top 6 Health Benefits of Fermented Foods'
        summary='Fermented products - available in abundance at the Portland Farmers Market - include kombucha, kimchi, hot sauce, sourdough bread and more! Learn more about the many health benefits of consuming fermented foods!'
        tags='RECIPES' />
    </div>
  );
}

export default WhatsFresh;
