import { useData } from "./components/hooks/useData";
import { usePagination } from "./components/hooks/usePagination";

export default function Characters() {
  const { activePage, handleNext, handlePrev } = usePagination();
  const { isLoading, error, data } = useData(activePage);

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>ERROR</p>;
  }

  return (
    <div>
      Characters:
      {data.map((d) => (
        <p>{d.name}</p>
      ))}
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

// //------------------------------------------------------------
// import { useEffect, useState } from "react";

// const API_URL = "https://rickandmortyapi.com/api/character";

// export default function Characters() {

//   const [data, setData] = useState([]);

//     useEffect(() => {
//     const getCharacters = async () => {
//       const response = await fetch(API_URL);

//       if (!response.ok) {
//         throw new Error("Opsss...Something went wrong");
//       }

//       const data = await response.json();
//       console.log(data);
//       setData(data.results);
//     };
//     getCharacters().catch((error) => (console.log(error));
// }, []);

//   return (
//   <div>
//     Characters:
//     {data.map((data) => (
//     <p>{data.name}</p>
//     ))}
//     </div>
//   );
// }
