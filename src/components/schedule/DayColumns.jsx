import React from 'react';
import rooster from './../../assets/roostericon.png';
import clock from './../../assets/clockIcon.png';

function DayColumns() {
  return(
    <div className="containerDayColumns">
      <style jsx>{`
          .containerDayColumns{
            background-color: #edeee2;
            width: 100%;

          }
          h3{
            text-align: center;
          }
          h4{
            color: #de6c28;
          }
          a{
            color: #de6c28;
            text-decoration: none;
          }
          p{
            color: #5f3917;
          }
          .columnsDiv{
             display: flex;
             flex-direction: row;
             border: 1px solid red;


          }
          .roosterDiv {
            display: flex;
             border: 1px solid red;
          }
          .clockDiv {
            display: flex;
             border: 1px solid red;
          }



      `}</style>

    <h3>Find Your Market</h3>
    <div className="columnsDiv">
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
      <div className="sundayDiv">
        <h4>Sunday</h4>
        <a href="#">Lents International</a>
        <div className="roosterDiv">
          <img src={rooster} alt="icon image of rooster"/>
          <p>SE 92nd & Reedway</p>
        </div>
        <div className="clockDiv">
          <img src={clock} alt="icon image of clock"/>
          <p>Opens in June</p>
        </div>
        <a href="#">King</a>
        <div className="roosterDiv">
          <img src={rooster} alt="icon image of rooster"/>
          <p>NE 7th & Wygant</p>
        </div>
        <div className="clockDiv">
          <img src={clock} alt="icon image of clock"/>
          <p>Opens in May</p>
        </div>
      </div>
      <div className="wednesdayDiv">
        <h4>Wednesday</h4>
        <a href="#">Kenton</a>
        <div className="roosterDiv">
          <img src={rooster} alt="icon image of rooster"/>
          <p>N Denver & McClellan</p>
        </div>
        <div className="clockDiv">
          <img src={clock} alt="icon image of clock"/>
          <p>Open in June</p>
        </div>
        <a href="#">Shemanski Park</a>
        <div className="roosterDiv">
          <img src={rooster} alt="icon image of rooster"/>
          <p>SW Park & Main</p>
        </div>
        <div className="clockDiv">
          <img src={clock} alt="icon image of clock"/>
          <p>Open in May</p>
        </div>

    </div>
    </div>


    </div>
  )
}
export default DayColumns;
