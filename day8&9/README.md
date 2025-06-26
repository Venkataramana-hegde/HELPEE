# Day 8 – React Version of Login Page (Migrated from Vanilla JS)

## 📌 Tasks Completed
- Rebuilt the login form from Day 2 using React.
- Created a single `Login` component handling:
  - Controlled inputs for email and password
  - Basic validation (empty fields, password length)
  - Dummy login logic (hardcoded credentials)
  - Password visibility toggle (using Font Awesome)
- Used `localStorage` to persist the user email after login.
- Navigated to a different page on successful login (likely using React Router).

## 🧠 What I Learned
- How to convert DOM manipulation logic into React’s state-based system.
- Handling form input fields with `useState`.
- Conditionally toggling input type (text/password) via state.
- Triggering redirection with `window.location.href` or `useNavigate()` (if used).
- Managing localStorage inside a React component.

## 🧰 Stack
React, JavaScript/TypeScript (if applicable), Font Awesome, CSS

## 💡 Notes
- Hardcoded login check: `venkat@gmail.com` + `12345`
- Logic same as Day 2, but now in React's declarative style.
- Setup assumed to be inside a single component or minimal folder structure.

---

## 🟩 Day 9 – Redux for User Auth + Todos API Fetching

### 📌 Tasks Completed
- Connected the React login form to Redux:
  - Stored user info in Redux state on successful login.
  - Created `userSlice` with `login` and `logout` actions.
- Fetched todos from JSONPlaceholder using Redux Toolkit’s `createAsyncThunk`:
  - Defined `TodoState` and async thunk `fetchTodos`.
  - Used `extraReducers` to handle loading, success, and error states.

### 🧠 What I Learned
- Setting up Redux state slices for both sync and async flows.
- How to manage user data globally across the app using `userSlice`.
- Using TypeScript to define strict types for Redux state (`Todo`, `TodoState`).
- Handling `pending`, `fulfilled`, `rejected` cases cleanly in `extraReducers`.

### 🧰 Stack
React, Redux Toolkit, TypeScript, JSONPlaceholder API

### 💡 Notes
- `userSlice` allows centralized auth state tracking (`user` or `null`).
- `todoSlice` uses async thunk to fetch and store todos in Redux.
- `selectUser` selector was exported to access user state from components.
- Todo fetching handles loading and error states for better UX.
