import React from 'react';
import line from './../../assets/horizontalLine.png';


function UpcomingEvents() {
  return (
    <main className='Events'>
      <style jsx>{`
          .Events{
            display: flex;
            flex-flow: column nowrap;
            background-color: #edeee2;
            width: 100%;
            color:
          }
          .Events h4, .Events p {
            color: #A05622;
          }
          .columns{
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;


          }
          .master{
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #5f3917;
            font-size: 20px;
          }
          .linee{
            width: 30px;
            margin: 20px;
          }
          .market{
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .label p{
            display: flex;
            align-items: center;
            color: #5f3917;
            margin: 5px;
          }

          .marketLocation {
            display: flex;
            flex-flow: column nowrap;
            width: 300px;
            color: color: #A05622;
          }

          .marketLocation h3 {
            color: #A05622;
          }


          @media only screen and (max-width: 900px) {
            .columns {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          }
          `}</style>
        <div className="viewContainer">
        <header className="market">
          <img
            className="linee"
            src={line}
            alt="brown horizontal line"
            aria-hidden="true"/>
          <h2 className="master">Upcoming Events</h2>
          <img
            className="linee"
            src={line}
            alt="brown horizontal line"
            aria-hidden="true"/>
        </header>


        <section className="columns">


          <time className="marketLocation">
            <h3>Shemanski Park Market</h3>
            <p>The Shemanski Park Farmers Market is open on Wednesdays, from 10 am to 2 pm, from May thru October 2...</p>
            <p>May 15 @ 10:00 am - 2:00 pm at Shemanski Park Market</p>
          </time>


          <time className="marketLocation">
            <h3>PSU Market</h3>
            <p>May 18 @8:30 am - 2:00 pm at PSU Market</p>
          </time>


          <time className="marketLocation">
            <h3>Market Music: Jangano Marimba and Danda Marimba</h3>
            <p>Jangano Marimba means "Aliance of Wooden Voices" in Shona, the main language of Zimbabwe. The b...</p>
            <p>May 18 @ 11:00 am - 2:00pm at PSU Market</p>
          </time>

        </section>
      </div>
      </main>




  )
}
export default UpcomingEvents;
