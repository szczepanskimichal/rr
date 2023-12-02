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
// Destructuring

import "./button.css";

export default function Button({ children, variant }) {
  //   const getColor = () => {
  //     if (variant === "info") {
  //       return "blue";
  //     } else if (variant === "warning") {
  //       return "yellow";
  //     } else if (variant === "danger") {
  //       return "red";
  //     }
  //   };
  return <div className="button">{children}</div>;
}
