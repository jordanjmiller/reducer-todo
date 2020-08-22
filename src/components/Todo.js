import React from 'react';

const Todo = props => {
    // console.log('todo running');
    return (
      <div onClick={() => {props.toggleCompleted(props.todo.id)}}>
          {(()=>{
              if (props.todo) {
                //   console.log(props.todo)
                //   console.log('displayCompleted', props.displayCompleted);
                if (props.todo.completed && props.displayCompleted){
                    // console.log('if triggered');
                    return <p className='strikeThrough'>{props.todo.item}</p>
                }
                else if (!props.todo.completed){
                    // console.log('else if triggered');
                  return <p>{props.todo.item}</p>
                }
              }
          })()}
      </div>
    );
}

export default Todo;