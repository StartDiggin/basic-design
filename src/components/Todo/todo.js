import React from 'react'
import TodoItem from "./todoItems"
import TodoItemComplete from "./todoItemComplete"
import AddTodo from "./addTodo"
import UpdateTodo from "./updateTodo"

 
class TodoApp extends React.Component {
    constructor(){
        super()
        this.state={
            edit: false,
            id: 0,
            todo: "",
            todoData: []
        }
    }



    handleChange = (e) => {
        // Input values
        const { name, value } = e.target
        // updates state when checkbox is checked or unchecked.
        this.setState({
            [ name ]: value
        })
    }

    handleCheckbox = (id) => {
        // handles checkboxes
        const updateTodo = this.state.todoData.map(todo => {
            // check if todo.id matches, return if true
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })
        this.setState({
            todoData: updateTodo
        })
    }
    
    // methods for the form
    handleSubmit = (e) => {
        e.preventDefault()
        this.addTodo(e)
        this.resetState()
    }

    addTodo = (e) => {
        let id = Date.now()
        const {name, value} = e.target.todo
        if(value.length !== 0){
            let todoObj = { id:id, name:name, value:value, completed: false}
            let todoArray = this.state.todoData
            todoArray.push(todoObj)
            this.setState({
                todoData:todoArray
            })
        } else {
            alert("Please Enter a Todo")
        }
    }

    handleDelete = (id) => {
        if(this.state.edit){
            alert("Please finish updating Todo before deleting!")
        }else{
            const newList = this.state.todoData.filter(item => item.id !== id)
            this.setState({
                todoData: newList
            })
        }
    }

    handleEdit = (id) => {
        const todo = this.state.todoData.find(todo => todo.id === id)
        this.setState({
            edit:true,
            id:id,
            todo: todo.value
        })
    }

    handleUpdate = (e) => {
        e.preventDefault()
        let id = this.state.id
        if(e.target.todo.value.length !== 0){
            this.setState(() => {
                const todo = this.state.todoData.find(todo => todo.id === id)
                todo.value = e.target.todo.value
                return { todo }
            })
            this.resetState()
        } else {
            alert("Please Enter Updated Todo!")
        }
    }

    resetState = () => {
        this.setState({
            edit:false,
            id:0,
            todo:''
        })
    }
    
  
    render(){
        const todoList = this.state.todoData.map(item => item.completed ? null : <TodoItem key={item.id} item={item} handleCheckbox={this.handleCheckbox} handleEdit={this.handleEdit} handleDelete={this.handleDelete}/>)
        const todoDoneList = this.state.todoData.map(item => item.completed ? <TodoItemComplete key={item.id} item={item} handleCheckbox={this.handleCheckbox} handleEdit={this.handleEdit} onChange={this.onInputChange}/> : null)
        
        return(
            <div className="section">
                <div className="todo u-center-text">
                    <h2 className="heading-secondary">Stuff Todo!!!</h2>
                    {/* Toggle betweet add and update todo  */}
                    <div className="todo__item">
                        {this.state.edit ?  <UpdateTodo onSubmit={this.handleUpdate} onChange={this.handleChange} todo={this.state.todo} /> : <AddTodo onSubmit={this.handleSubmit} onChange={this.handleChange} todo={this.state.todo} /> }
                    </div>
                    <div className="todo__listBox">
                        <div className="todo__list">
                            <h3 className="heading-tertiary">Items Todo:</h3>
                            <ul className="main__list--items">
                                {todoList}
                            </ul>
                        </div>
                        <div className="todo__list">
                            <h3 className="heading-tertiary">Finished Items:</h3>
                            <ul className="main__list--items">{todoDoneList}</ul>
                        </div>
                    </div>
                </div>
            </div> 
        )
    } 
}
export default TodoApp;


