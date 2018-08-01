import React, { Component } from 'react';
import TodoList from './TodoList.js';
import projectLogo from './green-book.png';
import eeanLogo from './compass-logo-small.png'
import './App.css';

// A set of items to render in the todolist
const todos = [
     {
        description: "Walk around Stadhuset (the City Hall) courtyard and garden",
        category: "tourist-y",
        status: "incomplete"
    },
    {
        description: "Have a fika at Café Pascal",
        category: "fika-on",
        status: "incomplete"
    },
    {
        description: "Work by the quay at GoTo 10",
        category: "work-out",
        status: "incomplete"
    }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={projectLogo} className="App-logo" alt="project logo" />
          <h1 className="App-title">Hej Stockholm!</h1>
	  <h3>A visitor's guide to Stockholm</h3>
          <div className="eean-link">
            <p>by
	    <span><a href="http://elle-est-au-nord.com/" target="_blank"> Elle est <img src={eeanLogo} className="eean-logo" alt="Elle est au nord's logo" /> au nord</a></span> </p>
	  </div>
        </header>
        <p className="App-intro">
I've been living in Stockholm for a year and here are my recommendations of things to do when you visit the (autoproclamed) "Capital of Scandinavia" 😜
        </p>
	<div className="sthlm-zine">
	</div>
	<div className="todo-map">
	</div>
	<div className="todo-list">
	<TodoList list={todos} />
	</div>
	<footer>Elle est au nord © 2018</footer>
      </div>
    );
  }
}

export default App;
