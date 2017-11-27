import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: ''}
  }

  handleItem = (event) => {
    event.preventDefault()
    this.setState({items: [this.state.text, ...this.state.items]})
  }

  handleChange = (event) => {
    console.log("This is this ",this)
    this.setState({ text: event.target.value })
  }

  render() {
    return (
      <div>
      <ToDoList items={this.state.items}/>
      <form onSubmit={this.handleItem}>
        <input value={this.state.text} onChange={this.handleChange} className="todo" type="text"/>
        <input type="submit"/>
      </form>
      </div>
    );
  }
}

export default App;
