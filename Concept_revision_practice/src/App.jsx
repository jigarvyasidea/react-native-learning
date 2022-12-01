import React, { useState } from "react";
import "./App.css";

function App() {

const[task , setTask ] = useState(" ")
const [ todos , setTodos] = useState([ "Jigar" , "Abhay "])

function createTodo(){
    event.preventDefault()
  setTodos(oldtodos => {
  return [...oldtodos , task ]
  })

  setTask('')
  
}

//function tryToChackForEnterKey(){
   // if(e.keyCode == 13){
    //    createTodo()
   // }
//}

  return (
    <div >
     <h1>Best To DO APP EVER </h1>
     <from onSubmit={createTodo}>
     <input 
     //onKeyDown={tryToChackForEnterKey}
     type="text" 
     value={task} 
     onChange = {event => {
        setTask(event.target.value)
     }} 
     />
     <button onClick={createTodo} >Create Todo </button>
     </from>
    

    <ul>
       { todos.map(todo => {
          return <li>{todo}</li>
       })}
    </ul>


    </div>
  );
}

export default App;
