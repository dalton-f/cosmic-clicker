import React from "react";
import ShopItem from "./ShopItem";

export default function Shop({ data, setData }) {
  return (
    <aside>
      <ShopItem data={data} setData={setData} />
    </aside>
  );
}
