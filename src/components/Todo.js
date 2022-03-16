import React from 'react'
import { Checkbox, IconButton, ListItem, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Chip from '@mui/material/Chip';

const Todo = ({todo, toggleComplete, removeTodo}) => {

    const handleCheckBoxClick = () => {
        toggleComplete(todo.id);
    }
    const handleRemoveClick = () => {
        removeTodo(todo.id);
    }

  return (
    <ListItem style={{display:"flex"}}>
        <Checkbox 
            checked={todo.completed} 
            onClick={handleCheckBoxClick}/>
        <Typography 
            variant="body1"
            style={{
                textDecoration: todo.completed ? "line-through" :null}}>

            {todo.task}
        </Typography>
        <IconButton onClick={handleRemoveClick}>
            <Chip
                label="Remove"
                deleteIcon={<DeleteIcon />}
                variant="outlined"
            />
        </IconButton>
    </ListItem>
  )
}

export default Todo