import React from 'react'
import Thought from "./Thought"
import { List } from "@mui/material"

const ThoughtList = ({thoughts, toggleComplete2,removeThought}) => {
  return (
    <div>
      <List>
            {thoughts.map(thought => (
                <Thought 
                    key={thought.id2} 
                    thought={thought} 
                    toggleComplete2={toggleComplete2}
                    removeThought={removeThought}/>  
            ))}
        </List>
    </div>
  )
}

export default ThoughtList