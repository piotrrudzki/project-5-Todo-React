import React, { Component } from "react";
import "../App.css";
import ListTasks from "./ListTasks";
import AddTask from "./AddTask";

class App extends Component {
  counter = 0;
  state = {
    list: [],
  };

  handleDone = (id) => {
    const tasks = [...this.state.list];
    const finishDate = new Date().getTime();
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.dateDone = finishDate;
      }
    });

    this.setState({
      list: tasks,
    });
  };
  handleDelete = (id) => {
    console.log("Usunięte o" + id);
    const tasks = [...this.state.list];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      list: tasks,
    });
  };

  addTask = (text, priority, dateAdd, dateDone) => {
    const task = {
      id: this.counter,
      text,
      priority,
      dateAdd,
      dateDone,
      active: true,
    };
    this.counter++;
    this.setState((prevState) => ({
      list: [...prevState.list, task],
    }));

    return true;
  };

  render() {
    return (
      <div className="app">
        <h1>TODO App</h1>
        <AddTask add={this.addTask} />
        <ListTasks
          list={this.state.list}
          done={this.handleDone}
          delete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
