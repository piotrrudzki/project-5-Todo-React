import React from "react";
import Task from "./Task";

const ListTasks = (props) => {
  const activeTasks = props.list.filter((task) => task.active);
  const doneTasks = props.list.filter((task) => !task.active);

  const list = activeTasks.map((list) => (
    <Task key={list.id} task={list} done={props.done} delete={props.delete} />
  ));
  const listDone = doneTasks.map((list) => (
    <Task key={list.id} task={list} done={props.done} delete={props.delete} />
  ));
  return (
    <>
      <div className="list">
        <h2>Tasks List</h2>
        <ul>{list}</ul>
      </div>
      <div className="listDone">
        <h2>Done tasks ({doneTasks.length}) </h2>
        <ul>{listDone}</ul>
      </div>
    </>
  );
};

export default ListTasks;
