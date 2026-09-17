import ProductCards from "../components/ProductCards";
import { useOutletContext } from "react-router";
import "./Shop.css";
import { useState } from "react";

export default function Shop() {
  const [input, setInput] = useState(1);
  const { products } = useOutletContext();

  return (
    <section className="shopSection">
      <div className="cartHeroSection">
        <h2>Choose your picks from our enormous collection</h2>
        <h3>Shop Now</h3>
      </div>
      <div className="cartContainer">
        {products.map((product) => (
          <ProductCards key={product.id} product={product} value={input} />
        ))}
      </div>
    </section>
  );
}
