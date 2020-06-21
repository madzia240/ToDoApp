import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active === true);
  const done = props.tasks.filter((task) => task.active === false);
  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <>
      <div className="active">
        <h2>
          Zadania do zrobienia <span>({active.length})</span>
        </h2>
        {activeTasks.length > 0 ? (
          activeTasks
        ) : (
          <p>nie masz żdanych zadań do zrobienia</p>
        )}
      </div>
      <hr />
      <div className="done">
        <h3>
          Zadania zrobione <span>({done.length})</span>
        </h3>
        {done.length > 5 && <span>ostatnie 5 zrobionych zadań:</span>}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
