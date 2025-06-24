# React Context API Notes (with Example from This Project)

## What is the Context API?

The **React Context API** is a way to share data (like user info, theme, or language) across your component tree without passing props down manually at every level.

---

## Why Use Context API?

- Avoids "prop drilling" (passing props through many layers)
- Centralizes shared state (like user authentication, theme, etc.)
- Makes code cleaner and easier to maintain

---

## How Context API is Used in This Project

This project uses the Context API to manage and provide user data throughout the app.

### 1. **Creating the Context**

We create a context using `createContext`:

```jsx
// UserContext.js
import { createContext } from "react";
export const UserContext = createContext(null);
```

---

### 2. **Creating a Provider Component**

The provider wraps the app and supplies the context value:

```jsx
// UserContextProvider.jsx
import React, { useState } from "react";
import { UserContext } from "./UserContext";

function UserContextProvider({ children }) {
  const [user, setUser] = useState({ name: "Sanket" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
```

---

### 3. **Wrapping the App with the Provider**

This makes the context available to all child components:

```jsx
// App.jsx
import React from "react";
import UserContextProvider from "./UserContextProvider";
import Profile from "./Profile";

function App() {
  return (
    <UserContextProvider>
      <Profile />
    </UserContextProvider>
  );
}

export default App;
```

---

### 4. **Consuming the Context in Child Components**

Any child component can access the context using `useContext`:

```jsx
// Profile.jsx
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return <div>User: {user.name}</div>;
}

export default Profile;
```

---

## Key Points

- **Create** a context with `createContext()`
- **Provide** the context value using a Provider component
- **Consume** the context value with `useContext()`
- Context is ideal for global/shared state

---

## References

- [React Context API Documentation](https://react.dev/reference/react/createContext)
- [React useContext Hook](https://react.dev/reference/react/useContext)

---

**This project demonstrates a simple and effective pattern for using the Context API to manage user data globally in a React app.**