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
import clsx from "clsx";

export default function Button({ children, variant, outline }) {
  const style = ["button", variant];
  console.log(clsx("foo", true && "xyz"));

  if (outline) {
    style.push("outline");
  }

  //   return (
  //     <div className={style.join(" ")}>
  //       {children}
  //       <p className="test">TEST</p>
  //     </div>
  //   );
  return <div className={style.join(" ")}>{children}</div>;
}
