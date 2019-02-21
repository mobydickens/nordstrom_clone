import React from 'react';

function WearToWhere() {
  return (
    <div className='wear'>
      <div className='w-title-parent'>
        <i class="fas fa-location-arrow"></i>
        <div className='wear-title'>Wear to Where</div>
      </div>
      <div className='every-occasion'>LOOKS FOR EVERY OCCASION</div>
      <div className='wear-box'>
        <div className='wear-lady'>
          <div className='dress-code'>
            <p className='bold'>Dress Code: Perfected</p>
            <p>Discover updated pieces for every office style</p>
            <p className='underlined'>Work clothing, shoes & accessories</p>
          </div>
        </div>
        <div className='travel-box'>
          <div className='wear-travel'></div>
          <div className='travel-code'>
            <p className='bold'>Pack Your Bags</p>
            <p className='v-essentials'>We've got all your vacation essentials</p>
            <p className='underlined'>Vacation</p>
          </div>
        </div>
        <div className='prom-box'>
          <div className='wear-prom'></div>
          <div className='travel-code'>
            <p className='bold'>What's Your Prom Style?</p>
            <p className='v-essentials'>Find your perfect outfit for your biggest night of the year</p>
            <span className='underlined v-spacing'>Prom</span><span className='underlined'>Women</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WearToWhere;