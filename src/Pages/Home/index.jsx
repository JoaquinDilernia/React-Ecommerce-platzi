import React from "react";
import { useState, useEffect } from "react";
import LayOut from "../../Components/LayOut";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

const Home = () => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <LayOut>
      <h1>Homesssss</h1>
      <div className="grid gap-4 grid-cols-4  max-[900px]:grid-cols-2 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </LayOut>
  );
};

export default Home;
