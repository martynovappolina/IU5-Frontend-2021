import './App.css';
import ToDoItem from './components/ToDoItem/ToDoItem'
import AddTask from './components/AddButton/AddButton'
import './components/ToDoItem/ToDoItem.css'
import { Component } from 'react';

const tasks_obj = [
  {
    id: 0,
    description: 'Проснуться',
    completed: false
  },
  {
    id: 1,
    description: 'Улыбнуться',
    completed: false
  },
  {
    id: 2,
    description: 'Покушать',
    completed: false
  },
  {
    id: 3,
    description: 'Заснуть',
    completed: false
  }
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks : tasks_obj,
    }
  }

  hchange = id => {
    const index = this.state.tasks.map(item => item.id).indexOf(id);
    
    this.setState (state => {
      let {tasks} = state;
      console.log(tasks[index].completed);

      if (tasks[index].completed === false) tasks[index].completed = true;

      console.log(tasks[index].completed);
      return tasks;
    }) 
  }

  onAddTask = (obj, n) => {
    this.setState (state => {
      // state.tasks = [...state.tasks, obj];
      state.tasks[n] = obj;
      console.log('', state.tasks);
      return state.tasks;
    })
  }

  onEdit = id => {
    console.log('hello', id);
    return 0;
  }

  render() {
    
    const {tasks} = this.state;

    const act_tasks = tasks.filter(task => task.completed === false);
    const compl_tasks = tasks.filter(task => task.completed === true);

    const final_tasks = [...act_tasks,...compl_tasks].map(item => {
      return (
        <ToDoItem
        key = {item.id}
        description = {item.description}
        completed = {item.completed}
        hchange = {() => {this.hchange(item.id)}}
        onEdit = {this.onEdit}
        />
      )
    })

    return (
      <div className="App">
        <div className = "Title">
            Список задач:
        </div>
        <div className = "main">
          <div className = "ContainerForList">
          <div className ="List">
             {final_tasks}
             
          </div>
            <AddTask tasks = {tasks} onAddTask = {this.onAddTask} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
