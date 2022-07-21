import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Todo {
    id: number;
    done: boolean;
    text: string;
}

interface TodoSliceState {
    todos: Todo[];
}

const initialState: TodoSliceState = {
    todos: [],
}


// Todo Slice


export const todosSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos = [
                ...state.todos,
                {
                    id: state.todos.length,
                    text: action.payload,
                    done: false,
                }
            ]
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(({ id }) => id !== action.payload)
        },
    },
})


// Action creators are generated for each case reducer function
export const { addTodo, removeTodo} = todosSlice.actions

export default todosSlice.reducer

