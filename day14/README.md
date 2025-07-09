#### 📅 Day 14: Calendar App using React + TypeScript + Ant Design

🛠 What I built:
- A fully functional **calendar component** with:
  - Dynamic **month and year navigation**
  - Highlight for **today's date**
  - Proper alignment using **day-of-week headers**
  - Responsive layout using Ant Design’s `Row` and `Col`
  - Custom styling with `Card`, `Title`, `Button`, and Ant Design icons

💡 Key Features:
- `getDaysInMonth` and `getFirstDayOfMonth` logic using native `Date`
- Displays correct padding for start of month
- Supports both **month** and **year** transitions
- Highlights today using a different card color

🧠 Learnings:
- Practiced working with date/time logic in JavaScript
- Improved understanding of Ant Design layout system (`Row`, `Col`, `Card`)
- Got comfortable handling UI conditionals (`isToday`, padding gaps)
- Learned dynamic rendering of a grid-based calendar with elegance

🎯 What can be improved:
- Add onClick event for selecting a day
- Hook it up with an event/task system for each day
- Maybe use `moment.js` or `date-fns` to simplify date logic

🔥 Reflection:
> I always thought calendars were a pain to build, but once I broke it into pieces (days, weeks, months), it clicked. Ant Design made the UI part fun and elegant.
