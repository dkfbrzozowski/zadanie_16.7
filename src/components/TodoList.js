
import React from "react";
import Todo from "./Todo.js";
import style from "./TodoList.css";

const TodoList = (props) => {
  let listItem = props.items.map((item) => {
    return <Todo content={item} key={item.id} remove={props.remove} />;
  });
  return <ul className={style.TodoList}>{listItem}</ul>;
};

export default TodoList;