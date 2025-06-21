# Notes on React Hooks in Password Generator App

This document explains how `useRef`, `useEffect`, and `useCallback` are used in the `App.jsx` of the Password Generator project.

---

## 1. `useRef`

- **Purpose:**  
  `useRef` is used to create a reference to the password input field.
- **Usage in App:**  
  ```js
  const passwordRef = useRef(null);
  ```
  This allows direct access to the DOM element, enabling the app to select and copy the generated password when the "Copy" button is clicked.

---

## 2. `useEffect`

- **Purpose:**  
  `useEffect` runs side effects in functional components.
- **Usage in App:**  
  ```js
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);
  ```
  This hook ensures that a new password is generated automatically whenever the password length, number inclusion, or special character inclusion options change.

---

## 3. `useCallback`

- **Purpose:**  
  `useCallback` memoizes functions so they are not recreated on every render unless their dependencies change.
- **Usage in App:**  
  - **Password Generation:**  
    ```js
    const passwordGenerator = useCallback(() => {
      // ...logic...
    }, [length, numberAllowed, characterAllowed]);
    ```
    This ensures the password generator function is only recreated when its dependencies change.
  - **Copy to Clipboard:**  
    ```js
    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 50);
      window.navigator.clipboard.writeText(password);
    }, [password]);
    ```
    This function copies the current password to the clipboard and is only recreated when the password changes.

---

## Summary Table

| Hook        | Purpose                                      | Example Usage in App                |
|-------------|----------------------------------------------|-------------------------------------|
| `useRef`    | Reference DOM elements                       | `const passwordRef = useRef(null);` |
| `useEffect` | Run side effects on dependency change        | Generate password on option change  |
| `useCallback` | Memoize functions to avoid unnecessary recreation | Password generator & copy functions |

---
```# Notes on React Hooks in Password Generator App

This document explains how `useRef`, `useEffect`, and `useCallback` are used in the `App.jsx` of the Password Generator project.

---

## 1. `useRef`

-Purpose:**  
  `useRef` is used to create a reference to the password input field.
- **Usage in App:**  
  ```js
  const passwordRef = useRef(null);
  ```
  This allows direct access to the DOM element, enabling the app to select and copy the generated password when the "Copy" button is clicked.

---

## 2. `useEffect`

- **Purpose:**  
  `useEffect` runs side effects in functional components.
- **Usage in App:**  
  ```js
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);
  ```
  This hook ensures that a new password is generated automatically whenever the password length, number inclusion, or special character inclusion options change.

---

## 3. `useCallback`

- **Purpose:**  
  `useCallback` memoizes functions so they are not recreated on every render unless their dependencies change.
- **Usage in App:**  
  - **Password Generation:**  
    ```js
    const passwordGenerator = useCallback(() => {
      // ...logic...
    }, [length, numberAllowed, characterAllowed]);
    ```
    This ensures the password generator function is only recreated when its dependencies change.
  - **Copy to Clipboard:**  
    ```js
    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 50);
      window.navigator.clipboard.writeText(password);
    }, [password]);
    ```
    This function copies the current password to the clipboard and is only recreated when the password changes.

---

## Summary Table

| Hook        | Purpose                                      | Example Usage in App                |
|-------------|----------------------------------------------|-------------------------------------|
| `useRef`    | Reference DOM elements                       | `const passwordRef = useRef(null);` |
| `useEffect` | Run side effects on dependency change        | Generate password on option change  |
| `useCallback` | Memoize functions to avoid unnecessary recreation | Password generator & copy functions |

---

@   Sanket