import React, { useState } from "react";
import Clicker from "./components/Clicker";
import Shop from "./components/Shop";

const initialData = {
  clicker: {
    currPixelCount: 0,
    pixelsPerSecond: 0,
  },
  shop: {
    item: {
      owned: 0,
      price: 0,
    },
  },
};

export default function App() {
  const [data, setData] = useState(initialData);

  return (
    <>
      <Clicker />
      <Shop data={data} setData={setData} />
    </>
  );
}
