// Create a todo list
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
"use strict";


// Component ToDo for an item in a to do list
class Todo extends Component {
    // Constructor method to set the state
    constructor(props) {
        super(props);
        this.state = {
          todoCompletion: this.props.status
        };
    }
    // Render the Todo item
    render() {
        return (
            <div className={"todo " + this.props.category}>
            <p className={this.state.todoCompletion}>
	    <input type="checkbox"
	           name="complete-todo"
	           className="todo-box"
	  onClick={(event) => {if(event.target.checked){this.setState({todoCompletion: "complete"})} else {this.setState({todoCompletion: "incomplete"})}}}/>

	    <span className="description">{this.props.description}</span>
	     | <span className="category">{this.props.category}</span></p>
            </div>
        )
    }
}

// Component TodoList for the whole list
class TodoList extends Component {
    // Constructor method to set the state
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    // Render a Todo component for each element in the `list` props
    render() {
        // Filter down the list of todos to the state
        let currentList = this.props.list.filter((d) => {
            return d.description.match(this.state.search);
        })
        return (
            <div>
                {/* An input element to search through the todo items*/}
                <input className="form-control" placeholder="Search for things to do...." onChange={(event) => this.setState({ search: event.target.value })} />
                {currentList.map((d, i) => {
                    return <Todo key={i} status={d.status} category={d.category} description={d.description} />
                })
                }
            </div>
        )
    }
}


export default TodoList;
