import React from "react";

export default function Clicker({ data, setData }) {
  // Increments the currPixelCount data when clicking on the button
  const incrementCount = () => {
    setData((previousData) => ({
      ...previousData,
      clicker: {
        ...previousData.clicker,
        currPixelCount: previousData.clicker.currPixelCount + 1,
      },
    }));
  };

  const { currPixelCount, pixelsPerSecond } = data.clicker;

  return (
    <section>
      <h1>Cosmic Clicker</h1>
      <h4>{currPixelCount} pixels / 0 pixels per second</h4>
      <button onClick={incrementCount}>Click</button>
    </section>
  );
}
