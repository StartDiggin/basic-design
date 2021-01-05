import React from 'react'
	
	
function TodoItemComplete(props){
    // style to add if todo is completed
    const completedStyle = {
        fontStyle: 'italic',
        color: '#999999',
        textDecoration: 'line-through',
    }
   
    return(
        <div className="todo__complete">
            <input className="todo__input" id={props.item.id} name="todo" type="checkbox" checked={props.item.completed} onChange={() => {props.handleCheckbox(props.item.id)}} />
            <label className="todo__label--list" style={props.item.completed ? completedStyle : null}>{props.item.value}</label>
        </div>
    )
}
export default TodoItemComplete;
