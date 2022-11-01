import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

// Loads with an infinity spin
export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <InfinitySpin type='Circles' color='#00BFFF' height={550} width={80} />
    </div>
  )
}
