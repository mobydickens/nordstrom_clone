import React, { Component } from 'react';

class Runway extends Component {
  render() {
    return (
      <div className='runway'>
        <div>
          <div className='runway-titles run-1-title'>
            <div className='run-nature'>THE NATURE OF SPRING</div>
            <div className='run-desc'>A new season is now in session, and with it come optimism, color and unexpected discoveries</div>
            <span className='underlined bold run-spacing'>Expore Spring 2019</span>
            <span className='underlined bold run-spacing'>Shop Now</span>
          </div>
          <div className='run-1'></div>
        </div>
        <div>
          <div className='runway-titles'>
            <div className='run-2-title'>RUNWAY</div>
            <div className='your-way bold'>your way</div>
            <div className='run2-spacing'>Our favorite trends from the spring 2019 collections.</div>
            <span className='underlined bold link-spacing-run2'>What's Now</span>
            <span className='underlined bold link-spacing-run2'>Women</span>
          </div>
          <div className='run-2'></div>
        </div>
      </div>
    );
  }
}

export default Runway;