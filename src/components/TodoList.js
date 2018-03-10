import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
    const tasks = props.list.map((item) => {
        return (
            <a href={'#'} onClick={() => item.remove(item.id)} key={item.id} className={style.task}>
                {item.text}
            </a>
        )
    });

    return (
        <nav className={style.TodoList}>
            {tasks}
        </nav>
    )

}
export default TodoList;