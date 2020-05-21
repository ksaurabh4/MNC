import React from 'react';
import './List.css';
import { Link } from 'react-router-dom';
const List = (props) => {
  const listItem = (task) => {
    return (
      <div className='list__item' key={task._id}>
        <div className='list__content'>
          <h3 className='list__item__heading'>{task.description}</h3>
          {task.body && (
            <p className='list__item__body'>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis.
            </p>
          )}
          <div className='list__item__meta'>
            <div className='item__widget'>
              <div className='list__item__meta__img'>
                <img
                  src={`https://kumar-task-manager-api.herokuapp.com/users/${task.owner}/avatar/`}
                  alt='task owner pic'
                />
              </div>
              <div className='list__item__meta__detail'>
                <h5>Created</h5>
                <p>{task.createdAt}</p>
              </div>
            </div>
            <div className='item__widget'>
              <div className='list__item__meta__img'>
                <img src='/img/profile-pic.jpg' alt='task assignee pic' />
              </div>
              <div className='list__item__meta__detail'>
                <h5>Assigned</h5>
                <p>May 18 2020</p>
              </div>
            </div>
            <div className='item__widget'>
              <div className='list__item__meta__img'>
                <img src='/img/profile-pic.jpg' alt='task assignee pic' />
              </div>
              <div className='list__item__meta__detail'>
                <h5>{task.completed ? 'Completed' : 'Pending'}</h5>
                <p>June 01 2020</p>
              </div>
            </div>
          </div>
        </div>
        <div className='list__image'>
          <img src='/img/philly.jpg' alt='Task pic' />
          <Link
            to={`/tasks/edit/${task._id}`}
            className='btn btn__list btn__list--edit'
          >
            Edit
          </Link>
          <Link
            to={`/tasks/delete/${task._id}`}
            className='btn btn__list btn__list--delete'
          >
            Delete
          </Link>
        </div>
      </div>
    );
  };
  const renderList = (itemArray) => {
    if (!(itemArray.length > 0)) {
      // this.props.user.id &&
      return <div>Loading...</div>;
    } else {
      return itemArray.map((item) => {
        return listItem(item);
      });
    }
  };
  return (
    <div className='list'>
      <div className='list__header'>
        <h2 className='list__name'>Tasks</h2>
        <Link to={`/tasks/new`} className='btn cta btn--orange'>
          Add New
        </Link>
      </div>
      {renderList(props.tasks)}
    </div>
  );
};

export default List;
