import React, { useEffect, useReducer } from 'react';
import Todo from './Todo.js';
import { initialState, appReducer } from '../reducers/reducer.js'
import TodoForm from './TodoForm.js';

const TodoList = () => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    // useEffect(() => {
    //     console.log('data changed');
    // },[state.data]);

    const toggleCompleted = id => {
        console.log('state before:', state.data[0].completed);
        dispatch({ type: "TOGGLE_TODO_ITEM", payload: id });
        console.log('state after: ', state.data[0].completed);
    }

    return (
    <div>
        {state.data && state.data.map((todo) =>{
              return <Todo key={todo.id} todo={todo} displayCompleted={true} toggleCompleted={toggleCompleted} />
          })}
          <TodoForm state={state}/>
    </div>
    );
  }

export default TodoList;



