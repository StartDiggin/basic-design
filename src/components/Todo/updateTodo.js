import React from 'react'
	
function updateForm(props){
    return (
        <div className="todo__formBox">
            <form className="todo__form--update" onSubmit={props.onSubmit}>
                <label className="todo__label">Enter Todo:</label>
                <input className="todo__input" type="text" name = "todo" value = {props.todo} placeholder = "Todo" onChange = {props.onChange}/>
                <button className="btn">Update</button>
            </form>
        </div>
    )
}

export default updateForm  
