import React from "react";
import Header from "./components/Header";

//------------------------------------------------------------
// && operator
// function App() {
//   //   const isLogged = false;
//   const tab = [];
//   return (
//     <>
//       <p>{tab.length && <p>los</p>}</p>
//     </>
//   );
// }

//------------------------------------------------------------
// TERNARY OPERATOR
// function App() {
//   const isLogged = true;

//   return (
//     <>
//       <p>
//         {isLogged ? (
//           <>
//             Logged in
//             <span>Cos</span>
//           </>
//         ) : (
//           <a>Logg in</a>
//         )}
//       </p>
//     </>
//   );
// }
//------------------------------------------------------------
// IF ELSE
// function App() {
//   const isLogged = true;

//   if (!isLogged) {
//     return <div>Logg in</div>;
//   }

//   //   return <div>Logged in</div>;
//   return <Header />;
// }

export default App;
