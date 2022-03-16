import React, {useState} from 'react';
import { Button, TextField } from "@mui/material";
import Stack from '@mui/material/Stack';


const TodoForm = ({addTodo}) => {
    const [date, setDate] =  useState(Date.now())
    const [todo, setTodo] = useState({
        id:"",
        task:"",
        completed: false,
    });

    const handleTaskInputChange = (e) => {
        e.preventDefault();
        setTodo({...todo, task: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo, id:date});
            //reset task input
            setTodo({...todo, task:""})
            setDate(Date.now());
        }
    }

  return (
    <div>
        <h4>TodoForm</h4>

        <form onSubmit={handleSubmit} className="todo-form">
            <TextField 
                label="Task"
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange} />
            <Button type="submit">Submit</Button>
        </form>
    </div>
  );
}

export default TodoForm