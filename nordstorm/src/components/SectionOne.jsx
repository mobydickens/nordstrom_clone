import React, { Component } from 'react';

class SectionOne extends Component {
  render() {
    return (
      <div>
        <section className='first-section'>
          <div className='winter-sale sale'>WINTER SALE</div>
          <div className='winter-sale-details'>
            <p className='save-sub sale'>SAVE UP TO</p>
            <div className='percent-off sale'>40%</div>
            <p className='save-sub sale'>THROUGH FEBRUARY 24TH</p>
            <div className='what-sales'>
              <p className='p-spacing'>Women's Sale</p>
              <p className='p-spacing'>Men's Sale</p>
              <p className='p-spacing'>Kid's Sale</p>
              <p className='p-spacing'>Home Sale</p>
              <p className='p-spacing'>Women's Sale Clothing</p>
              <p className='p-spacing'>Women's Sale Shoes</p>
              <p className='p-spacing'>Sale Handbags and Accessories</p>
            </div>
          </div>
        </section>
        <div className='add1-offer'>Free shipping. Free returns. All the time.</div>
      </div>
    );
  }
}

export default SectionOne;