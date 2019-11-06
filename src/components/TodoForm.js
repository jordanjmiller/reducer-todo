import React, { useState, useReducer } from 'react';
import { initialState, appReducer } from '../reducers/reducer.js'

const TodoForm = (props) => {
    
    const [newTodo, setNewTodo] = useState('');

    const handleChange = e => {
        // console.log(e.target)
        // console.log(e.target.value)
        setNewTodo(e.target.value);
    }

    return (
      <div>
          <form name='inputform' onSubmit={(e)=>{props.onSubmit(e, newTodo); document.inputform.reset(); setNewTodo('') }}>
          <input type='text' name='inputBox' onChange={handleChange} placeholder='...todo' />
          <input type='submit' value='Add Todo'/>
          </form>
          <button onClick={props.toggleDisplayCompleted}>Clear Completed</button>
      </div>
    );
}

export default TodoForm;



