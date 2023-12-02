import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Post(props) {
  return (
    <div>
      {props.name} - {props.surname}
    </div>
  );
}

function App() {
  return (
    <div>
      <Post name="Jan" surname="Kowalski" />
    </div>
  );
}

root.render(<App />);

// ---------------------------------------------------------------------------------------
//   //reactFragment
// const name = "Bob";

// function generatedId(id) {
//   return "moje" + id;
// }

// const text = <p>cos2</p>;
// const user = { name: "Ala" };

// root.render(
//   //reactFragment
//   <>
//     <h1 id={generatedId("cos")}>
//       {text} Name: {name.toUpperCase()}
//       <soab>{user.name}</soab>
//     </h1>
//     <p>Cos nowego</p>
//   </>
// );
