import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać w grę",
        date: "2020-07-12",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "umyć koty",
        date: "2020-08-12",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    console.log("click " + id);
  };
  changeTaskStatus = (id) => {
    console.log("click " + id);
  };
  render() {
    return (
      <>
        <div>ToDo App</div>
        <AddTask />
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
