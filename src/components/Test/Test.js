// import { Button } from "@mui/material";
// import { object } from "prop-types";
// import { useState } from "react";

// export default function Test() {
//   const [counter, setCounter] = useState(0);
//   const [name, setName] = useState("Mija");
//   const [tab, setTab] = useState([]);
//   const [user, setUser] = useState({
//     name: "Mija",
//     surname: "Cziczi",
//   });

//   const [isClicked, setIsClicked] = useState(false);
//   const [list, setList] = useState([
//     { id: 1, x: 1 },
//     { id: 2, x: 2 },
//   ]);

//   const handleCLick = () => {
//     // setCounter(9);
//     setName("Mija");
//     setCounter((prevState) => prevState + 1);
//     setTab((prev) => [...prev, counter]);
//     // setTab((prev) => [...prev, counter});
//     setUser((prev) => ({
//       ...prev,
//       naame: "Ada",
//     }));
//     setIsClicked(true);
//     setList((prev) => {
//       const copy = [...prev];
//       copy[1].x = 666;

//       return copy;
//     });
//   };

//   // const handleDecrement = () => {
//   //   setName("Mija");
//   //   setCounter((prevState) => prevState - 1);
//   //   setTab((prev) => prev.slice(0, -1));
//   //   setUser((prev) => ({ ...prev, name: "Mija" }));
//   // };

//   return (
//     <div>
//       <div
//         style={{
//           width: "100px",
//           height: "100px",
//           background: isClicked ? "red" : "green",
//         }}
//       />
//       <Button variant="contained" color="secondary" onClick={handleCLick}>
//         !CLICK ME! {counter}
//       </Button>
//       {/* Commented out to avoid syntax error */}
//       {/* <Button variant="contained" color="primary" onClick={handleDecrement}>
//         Decrement
//       </Button> */}
//       <h1>{name}</h1>
//       <h1>{tab}</h1>
//       <h1>
//         user: {user.name} {user.surname}
//       </h1>
//       <h1>
//         {list.map((object) => (
//           <p>
//             {object.id} {object.x}
//           </p>
//         ))}
//       </h1>
//     </div>
//   );
// }
// //-------------------------------------------------
// import { Button } from "@mui/material";
// import { useState } from "react";

// function getRandomColor() {
//   var letters = "0123456789ABCDEF";
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// export default function Test() {
//   //   console.log(useState(0));
//   const [counter, setCounter] = useState(0);
//   const [name, setName] = useState("Bob");
//   const [tab, setTab] = useState([1, 2, 3]);
//   const [user, setUser] = useState({
//     name: "Bob",
//     surname: "Bobber",
//   });
//   const [isClicked, setIsClicked] = useState(false);
//   const [list, setList] = useState([
//     { id: 1, x: 1 },
//     { id: 2, x: 2 },
//   ]);
//   const [color, setColor] = useState("#000");

//   const handleClick = () => {
//     // console.log(counter, name);
//     // setCounter(99999);
//     setName("Bobber");
//     setCounter((prev) => prev + 1);
//     setTab((prev) => [...prev, 4]);
//     setUser((prev) => ({
//       ...prev,
//       name: "Ala",
//     }));
//     setIsClicked(true);
//     setList((prev) => {
//       const copy = [...prev];
//       copy[1].x = 666;

//       return copy;
//     });
//     setColor(getRandomColor());
//   };

//   return (
//     <div>
//       <div
//         style={{
//           background: color,
//           height: 200,
//         }}
//       />
//       <Button onClick={handleClick} variant="contained" color="secondary">
//         Click Me! {counter}
//       </Button>
//       <h1>{name}</h1>
//       <h1>{tab}</h1>
//       <h1>
//         user: {user.name} {user.surname}
//       </h1>
//       {list.map((obj) => (
//         <p>
//           {obj.id} {obj.x}
//         </p>
//       ))}
//     </div>
//   );
// }
// //-------------------------------------------------

import { Button } from "@mui/material";
import { useState, useEffect } from "react";
export default function Test() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const handleCLick = () => {
    setCounter((prevState) => prevState + 1);
  };
  const handleCLick2 = () => {
    setCounter2((prevState) => prevState + 1);
  };

  useEffect(() => {
    console.log("On mount, and every time satet changes");
  });

  useEffect(() => {
    console.log("On mount");
  }, []);

  useEffect(() => {
    console.log("On mount and every counter state change");
  }, [counter]);

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleCLick}>
        Click Me! {counter}
      </Button>
      <Button variant="contained" color="primary" onClick={handleCLick}>
        Click Me! {counter}
      </Button>
    </div>
  );
}
