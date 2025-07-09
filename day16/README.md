#### 📅 Day 16: Advanced Calendar with Notes & Events – React + TypeScript + Ant Design

🔧 Features Built:
- Dynamic, responsive **calendar grid** with Ant Design `Card`, `Row`, `Col`
- **Right-click context menu** on any date to:
  - Add events (with optional time)
  - Add notes
- **Left-click** to toggle a sidebar showing events/notes for the selected date
- **Event & Note indicators** using icons (📌 🗒️)
- Year and month navigation
- Styled custom modals (without libraries) for event/note input

🧠 What I Learned:
- How to build a **custom context menu** in React using `onContextMenu`, `clientX/Y`, and controlled visibility
- Storing **event data** and **note data** using `useState` objects with dynamic keys
- **Controlled inputs** with Ant Design’s `Input` component for both text and time
- Smart toggling of views (sidebar, modals) using layered state

💡 Cool Additions:
- Used `react-icons` to show contextual hints for each day (like 👁‍🗨 events and 📝 notes)
- Modular logic to keep calendar structure + event/note logic separate but cohesive
- Carefully handled z-index and fixed positioning for popups and sidebars

🎯 Next Ideas:
- Add edit/delete support for events and notes
- Persist data using localStorage or backend API
- Support recurring events or categories
- Maybe add a theme toggle or mini-month view 📆


