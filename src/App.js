
import './App.css';
import React,{useReducer} from 'react';
import {Container} from "reactstrap"
import  "bootstrap/dist/css/bootstrap-grid.min.css"
import { TodoContext } from './Context/TodoContext';
import todoRed from "./Context/reducer"
import TodoForm from './Components/TodoForm';
import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import Todos from './Components/Todos';

const  App=()=> {
  const [todos,dispatch] =useReducer(todoRed,[])
  return (
    <TodoContext.Provider value={{todos,dispatch}}>
      <Container fluid>
          
         <h1>Todo App with Context API</h1>
         <br/>
         <div className='listitem mt-3 '>
         <Todos className="mt-3" />

          </div>
        <TodoForm/>
         
      </Container>
    </TodoContext.Provider>
    
    
  );
}

export default App;
