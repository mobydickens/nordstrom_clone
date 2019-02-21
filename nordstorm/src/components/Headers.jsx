import React from 'react';

function Headers() {
    return (
      <header>
        <div className='black-header headers'>
          <p className="black-offer"><b>Free shipping. Free returns.</b> All the time.<u> See details</u></p>
        </div>
        <div className='white-header headers'>
          <h1>NORDSTORM</h1>
          <div className='menu'>
            <p className='menu-items'>Designer</p>
            <p className='menu-items'>Women</p>
            <p className='menu-items'>Men</p>
            <p className='menu-items'>Kids</p>
            <p className='menu-items'>Home & Gifts</p>
            <p className='menu-items'>Beauty</p>
            <p className='menu-items'>Sale</p>
            <p className='menu-items'>What's Now</p>
          </div>
          <div className='menu'>
            <p className='menu-items2'>Search</p>
            <p className='menu-items2'>Sign in</p>
            <p className='menu-items2'>Key</p>
          </div>
        </div>
      </header>
    );
}

export default Headers;