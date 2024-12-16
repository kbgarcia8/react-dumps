import { Component } from "react";
import "./ClassComponent.css"
/*
  This can also be written as:

  import React from 'react';
  class ClassInput extends React.Component {}
  export default ClassInput;

  instead of destructuring the `Component` during import
*/

class TodoCount extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="total-todos">{this.props.count}</div>
    );
  }
}

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
      isEditing: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteEntry = this.handleDeleteEntry.bind(this)
    this.willEdit = this.willEdit.bind(this)
    this.handleTodoEdit = this.handleTodoEdit.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  handleDeleteEntry(e){
    const toDeleteTodoEntry = e.target.parentNode.querySelector('li').textContent
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo !== toDeleteTodoEntry)
    }))
  }

  willEdit(e){
    const {index} = e.target.dataset 
    console.log(e.target.dataset)
    console.log(this.state.isEditing)
    this.setState((state)=> ({
      ...state, isEditing: index
    }))
  }

  handleTodoEdit(e){
    const {index: editingIndex} = e.target.dataset
    this.setState((state) => ({
      ...state, todos: state.todos.map((todo,index) => 
        index === parseInt(editingIndex) ? e.target.value : todo
      )
    }))
  }

  handleEditSubmit(e){
    e.preventDefault()
    this.setState((state)=> ({
      ...state, isEditing: null
    }))
    console.log(this.state.todos)
  }


  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <TodoCount count={this.state.todos.length}/>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo,index) => (
            <div key={`todo-entry-${index}`} className="todo-entry">
              <li id={`todo-entry-${index}`} data-index={index}>{todo}</li>
              <button onClick={this.willEdit} data-index={index}>Edit</button>
              <button onClick={this.handleDeleteEntry}>Delete</button>
              {this.state.isEditing == index && 
                <form onSubmit={this.handleEditSubmit}>
                  <label htmlFor="task-entry-edit">Edit Task: </label>
                  <input
                    type="text"
                    name="task-entry-edit"
                    value={todo}
                    onChange={this.handleTodoEdit}
                    data-index={index}
                  />
                  <button type="submit">Save</button>
                </form>}
            </div>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;