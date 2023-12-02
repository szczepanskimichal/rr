import React from "react";
import Header from "./components/Header";

function App() {
  const isLogged = true;

  if (!isLogged) {
    return <div>Logg in</div>;
  }

  //   return <div>Logged in</div>;
  return <Header />;
}

export default App;
