import React from 'react';
import './box.css';

const Box = ({ text }) => {
  return (
    <div className="styled-box">
      <div className='box'>
        <ul>
            <li className='text'>{text}</li>
        </ul>
      </div>
    </div>
  );
};

export default Box;
