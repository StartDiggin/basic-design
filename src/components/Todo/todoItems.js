import React from 'react'

	
function TodoItem(props){
   
    const completedStyle = {
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-through'
    }
 
    return(
        <div className="todo__list__item">
            <input className="todo__input" id={props.item.id} name="todo" type="checkbox" checked={props.item.completed} onChange={() => {props.handleCheckbox(props.item.id)}}/>
            <label className="todo__label--list" style={props.item.completed ? completedStyle : null}>{props.item.value}<button className="btn" onClick={() => props.handleEdit(props.item.id)} >Edit</button><button className="btn" onClick={() => props.handleDelete(props.item.id)}>Delete</button></label>
        </div>
    )
}
export default TodoItem;
 