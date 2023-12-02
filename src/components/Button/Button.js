// export default function Button() {
//   return (
//     <div
//       style={{
//         color: "red",
//         backgroundColor: "blue",
//         margin: 10,
//         fontSize: 20,
//         border: "3px solid green",
//       }}
//     >
//       Button
//     </div>
//   );
// }
// Destructuring...

import "./button.css";

export default function Button({ children, variant }) {
  const style = ["button", variant];

  return <div className={style.join(" ")}>{children}</div>;
}
