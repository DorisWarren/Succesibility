import React from 'react';
import amica from '../../assets/amica.png';
import daveskillerbread from '../../assets/daveskillerbread.png';
import pge from '../../assets/pge.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

library.add(faLink);

function Sponsors() {
return (
    <section className="main-container">
      <style jsx>{`
        .main-container{
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          position: relative;
          flex-direction: column;
          width: 90%;
          margin: auto;
          max-width: 1140px;
        
        }
        .container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30%;
          height: 200px;
          text-align: center;
        }
        .pge {
          max-height: 150px;
        }

        .logos {
          display: flex;
          width: 100%;
          margin: auto;
          align-items: center;
          height: 300px;
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
          display: block;
        }
        .daveskillerbread {
          display: inline;
          position: relative;
          text-align: center;
          width: 150px;
        }

        .overlayHover {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: .5s ease;
          background-color: rgb(10,1,1);
          cursor: pointer;
        }

        .container:hover .overlayHover {
          opacity: .9;
        }

        .text {
            color: white;
            font-size: 20px;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            text-align: center;
          }
          @media only screen and (max-width: 900px) {
            .logos {
              display: flex;
              flex-direction: column;
              align-items: center;
              height: auto;
            }
            .container {
              width: 90%;
            }
          }
            `}</style>
          <h2 className="header">PROUDLY SPONSORED BY</h2>
      <div className="logos">


        <figure className="container">
            <img className="amica" src={amica} alt='Amica Company Logo'/>
          <div className="overlayHover">
            <div
              className="text"
              role="link">
              <a href="https://www.amica.com/" >
                <FontAwesomeIcon icon='link'aria-label='Checkout Amicas website.'/>
                Go to Amicas Website
              </a>
              </div>
          </div>
        </figure>


        <figure className="container">
          <img className="daveskillerbread" src={daveskillerbread} alt='Daves Killer Bread Company Logo'/>
          <div className="overlayHover">
            <div className="text"
                role="link">
              <a href="http://www.daveskillerbread.com" aria-label="Checkout Daves Killer Bread website">
                <FontAwesomeIcon icon='link'/>
                Go to Daves Killer Bread Website
              </a>
            </div>

          </div>
        </figure>


        <figure className="container">
          <img className="pge" src={pge}
           alt='PGE Company Logo'/>
       </figure>


      </div>
    </section>
  );
}

export default Sponsors;
