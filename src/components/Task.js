import React from "react";
const dateAdd = new Date().toLocaleString();

const Task = (props) => {
  const { id, priority, active, text, dateDone } = props.task;

  if (active) {
    return (
      <>
        <li style={priority ? { color: "red" } : {}}>{text}</li>
        <button onClick={() => props.done(id)}>Done</button>
        <button onClick={() => props.delete(id)}>X</button>
        <br />
        <span>Add date : {dateAdd}</span>
        <span>Finish date: {dateDone}</span>
        <br />
      </>
    );
  } else {
    const doneDate = new Date(dateDone).toLocaleString();

    return (
      <>
        <li>{text}</li>
        <button onClick={() => props.delete(id)}>X</button>
        <br />
        <span>Done Date {doneDate}</span>
        <br />
      </>
    );
  }
};
export default Task;
