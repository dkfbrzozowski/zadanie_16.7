import React from "react";
import style from "./TodoForm.css";

const TodoForm = (props) => (
  <div className={style.TodoForm}>
    <input
      type="text"
      value={props.value}
      onChange={(e) => props.fill(e)}
      placeholder="type your task"
    />
    <button type="submit" onClick={() => props.submit(props.input)}>
      add task
    </button>
  </div>
);

export default TodoForm;