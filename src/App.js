import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const toDo =[
  {
    task: '',
    id: '',
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoList: toDo
    };
  }  

  toggleItem = clickedId => {
    
    const newToDoList = this.state.toDoList.map(item => {
      // loop through the array
      // find the item we clicked (id, maybe index)
      // toggle that item's purchased property
      if (item.id === clickedId) {
        // toggle purchased
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });

    this.setState({
      toDoList: newToDoList
    });
  };

  addNewItem = itemText => {
    const newItem = {
      name: itemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      toDoList: [...this.state.toDoList, newItem]
    });
  };
 
  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      toDoList: this.state.toDoList.filter(
        task => !task.completed
      )
    })
  }

  render() {
    return (
      <div className='container'>
      <div className='header'>
        <h1>Mike's Todo List!</h1>
        <TodoForm addNewItem={this.addNewItem} />
      </div>
      <TodoList className='listItems'
      toDo={this.state.toDoList}
      toggleItem={this.toggleItem}
      clearCompleted={this.clearCompleted}
      />
      </div>
    );
  }
}

export default App;
