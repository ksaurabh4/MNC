import React from 'react';
import './MainSection.css';

const MainSection = (props) => {
  return <main className='main'>{props.children}</main>;
};

export default MainSection;
