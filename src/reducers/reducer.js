export const initialState = { 
    data: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }
    ],
};

export const appReducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE_TODO_ITEM":
            return {
                ...state,
                data: state.data.map(todo => {
                if (todo.id === action.payload) {
                    return {
                    ...todo,
                    completed: !todo.completed
                    };
                } else {
                    return todo;
                }
                }) };
        case "TOGGLE_COMPLETE":
            for (let i = 0; i < state.data.length; i++) {
            if (state.data[i].id === action.payload) { 
                state.data[i].completed = !state.data[i].completed;}}
        return state;

        default:
            return(state);
    }
}
