import React, { ReactNode } from "react";
import AddToTodo from "./components/AddToTodo";
import Todos from "./components/Todos";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main>
      <h1>TODO REACT + TYPESCRIPT</h1>
      <Navbar />
      <AddToTodo />
      <Todos />
    </main>
  );
};

export default App;
