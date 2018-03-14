import React from "react";
import style from "./Todo.css";

const Todo = (props) => (
  <li className={style.TodoItem} onClick={() => props.remove(props.content.id)}>
    {props.content.text}
  </li>
);

export default Todo;