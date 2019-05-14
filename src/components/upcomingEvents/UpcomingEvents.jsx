import React from 'react';
import line from './../../assets/horizontalLine.png';


function UpcomingEvents() {
  return (
    <div className='Events'>
      <style jsx>{`
          .Events{
            background-color: #edeee2;
            width: 100%;
          }
          .master{
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #5f3917;
            font-size: 20px;
          }
          .line{
            width: 30px;
            margin: 20px;
          }
          .market{
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .label{
            color: #de6c28;
          }
          p{
            display: flex;
            align-items: center;
            color: #5f3917;
            margin: 5px;
          }
          .columns{
             display: flex;
             flex-flow: row nowrap;
             justify-content: space-around;
          }
          .marketLocation {
            display: flex;
            flex-flow: column nowrap;
            width: 300px;
            // line-height: 1;
          }
          `}</style>
        <div className="market">
          <img className="line" src={line} alt="brown horizontal line"/>
          <h3 className="master">Upcoming Events</h3>
          <img className="line" src={line} alt="brown horizontal line"/>
        </div>
        <div ClassName="columns">
          <div className="marketLocation">
            <h4 className="lable">Shemanski Park Market</h4>
            <p>The Shemanski Park Farmers Market is open on Wednesdays, from 10 am to 2 pm, from May thru October 2...</p>
            May 15 @ 10:00 am - 2:00 pm at Shemanski Park Market
          </div>
          <div className="marketLocation">
            <h4>PSU Market</h4>
            <p>May 18 @8:30 am - 2:00 pm at PSU Market</p>
          </div>
          <div className="marketLocation">
            <h4>Market Music: Jangano Marimba and Danda Marimba</h4>
            <p>Jangano Marimba means "Aliance of Wooden Voices" in Shona, the main language of Zimbabwe. The b...</p>
            <p>May 18 @ 11:00 am - 2:00pm at PSU Market</p>
          </div>
        </div>

    </div>
  )
}
export default UpcomingEvents;
