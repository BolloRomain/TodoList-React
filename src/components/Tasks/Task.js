import PropTypes from 'prop-types';
function Task({ label, done, id, toogleDone }) {
  
  const handleCheck = () => {
    console.log('il faudra voir comment on peut decocher cette case ...');
    
    toogleDone(id);
  };

  const checkBoxClass = done ? 'list-item list-item--done' : 'list-item';

  return (
    <li>
      <label className={checkBoxClass} htmlFor={id}>
        <input type="checkbox" checked={done} name={id} onChange={handleCheck} />
        {label}
      </label>
    </li>
  );
}

Task.propTypes = {
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  toogleDone: PropTypes.func.isRequired,
};

export default Task;
