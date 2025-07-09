#### 🌍 Day 18.2: Mini Project – Predict Info from a Name

👨‍💻 Project:
- Built a small but fun app where a user **types in a name**, and it fetches:
  - 🌎 **Country** using [Nationalize API](https://nationalize.io)
  - 🎂 **Age** using [Agify API](https://agify.io)
  - 👨/👩 **Gender** using [Genderize API](https://genderize.io)

📦 Stack:
- **Next.js** + **React**
- Used `fetch()` to call each API and display results
- Handled loading and error states

🧠 What I Practiced:
- Routing to a dynamic page using `useRouter().push('/prediction/[name]')`
- Handling multiple async API calls in parallel
- Basic input handling and form submission
- State management with `useState`, and async logic with `useEffect`

🎯 Outcome:
- Super simple UI, but lots of real-world concepts:
  - User interaction
  - API integration
  - Dynamic routing
  - Data presentation

🛠️ Bonus Ideas:
- Add flags and confidence percentage to the country result
- Animate result reveal with Framer Motion
- Convert project into a TypeScript playground

🧪 APIs Used:
- `https://api.genderize.io?name=`
- `https://api.agify.io?name=`
- `https://api.nationalize.io?name=`
