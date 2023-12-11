import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    state = {
        input: "",
        items: []
    }
    handleChange = (event) => {
        this.setState({
            input: event.target.value

        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { input } = this.state;


        this.setState({
            items: [...this.state.items, input],
            input: ""
        })
        console.log(this.state.items)
    }

    deleteItem = (key) => {

        this.setState({
            items: this.state.items.filter((data, index) => index !== key)
        })
    }

    render() {
        const { input, items } = this.state

        return (
            <div className='todo-container'>

                <form className='input-section' onSubmit={this.handleSubmit}>
                    <h1>Todo App</h1>
                    <input type='text' value={input} placeholder='Enter Items...' onChange={this.handleChange}></input>

                </form>
                <ul>
                    {items.map((values, index) => (
                        <li key={index}>{values} <i className="fa-solid fa-trash" onClick={() => this.deleteItem(index)}></i></li>
                    ))}


                </ul>

            </div >
        )
    }
}

export default Todo
