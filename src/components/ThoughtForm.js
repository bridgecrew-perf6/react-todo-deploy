import React, {useState} from 'react';
import { Button, TextField } from "@mui/material";
import Stack from '@mui/material/Stack';

const ThoughtForm = ({addThought}) => {
  const [date2, setDate2] =  useState(Date.now())
    const [thought, setThought] = useState({
        id2:"",
        reminder:"",
        completed: false,
    });

    const handleTaskInputChange2 = (e) => {
        e.preventDefault();
        setThought({...thought, reminder: e.target.value});
    }

    const handleSubmit2 = (e) => {
        e.preventDefault();
        if(thought.reminder.trim()){
            addThought({...thought, id2:date2});
            //reset task input
            setThought({...thought, reminder:""})
            setDate2(Date.now());
        }
    }
  return (
    <div>
      <h4>Thought Form</h4>

      <form onSubmit={handleSubmit2} className="todo-form">
          <TextField 
              label="Reminder"
              name="reminder"
              type="text"
              value={thought.reminder}
              onChange={handleTaskInputChange2} />
          <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default ThoughtForm