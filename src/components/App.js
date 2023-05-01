
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
  { id: 1, title: "Learn React", button: true },
  { id: 2, title: "Build a React app", button: true },
  { id: 3, title: "Deploy the React app", button: true }
  ]);
  
  const removeTodo = (id) => {
  const updatedTodos = todos.map((todo) => {
  if (todo.id === id) {
  return { ...todo, button: false };
  } else {
  return todo;
  }
  });
  
  setTodos(updatedTodos);
  };
  
  return (
  <div>
  <div className="parent">
  <h1>Parent Component</h1>
  </div>
  <div className="child">
  <h2>Child Component</h2>
  <ul>
  {todos.map((todo) => (
  <li key={todo.id}>
  {todo.title}{" "}
  {todo.button ? (
  <button onClick={() => removeTodo(todo.id)}>Complete</button>
  ) : null}
  </li>
  ))}
  </ul>
  </div>
  </div>
  );
  };

export default App
