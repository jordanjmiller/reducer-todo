import React, { useState, useReducer } from 'react';
import { initialState, appReducer } from '../reducers/reducer.js'

const TodoForm = props => {
    const [{ data }, dispatch] = useReducer(appReducer, initialState);
    const [newTodo, setNewTodo] = useState('');
    console.log('asdasd asdasd ',props.state);

const handleChange = e => {
    console.log(e.target.value);
    setNewTodo(e.target.value);
  }
    console.log('todolist');

    return (
      <div>
          <p>test: {props.state.data[0].completed}</p>
          <form name='inputform' onSubmit={props.onSubmit}>
          <input type='text' name='inputBox' onChange={handleChange} placeholder='...todo' />
          <input type='submit' value='Add Todo'/>
          </form>
          <button onClick={props.toggleDisplayCompleted}>Clear Completed</button>
      </div>
    );
}

export default TodoForm;







//   onSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//     console.log(e.target.value);
//     console.log(e.target.name);
//     console.log(e.target.inputBox.value);
//     if (e.target.inputBox.value !== ''){
//       this.setState({data: [...this.state.data, {...this.state.newTodo}, ] });
//       e.target.inputBox.value = null;
//     }
//   }

//   

//   toggleDisplayCompleted = () => {
//     this.setState({displayCompleted: !this.state.displayCompleted});
//   }