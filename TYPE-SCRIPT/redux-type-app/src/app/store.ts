import { configureStore } from '@reduxjs/toolkit'
import todosList from '../features/todo/todoSlice'

export const store = configureStore({
  reducer: {
    todos: todosList
  },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Exporting the Todos from Store
export const selectTodos = (state: RootState) => state.todos.todos