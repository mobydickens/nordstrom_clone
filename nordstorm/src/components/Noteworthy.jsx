import React, { Component } from 'react';

class Noteworthy extends Component {
  render() {
    return (
      <div className='noteworthy'>
        <h1 className='new-title'>NEW & NOTEWORTHY</h1>
        <div className='note-photo-box'>
          <div>
            <div className='noteworthy-photos note-1'></div>
            <div className='space-noteworthy'>
              <p><b>Introducing Alex Mill</b></p>
              <p className='noteworthy-text'>Meet the perfectly uncomplicated pieces you'll reach for season after season.</p>
              <p className='noteworthy-text underlined'>Clothing</p>
            </div>
          </div>
          <div>
            <div className='noteworthy-photos note-2'></div>
            <div className='space-noteworthy'>
              <p><b>Sneaker Release Calendar</b></p>
              <p className='noteworthy-text'>Upcoming drops of the hottest styles and brands.</p>
              <span className='noteworthy-text underlined'>Don't Miss Out</span><span className='noteworthy-text underlined'>Women's Shoes</span><span className='noteworthy-text underlined'>Men's Sneakers</span>
            </div>
          </div>
          <div>
            <div className='noteworthy-photos note-3'></div>
            <div className='space-noteworthy'>
              <p><b>Introducing Alex Mill</b></p>
              <p className='noteworthy-text'>Meet the perfectly uncomplicated pieces you'll reach for season after season.</p>
              <p className='noteworthy-text underlined'>Clothing</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Noteworthy;