import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ThoughtForm from "./components/ThoughtForm";
import ThoughtList from "./components/ThoughtList";
import Typography from "@mui/material/Typography";


function App() {
  const [todos, setTodos] = useState([]);

  const [thoughts, setThoughts] = useState([]);

  const LocalStorageKey = "react-todo-list-todos";
  const LocalStorageKey2 = "react-thought-list-thoughts";

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LocalStorageKey));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem(LocalStorageKey, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }

  useEffect(() => {
    const storageThoughts = JSON.parse(localStorage.getItem(LocalStorageKey2));
    if (storageThoughts) {
      setThoughts(storageThoughts);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem(LocalStorageKey2, JSON.stringify(thoughts));
  }, [thoughts]);

  const addThought = (thought) => {
    setThoughts([thought, ...thoughts]);
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
      })
    );
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const toggleComplete2 = (id2) => {
    setThoughts(
      thoughts.map(thought => {
        if(thought.id2 === id2) {
          return {
            ...thought,
            completed: !thought.completed
          }
        }
      })
    );
  }

  const removeThought = (id2) => {
    setThoughts(thoughts.filter(thought => thought.id2 !== id2));
  }

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h3" style={{padding:80}}>
          React Todo
        </Typography>
        
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} 
                  toggleComplete={toggleComplete}
                  removeTodo={removeTodo}/>
      </header>

      <header className="App-header">
        <Typography variant="h3" style={{padding:80}}>
          React Thought
        </Typography>
        
        <ThoughtForm addThought={addThought}/>
        <ThoughtList thoughts={thoughts} 
                  toggleComplete2={toggleComplete2}
                  removeThought={removeThought}/>
      </header>
    </div>
  );
}

export default App;
