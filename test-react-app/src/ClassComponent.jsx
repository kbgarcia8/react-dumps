import { Component } from "react";
import "./ClassComponent.css"
/*
  This can also be written as:

  import React from 'react';
  class ClassInput extends React.Component {}
  export default ClassInput;

  instead of destructuring the `Component` during import
*/
class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo,index) => (
            <div key={Date.now()} className="todo-entry">
              <li>{todo}</li>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;