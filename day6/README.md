# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Day 6 – React Job Board App (Tutorial-Based)

## 📌 Tasks Completed
- Watched a React + Tailwind YouTube tutorial on building a job listing app.
- Implemented a multi-page app using `react-router-dom` with nested routes.
- Built base layout with `<MainLayout />` and pages like Home, Jobs, Add Job, Edit Job, etc.
- Handled API calls (POST, PUT, DELETE) via `fetch` inside `App.jsx`.
- Used `jobLoader` for dynamic route data fetching (React Router loader).
- Practiced prop drilling for passing functions like `addJobSubmit`, `deleteJob`, etc.

## 🧠 What I Learned
- React Router v6: `createBrowserRouter`, `createRoutesFromElements`, `RouterProvider`
- Routing structure with nested routes inside layouts
- Using loaders for preloading data in routes
- How to manage basic CRUD operations using `fetch()`
- Passing props to route components for performing actions

## 🧰 Stack
React, Tailwind CSS, React Router v6

## 💡 Notes
- This was a guided tutorial project — functionality may be adjusted later.
- No actual backend connected; assumed `/api/jobs` endpoints are functional.
- Basic `fetch()` API used without error handling or loading states (yet).

