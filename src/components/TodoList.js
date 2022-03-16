import React from 'react'
import Todo from "./Todo"
import { List } from "@mui/material"

const TodoList = ({todos, toggleComplete,removeTodo}) => {

  return (
    <div>
        {/*mapping of TodoList*/}
        <List>
            {todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}/>  
            ))}
        </List>
    </div>
  )
}

export default TodoList