import React from 'react';
import amica from '../../assets/amica.png';
import daveskillerbread from '../../assets/daveskillerbread.png';
import pge from '../../assets/pge.jpg';

function Sponsors() {
return (
    <div>
        <style jsx>{`

          .container{
            // height: 68px;
            // width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            // border: 1px solid red;
          }
          img {
            width: 20%;
            margin-right: 10%;
            display: inline;

          }
          .header {
            color: #e15f26;
            font-size: 29px;
            font-weight:700;
            font-family: open sans;
            letter-spacing: 3px;
            line-height: 37.7px;
            text-align: center;
            margin-block-start: 50px;
            vertical-align: baseline;

          }
          .amica{
            width:250px;
            height:193px;
            padding:25px;
            padding-left: 50px;
          }
          .daveskillerbread {
            padding: 25px;
            display: inline;
            position: relative;
            text-align: center;
            width: 150px;
          }

          .pge {
            padding: 25px;
            width:265px;
            height:74px;
          }
          .hover-image: hover {
            display: inline;
          }
          // a:hover {
          //   // height:420;
          //   // width:204;
          //   position: absolute;

          }
        `}</style>
        <h1 className="header">PROUDLY SPONSORED BY</h1>
        <div className="container">
          <a href="https://www.amica.com/" > <img className="amica"src={amica} alt='image of amica'/> </a>
          <a href="http://www.daveskillerbread.com">
          <img className="daveskillerbread" src={daveskillerbread} alt='image of daveskillerbread'/> </a>
          <img className="pge" src={pge}
           alt='image of pge'/>
          </div>
      </div>
  );
}

export default Sponsors;
