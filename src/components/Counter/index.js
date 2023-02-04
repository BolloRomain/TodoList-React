import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Counter({ nbNotDoneTasks }) {
  return (
    <p className="counter">{nbNotDoneTasks} tâches en cours</p>
  );
}

Counter.propTypes = {
  nbNotDoneTasks: PropTypes.number.isRequired,
};

export default React.memo(Counter);
