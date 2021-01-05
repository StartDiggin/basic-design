import React from 'react'
	
function addTodo(props){
    return (
        <div className="todo__formBox">
            <form className="todo__form" onSubmit={props.onSubmit}>
                <label className="todo__label">Enter Todo:</label>
                <input className="todo__input" type="text" name = "todo" value = {props.todo} placeholder = "Todo" onChange = {props.onChange}/>
                <button className="btn btn--lg">Add Todo</button>
            </form>
        </div>
    )
}

export default addTodo 