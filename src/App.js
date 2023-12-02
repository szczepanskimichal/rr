import React from "react";
import Header from "./components/Header";

function Book({ tittle }) {
  return <p>{tittle}</p>;
}

function App() {
  const favouriteBooks = [
    { id: "id-1", name: "JS for beginners" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Router overview" },
    { id: "id-4", name: "Redux in depth" },
  ];
  return (
    <div>
      {favouriteBooks.map((book) => (
        // <p>{book.name}</p>
        <Book tittle={book.name} id={book.id} key={book.id} />
      ))}
    </div>
  );
}

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
