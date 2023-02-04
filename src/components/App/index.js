import React from 'react';
import Counter from '../Counter';
import Form from '../Form';
import Tasks from '../Tasks';
import './styles.scss';
import initialTasksFromData from '../../data/tasks';

class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      tasks: initialTasksFromData,
      inputValue: '',
    };

    this.setInputValue = this.setInputValue.bind(this);
    this.addTask = this.addTask.bind(this);
    this.toogleDone = this.toogleDone.bind(this);
  }

  setInputValue(newValue) {
    this.setState({
      inputValue: newValue,
    });
  }

  getNewId() {
    
    const { tasks } = this.state;
    
    const idsArray = tasks.map((item) => item.id);
    const maxId = Math.max(...idsArray);
    return maxId + 1;
  }

  addTask() {
    console.log('ajout d\'une tache dans le state');
    
    const { tasks, inputValue } = this.state;

    const newTask = {
      done: false,
      id: this.getNewId(),
      label: inputValue,
    };

    const newTaskList = [
      ...tasks,
      newTask,
    ];

    this.setState({
      tasks: newTaskList,
      inputValue: '',
    });
  }

  toogleDone(idTask) {
    console.log(`on va modifier le done de la tache ${idTask}`);

    const { tasks } = this.state;

    const newTaskList = tasks.map((item) => {
      if (item.id === idTask) {
        return {
          ...item,
          done: !item.done,
        };
      }
      return item;
    });

    this.setState({
      tasks: newTaskList,
    });
  }

  render() {
    
    const { tasks, inputValue } = this.state;

    const notDoneTasks = tasks.filter((task) => task.done === false);
    const nbNotDoneTasks = notDoneTasks.length;

    const doneTasks = tasks.filter((task) => task.done === true);

    return (
      <div className="app">
        <Form
          inputValue={inputValue}
          setInputValue={this.setInputValue}
          addTask={this.addTask}
        />
        <Counter nbNotDoneTasks={nbNotDoneTasks} />
        <Tasks tasks={[...notDoneTasks, ...doneTasks]} toogleDone={this.toogleDone} />

      </div>
    );
  }
}

export default App;
