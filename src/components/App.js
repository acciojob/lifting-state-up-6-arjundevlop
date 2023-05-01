
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {

  const [todos, settodos] = useState([
    {id:1, title:"Learn React",button:true},
    {id:2, title:"Build a React app",button:true},
    {id:3, title:"Deploy the React app",button:true}
  ])

  const removeTodo = (id) =>{
    let objToUpdate = todos.find(obj => obj.id === id);
    
    objToUpdate.button = false;
    

    let updatedtodos = todos.map(obj => obj.id === id ? objToUpdate : obj);
    settodos(updatedtodos)
    
  }
  return (
    <div>
        <div className="parent">
          <h1>Parent Component</h1>
        </div>
        <div className="child">
          <h2>Child Component</h2>
          <ul>
            {todos.map((item)=>{
              return <li>{item.title} {item.button ? <button onClick={()=>{removeTodo(item.id)}}>Complete</button>:""}</li>
            })}
          </ul>
        </div>
    </div>
  )
}

export default App
