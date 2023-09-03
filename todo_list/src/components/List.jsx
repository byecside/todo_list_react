import React from "react";

let style = {
    maxWidth: '700px',
};

let btn = {
    cursor: 'pointer',
};

const List = (props) => (
    <ul>
        {props.todos.map((todo, i) => {
            return <li key={i} style={style}>{todo.title} <span style={btn} onClick={() => props.handleRemove(i)}>Delete</span></li>
        })}
    </ul>
);

export default List;