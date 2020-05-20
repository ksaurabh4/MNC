import React from 'react';
import './List.css';
import { Link } from 'react-router-dom';
const List = (props) => {
  const listItem = (
    <div className='list__item'>
      <div className='list__content'>
        <h3 className='list__item__heading'>
          Two friends building the future for TV with Molotov
        </h3>
        <p className='list__item__body'>
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis.
        </p>
        <div className='list__item__meta'>
          <div className='item__widget'>
            <div className='list__item__meta__img'>
              <img src='img/profile-pic.jpg' />
            </div>
            <div className='list__item__meta__detail'>
              <h5>Created</h5>
              <p>May 15 2020</p>
            </div>
          </div>
          <div className='item__widget'>
            <div className='list__item__meta__img'>
              <img src='img/profile-pic.jpg' />
            </div>
            <div className='list__item__meta__detail'>
              <h5>Assigned</h5>
              <p>May 18 2020</p>
            </div>
          </div>
          <div className='item__widget'>
            <div className='list__item__meta__img'>
              <img src='img/profile-pic.jpg' />
            </div>
            <div className='list__item__meta__detail'>
              <h5>Pending</h5>
              <p>June 01 2020</p>
            </div>
          </div>
        </div>
      </div>
      <div className='list__image'>
        <img src='img/profile-pic.jpg' />
      </div>
    </div>
  );
  return (
    <div className='list'>
      <div className='list__header'>
        <h2 className='list__name'>Tasks</h2>
        <Link to={`/tasks`} className='btn cta btn--orange'>
          Add New
        </Link>
      </div>
      {listItem}
      {listItem}
      {listItem}
      {listItem}
    </div>
  );
};

export default List;
