# Day 2 – Login Form with Styling, Validation, and Redirection

## 📌 Tasks Completed
- Created a visually styled login page using CSS.
- Added form validation for email and password fields.
- Implemented password visibility toggle using Font Awesome icon.
- Used localStorage to save logged-in user email.
- Redirected to a new page (`home.html`) on successful login.

## 🧠 What I Learned
- DOM manipulation to handle input values, alerts, and toggles.
- Basic email/password validation (length + empty checks).
- Password show/hide toggle logic using input type switch.
- localStorage usage to store persistent data (email).
- Redirection using `window.location.href`.

## 🎨 UI Elements Added
- Styled form layout (two-column layout: left login / right hero panel).
- Google & Apple login buttons (UI only, no auth logic).
- Eye icon to toggle password visibility.
- Responsive content with image and marketing copy on right panel.

## 💡 Notes
- Skipped strict email validation (`includes('@')`) for now.
- Stored hardcoded credentials in JS for validation (`venkat@gmail.com` / `12345`).
- Page redirects to `../day3/home.html` upon successful login.

## 🧰 Stack
HTML, CSS, Vanilla JavaScript, Font Awesome
