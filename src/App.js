import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }


  markComplete=(id)=>{
    this.setState({ todos: this.state.todos.map((todo)=>{
      if(id===todo.id){ 
        todo.completed= !todo.completed;
       }
      return todo;
    })})
  }

  deleteTodo= (id)=> {
    this.setState({todos:[...this.state.todos.filter((todo)=>todo.id!==id)]})
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo ={this.deleteTodo}/>
      </div>
    );
  }
}



export default App;
