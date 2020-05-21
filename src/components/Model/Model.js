import React from 'react';
import ReactDOM from 'react-dom';
import './Model.css';

const Model = (props) => {
  return ReactDOM.createPortal(
    <div className='model'>
      <div
        className='model__body'
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className='model__heading'>{props.modelHeading}</div>
        <div className='model__message'>{props.modelMessage}</div>
        <div className='model__action'>{props.modelActions}</div>
      </div>
    </div>,
    document.querySelector('#model')
  );
};

export default Model;
