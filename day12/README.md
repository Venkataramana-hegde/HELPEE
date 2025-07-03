# 📅 Day 10 – Advanced React Components Practice

Practiced a range of **React + TypeScript components** focusing on UI logic, state management, and user interactions. Tailwind CSS was used for styling across components.

---

## 🧠 Highlights

> Built 4 mini components reflecting real-world frontend patterns:
- Dynamic math calculator
- Custom dropdown menu
- Star-based rating system
- Live input search with filtering

---

## 🧪 Projects/Components

### 1. 🧮 Calculator (Scientific)
- Built a **multi-functional calculator** UI.
- Supported operations:
  - Arithmetic: `+`, `-`, `*`, `/`, `%`
  - Functions: `sin`, `cos`, `tan`, `log`
  - Toggle sign, backspace, clear, brackets, and π constant
- Used `eval()` to parse and solve expressions
- Edge cases handled (invalid input, empty expressions)

### 2. 🔽 Dropdown Menu
- Toggle dropdown UI with selected value display
- Used icons from `react-icons` to indicate open/close
- Selected option updates and hides the dropdown
- Smooth UX transitions

### 3. ⭐ Star Rating System
- Rendered clickable stars using `FaStar`
- Highlight stars based on rating (via `id <= value` logic)
- Fully controlled via props and callback handling

### 4. 🔍 Search Suggestion Input
- Real-time input filter system
- On every keystroke, filters from static `suggestions[]`
- Case-insensitive prefix match
- If input is empty, shows full list

---

## 🧰 Key Concepts Practiced
- Functional components with `useState`
- Handling events (click, change)
- Controlled input fields
- Conditional rendering using ternary operators
- Prop drilling and callback-based state updates
- Tailwind utility classes for layout

---

## ✅ Summary
> Day 10 focused on strengthening **UI interaction skills** and **frontend logic building blocks** in React. Every component had focused logic, styling, and user behavior — a very practical hands-on session.

---

# 📅 Day 11 – Data Visualization with ApexCharts

Explored the basics of integrating **ApexCharts** with React. Practiced rendering various chart types and customizing chart options.

---

## 📊 Charts Implemented

### 1. 📈 Line Chart
- Configured X/Y axis labels, tooltips, and data series.
- Practiced using multiple datasets for comparison.

### 2. 📊 Bar Chart
- Displayed categories on the X-axis with stacked and grouped bars.
- Styled bars with custom colors and tooltips.

### 3. 🍩 Donut Chart
- Created a circular percentage chart with labels.
- Explored options like legend display, color mapping, and hover effects.

---

## ⚙️ Concepts Practiced
- Chart configuration using `ApexOptions`
- Using `useState` to dynamically update series
- Mapping fetched data into chart-friendly format
- Responsive chart resizing

---

## ✅ Summary
> Day 11 was all about **data visualization** — how to show data beautifully and interactively using **ApexCharts**. It laid a solid foundation for building dashboards and admin panels.

---
