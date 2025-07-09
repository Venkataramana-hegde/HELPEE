// import { Component } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DashboardWrapper from "./pages/Dashboard";

import ErrorBoundary from "./pages/ErrorBoundary";
import LoginPage from "./pages/LoginPage";

// import ExampleuseMemo from "./pages/ExampleuseMemo";
// import Parent from "./pages/Parent";

// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route
//             path="/"
            // element={<LoginPage title="Login" />}
//           />
//           <Route
//             path="/dashboard/:name/:email"
//             element={<DashboardWrapper />}
//           />
//         </Routes>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;



const App = () => {
  return (
    <div>
      {/* <ExampleuseMemo /> */}
      {/* <Parent /> */}
      <ErrorBoundary><LoginPage title="Login" /></ErrorBoundary>
      
    </div>
  )
}

export default App;