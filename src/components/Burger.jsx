import React, { useState } from 'react';

export const Burger = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <button onClick={handleClick}>
      <span className='line'></span>
      <span className='line'></span>
      <span className='line'></span>
    </button>
  );
};
