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

const style = {
  color: "red",
  backgroundColor: "blue",
  margin: 10,
  fontSize: 20,
  border: "3px solid green",
};

export default function Button() {
  return <div style={style}>Button</div>;
}
