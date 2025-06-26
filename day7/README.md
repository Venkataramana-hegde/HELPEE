# Day 7 – Redux Toolkit + Async Thunk with TypeScript

## 📌 Tasks Completed
- Setup Redux state management using `@reduxjs/toolkit`.
- Created a `counterSlice` with `initialState`, `reducers`, and `extraReducers`.
- Defined TypeScript `interface` (`CounterState`) for typed state.
- Implemented async thunk (`incrementAsync`) using `createAsyncThunk`.
- Handled fulfilled thunk in `extraReducers` for async updates.

## 🧠 What I Learned
- How `createSlice()` works with built-in immutability in reducers.
- The difference between `reducers` (sync logic) and `extraReducers` (handling async).
- Using `PayloadAction<T>` to type action payloads in reducers.
- Writing async thunks for delayed state updates with side effects.
- Importance of type-safety with Redux state and actions.

## 🧰 Stack
Redux Toolkit, TypeScript

## 💡 Notes
- Async action simulates a delay using `setTimeout` before dispatching payload.
- Clean separation of concerns: sync logic in `reducers`, async in `extraReducers`.
- Used proper typing across the board (`CounterState`, payloads, etc.)
