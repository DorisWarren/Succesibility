import React from 'react';
import rooster from './../../assets/roostericon.png';
import clock from './../../assets/clockIcon.png';
import line from './../../assets/horizontalLine.png';
import Rooster from './Rooster';

function DayColumns() {
  return(
    <div className="containerDayColumns">
      <style jsx>{`
          .containerDayColumns{
            background-color: #edeee2;
            width: 100%;
          }
          h3{
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #5f3917;
            font-size: 20px;
          }
          .line{
            width: 30px;
            margin: 20px;
          }
          .headerContainter{
            display: flex;
            justify-content: center;
            align-items: center;
          }
          h4{
            color: #de6c28;
          }
          a{
            color: #de6c28;
            text-decoration: none;
          }
          p{
            display: flex;
            align-items: center;
            color: #5f3917;
            margin: 5px;
          }
          .columnsDiv{
             display: flex;
             flex-flow: row nowrap;
             justify-content: space-around;
          }
          .dayDiv {
            display: flex;
            flex-flow: column nowrap;
            width: 300px;
            // line-height: 1;
          }
          .rooster {
            width:35px;
          }
          .clock {
            width:35px;
          }
      `}</style>
    <div className="headerContainter">
      <img className="line" src={line} alt="brown horizontal line"/>
      <h3>Find Your Market</h3>
      <img className="line" src={line} alt="brown horizontal line"/>
    </div>
    <div className="columnsDiv">
      <div className="dayDiv">
        <h4>Saturday</h4>
        <a href="#">Portland State University</a>
          <p><img className="rooster" src={rooster} alt="icon image of rooster"/>
          SW Park & Montgomery</p>
          <p><img className="clock" src={clock} alt="icon image of clock"/>
          Open Saturdays Year Round Fall/Winter Hours - 2:00am to 2:00pm (Nov-March). Spring/Summer Hours- 8:30am to 2:00pm(April-Oct)</p>
      </div>
      <div className="dayDiv">
        <h4>Sunday</h4>
        <a href="#">Lents International</a>
          <p><img className="rooster" src={rooster} alt="icon image of rooster"/>
          SE 92nd & Reedway</p>
          <p><img className="clock"src={clock} alt="icon image of clock"/>
        Opens in June</p>
      <br/>
      <br/>

        <a href="#">King</a>
          <p><img className="rooster" src={rooster} alt="icon image of rooster"/>
          NE 7th & Wygant</p>
          <p><img className="clock"src={clock} alt="icon image of clock"/>
          Opens in May</p>
      </div>
      <div className="dayDiv">
        <h4>Wednesday</h4>
        <a href="#">Kenton</a>
          <p><img className="rooster" src={rooster} alt="icon image of rooster"/>
          N Denver & McClellan</p>
          <p><img className="clock"src={clock} alt="icon image of clock"/>
          Open in June</p>
          <br/>
          <br/>
        <a href="#">Shemanski Park</a>
          <p><img className="rooster" src={rooster} alt="icon image of rooster"/>
        SW Park & Main</p>
       <p><img className="clock" src={clock} alt="icon image of clock"/>
          Open in May</p>
      </div>
    </div>
    <Rooster/>
  </div>
  )
}
export default DayColumns;
