import React, { useState, useReducer } from 'react';
import Todo from './Todo.js';
import { initialState, appReducer } from '../reducers/reducer.js'
import TodoForm from './TodoForm.js';

const TodoList = () => {
    const [{data, displayCompleted}, dispatch] = useReducer(appReducer, initialState);

    const onSubmit = (e, value) => {
        e.preventDefault();
        if (value !== ''){
            dispatch({ type: "ADD_NEW_TODO", payload: value });
        }
    }

    const toggleDisplayCompleted = () => {
        dispatch({ type: "TOGGLE_DISPLAY_COMPLETED", payload: null });
    }

    const toggleCompleted = (id) => {
        dispatch({ type: "TOGGLE_TODO_ITEM", payload: id });
    }

    return (
    <div>
        <TodoForm onSubmit={onSubmit} toggleDisplayCompleted={toggleDisplayCompleted}/>
        {data && data.map((todo) =>{
              return <Todo key={todo.id} todo={todo} displayCompleted={displayCompleted} toggleCompleted={toggleCompleted} />
          })}
    </div>
    );
  }

export default TodoList;



