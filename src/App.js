import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm.js'
import TodoList from './components/TodoList.js'

function App() {

  return (
    <div className="App">
      {/* <TodoForm /> */}
      <TodoList />
    </div>
  );
}

export default App;
