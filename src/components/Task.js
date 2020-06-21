import React from "react";

const Task = (props) => {
  const style = {
    color: "red",
    textTransform: "uppercase",
  };
  const { text, date, id, active, important, finishDate } = props.task;
  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> - do{" "}
          <span>{date} </span>
          <button onClick={() => props.change(id)}>Zrobione!</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const endTime = new Date(finishDate).toLocaleString();
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> (zrobić do{" "}
          <span>{date}</span>)
          <br />- potwierdzenie wykonania <span>{endTime} </span>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;
