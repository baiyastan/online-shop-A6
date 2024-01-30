import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [{ id: 1, text: "hello", completed: true }],
  },

  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      state.todos.push({ id: Date.now(), text: action.payload, completed: false });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((x) => x.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const itemTodo = state.todos.find((todo) => todo.id === action.payload);

      if (itemTodo) {
        itemTodo.completed = !itemTodo.completed;
      }
    },
    removeAllCheck: (state) => {
      state.todos = state.todos.filter((item) => !item.completed);
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, removeAllCheck } = todoSlice.actions;
export default todoSlice.reducer;
