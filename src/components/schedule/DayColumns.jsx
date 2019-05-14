import React from 'react';
import rooster from './../../assets/roostericon.png';
import clock from './../../assets/clockIcon.png';

function DayColumns() {
  return(
    <div>
      <style jsx>{`
          .roosterDiv {
            display: flex;
          }
          .clockDiv {
            display: flex;
          }



      `}</style>

    <h3>Find Your Market</h3>
    <div className="saturdayDiv">
      <h4>Saturday</h4>
      <a href="#">Portland State University</a>
      <div className="roosterDiv">
        <img src={rooster} alt="icon image of rooster"/>
        <p>SW Park & Montgomery</p>
      </div>
      <div className="clockDiv">
        <img src={clock} alt="icon image of clock"/>
        <p>Open Saturdays Year Round Fall/Winter Hours - 2:00am to 2:00pm (Nov-March). Spring/Summer Hours- 8:30am to 2:00pm(April-Oct)</p>
      </div>


      </div>


    </div>
  )
}
export default DayColumns;
