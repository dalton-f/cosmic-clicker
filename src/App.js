import React, { useState } from "react";
import Clicker from "./components/Clicker";
import Shop from "./components/Shop";

const initialData = {};

export default function App() {
  const [data, setData] = useState(initialData);

  return (
    <>
      <Clicker />
      <Shop />
    </>
  );
}
