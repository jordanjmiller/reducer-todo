export const initialState = { 
    data: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }
    ],
    displayCompleted: true,
};

export const appReducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE_TODO_ITEM":
            return {...state,
                data: state.data.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                        ...todo,
                        completed: !todo.completed
                        };
                    } 
                    else {
                        return todo;
                    }
                })
            }
        case "ADD_NEW_TODO":
            const newTodo = {
                item: action.payload,
                completed: false,
                id: new Date()
            }
            return {
                ...state,
                data: [...state.data, newTodo]
            }
        case "TOGGLE_DISPLAY_COMPLETED":
            return {
                ...state,
                displayCompleted: !state.displayCompleted
            }

        default:
            return(state);
    }
}
