import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Task from './Task';

function Tasks({ tasks, toogleDone }) {

  return (
    <ul className="list">
      {tasks.map((item) => <Task key={item.id} {...item} toogleDone={toogleDone} />)}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  toogleDone: PropTypes.func.isRequired,
};

export default React.memo(Tasks);
