# Redux Notes & Usage Guide (with ReduxTodo Project Reference)

## What is Redux?

Redux is an independent state management library for JavaScript applications.  
It helps you manage and centralize application state in a predictable, debuggable, and scalable way.

---

## Key Concepts

- **Predictable:** State changes are handled by pure functions (reducers).
- **Centralized:** All state is stored in a single store.
- **Debuggable:** Redux DevTools allow you to inspect every state change.

---

## Core Libraries

- [`redux`](https://redux.js.org): The core Redux library.
- [`@reduxjs/toolkit`](https://redux-toolkit.js.org): Official, recommended way to write Redux logic.
- [`react-redux`](https://react-redux.js.org): Official React bindings for Redux.

---

## Installation

```bash
# NPM
npm install @reduxjs/toolkit react-redux

# Yarn
yarn add @reduxjs/toolkit react-redux
```

---

## Redux DevTools

- Install the [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) for debugging.

---

## Basic Redux Flow (as used in ReduxTodo)

1. **Store:**  
   The centralized place for all state.

2. **Slice/Reducer:**  
   Functions that specify how the state changes in response to actions.

3. **Actions:**  
   Plain objects describing what happened.

4. **useSelector:**  
   React hook to read state from the store.

5. **useDispatch:**  
   React hook to dispatch actions to the store.

---

## Example: ReduxTodo Project

### 1. Create a Slice

```js
// src/features/todo/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

---

### 2. Configure the Store

```js
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
```

---

### 3. Provide the Store to React

```jsx
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

### 4. Use Redux in Components

```jsx
// src/components/Todos.jsx
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
```

---

## Summary

- Redux centralizes and manages state in a predictable way.
- Use Redux Toolkit for easier setup and best practices.
- Use `useSelector` to read state and `useDispatch` to send actions.
- The ReduxTodo project demonstrates a simple todo app using these patterns.

---

**References:**
- [Redux Documentation](https://redux.js.org)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [React Redux Documentation](https://react-redux.js.org)