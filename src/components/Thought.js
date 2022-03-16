import React from 'react'
import { Checkbox, IconButton, ListItem, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Chip from '@mui/material/Chip';

const Thought = ({thought, toggleComplete2, removeThought}) => {

  const handleCheckBoxClick2 = () => {
    toggleComplete2(thought.id2);
  }
  const handleRemoveClick2 = () => {
    removeThought(thought.id2);
  }

  return (
    <ListItem style={{display:"flex"}}>
        <Checkbox 
            checked={thought.completed} 
            onClick={handleCheckBoxClick2}/>
        <Typography 
            variant="body1"
            style={{
                textDecoration: thought.completed ? "line-through" :null}}>

            {thought.reminder}
        </Typography>
        <IconButton onClick={handleRemoveClick2}>
            <Chip
                label="Remove"
                deleteIcon={<DeleteIcon />}
                variant="outlined"
            />
        </IconButton>
    </ListItem>
  )
}

export default Thought