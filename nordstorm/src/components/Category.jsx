import React from 'react';

function Category() {
  return (
    <div>
      <div className='new-title'>SHOP BY CATEGORY</div>
      <div className='category'>
        <div className='cat-size'>
          <div className='cat-designer'></div>
          <div className='underlined cat-text'>Designer</div>
        </div>
        <div className='cat-size'>
          <div className='cat-women'></div>
          <div className='underlined cat-text'>Women</div>
        </div>
        <div className='cat-size'>
          <div className='cat-men'></div>
          <div className='underlined cat-text'>Men</div>
        </div>
        <div className='cat-size'>
          <div className='cat-kids'></div>
          <div className='underlined cat-text'>Kids</div>
        </div>
        <div className='cat-size'>
          <div className='cat-home'></div>
          <div className='underlined cat-text'>Home</div>
        </div>
        <div className='cat-size'>
          <div className='cat-frag'></div>
          <div className='underlined cat-text'>Beauty & Fragrance</div>
        </div>
      </div>
    </div>
  );
}

export default Category;