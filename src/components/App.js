import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 0;
  state = {
    tasks: [
      //   {
      //     id: 0,
      //     text: "zagrać w grę",
      //     date: "2020-07-12",
      //     important: true,
      //     active: true,
      //     finishDate: null,
      //   },
      //   {
      //     id: 1,
      //     text: "umyć koty",
      //     date: "2020-08-12",
      //     important: false,
      //     active: true,
      //     finishDate: null,
      //   },
    ],
  };

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks,
    });
  };
  changeTaskStatus = (id) => {
    let tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };
  addTask = (text, date, important) => {
    if (text.length < 3) return false;
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    };
    this.counter++;
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
    return true;
  };
  render() {
    return (
      <>
        <h1>ToDo App</h1>
        <nav>
          <ul>
            <li>do zrobienia</li>
            <li>dodaj</li>
            <li>zrobione</li>
          </ul>
        </nav>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </>
    );
  }
}

export default App;
