import React, { useState } from 'react';
import './BookCard.css';
import example from '../Main/Title-section/TitleSectionBackground.jpg'

function BookCard() {

  return (
    <div className="bookCard">

          {/* <div className="bookCover">
            <div className="bookTop"></div>
            <div className="bookSide"></div>
              <div className="bookTop">
              <img  src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-top.svg" alt="book-top" />
              </div>
              <div className="bookSide">
                <img src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg" alt="book-side" /> 
              </div>
          </div> */}


          <div className="container">
            <div className="cube">
              <div className="side front"></div>
              <div className="side back"></div>
              <div className="side left"></div>
              <div className="side right"></div>
              <div className="side top"></div>
              <div className="side bottom"></div>
            </div>
          </div>
      
    </div>
  );
}

export default BookCard;
