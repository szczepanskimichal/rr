import React from "react";
import Test from "./components/Test/Test.js";

function App() {
  return (
    <div>
      <Test />
    </div>
  );
}

export default App;

// import React from "react";
// import Livecycle from "./components/LifeCycle/Lifecycle"; // Upewnij się, że ścieżka do pliku Livecycle.js jest poprawna

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Livecycle />
//       </div>
//     );
//   }
// }

// export default App;

//------------------------------------------------------
// import React from "react";
// import Form from "./components/Form/Form";

// function App() {
//   return <Form />;
// }

// export default App;

//------------------------------------------------------
// import React from "react";
// import Test from "./components/Test/Test";

// function App() {
//   return (
//     <div>
//       <Test x={9} />
//     </div>
//   );
// }
// export default App;

//------------------------------------------------------
// import React from "react";
// import Button from "./components/Button/Button";
// // import { func } from "prop-types";
// import Alert from "./components/Alert/Alert";
// import Button2 from "./components/Alert/Button";

// function App() {
//   return (
//     <div>
//       <Alert />
//       <Button variant="info">Info</Button>
//       <Button variant="warning" outline>
//         Warning
//       </Button>
//       <Button2 />
//       <Button variant="danger">Danger</Button>
//     </div>
//   );
// }

//------------------------------------------------------------
// function Book({ tittle }) {s
//   return <p>{tittle}</p>;
// }

// function App() {
//   const favouriteBooks = [
//     { id: "id-1", name: "JS for beginners" },
//     { id: "id-2", name: "React basics" },
//     { id: "id-3", name: "React Router overview" },
//     { id: "id-4", name: "Redux in depth" },
//   ];
//   return (
//     <div>
//       {favouriteBooks.map((book) => (
//         // <p>{book.name}</p>
//         <Book tittle={book.name} id={book.id} key={book.id} />
//       ))}
//     </div>
//   );
// }

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

// export default App;
