import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

class Form extends React.PureComponent {

  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  componentDidMount() {
    console.log('en direct de componentDidMount', document.querySelector('.form-item'));
    
    console.log('en direct de componentDidMount sans querySelector mais avec la Ref', this.myRef.current);

    this.myRef.current.focus();
  }

  render() {
    
    const { inputValue, setInputValue, addTask } = this.props;

    console.log('en direct de render', document.querySelector('.form-item'));

    const handleChange = (event) => {
     
      setInputValue(event.target.value);
    };

    return (
      <form
        className="form"
        onSubmit={(e) => {
       
          e.preventDefault();
       
          addTask();
        }}
      >
        <input
          type="text"
          className="form-item"
          placeholder="Ajouter une tâche"
          value={inputValue}
          onChange={handleChange}
          ref={this.myRef}
        />
      </form>
    );
  }
}

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default React.memo(Form);
