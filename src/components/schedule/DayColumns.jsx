import React from 'react';
import rooster from './../../assets/roostericon.png';
import clock from './../../assets/clockIcon.png';
import line from './../../assets/horizontalLine.png';
import Rooster from './Rooster';

function DayColumns() {
  return(
    <article className="containerDayColumns">
      <style jsx>{`
          .containerDayColumns{
            background-color: #616429;
            width: 100%;
          }
          h2{
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #5f3917;
            font-size: 20px;
          }
          .line{
            width: 30px;
            margin: 20px;
            filter: brightness(0) invert(1);
          }
          .headerContainter{
            display: flex;
            justify-content: center;
            align-items: center;
          }
          h3{
            color: #f5d7c5;
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
          }
          .rooster {
            width:35px;
            margin-right: 10px;
          }
          .clock {
            width:35px;
            margin-right: 10px;
          }
          .title {
            color: #f5d7c5;
          }
          @media only screen and (max-width: 900px) {
            .columnsDiv {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          }
      `}</style>

    <div className="viewContainer">
      <header className="headerContainter">
        <img
          className="line"
          src={line}
          alt="brown horizontal line"
          aria-hidden="true"/>
        <h2  className="title">Find Your Market</h2>
        <img
          className="line"
          src={line}
          alt="brown horizontal line"
          aria-hidden="true"/>
      </header>
     <main className="columnsDiv">
      <section className="dayDiv">

        <h3>Saturday</h3>
        <a href="#">Portland State University</a>
          <p><img className="rooster" src={rooster} alt="icon image of rooster"/>
          SW Park & Montgomery</p>
          <p><img className="clock" src={clock} alt="icon image of clock"/>
          Open Saturdays Year Round Fall/Winter Hours - 2:00am to 2:00pm (Nov-March). Spring/Summer Hours- 8:30am to 2:00pm(April-Oct)</p>
      </section>
      <section className="dayDiv">
        <h3>Sunday</h3>
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
      </section>
      <section className="dayDiv">
        <h3>Wednesday</h3>
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
      </section>
    </main>
  </div>

    <Rooster/>
  </article>

  )
}
export default DayColumns;
