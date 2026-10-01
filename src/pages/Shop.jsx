import ProductCards from "../components/ProductCards";
import Loader from "../components/Loader";
import ErrorCard from "../components/ErrorCard";
import { useEffect, useState } from "react";
import { useOutletContext, NavLink } from "react-router";
import "./Shop.css";
import FleetingError from "../components/FleetingError";

export default function Shop() {
  const { products, totalItem, error, loading, fleetingCard } =
    useOutletContext();

  const [quantities, setQuantities] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowCart(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAdd = (id) => {
    setQuantities((prev) =>
      prev.some((product) => product.productID === id)
        ? prev.map((product) =>
            product.productID === id
              ? { ...product, value: Number(product.value) + 1 }
              : product
          )
        : [
            ...prev,
            {
              productID: id,
              value: 1,
            },
          ]
    );
  };
  const handleSubtract = (id) => {
    setQuantities((prev) =>
      prev.some((product) => product.productID === id)
        ? prev.map((product) =>
            product.productID === id
              ? {
                  ...product,
                  value: Number(Math.max(1, product.value)) - 1,
                }
              : product
          )
        : [...prev]
    );
  };

  const handleChange = (id, value) => {
    const num = Number(value);
    setQuantities((prev) =>
      prev.some((product) => product.productID === id)
        ? prev.map((product) =>
            product.productID === id ? { ...product, value: num } : product
          )
        : [...prev, { productID: id, value: num }]
    );
  };

  const getQuantity = (id) => {
    let num = Number(
      quantities.find((item) => item.productID === id)?.value ?? 0
    );

    return num;
  };

  return (
    <section className="shopSection">
      <FleetingError
        style={{
          display: `${fleetingCard ? "flex" : "none"}`,
        }}
      />
      <div className="cartHeroSection">
        <h2>Choose your picks from our enormous collection</h2>
        <h3>Shop Now</h3>
      </div>
      <div className="cartContainer">
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorCard />
        ) : (
          products.map((product) => (
            <ProductCards
              key={product.id}
              product={product}
              getQuantity={getQuantity}
              handleChange={handleChange}
              handleSubtract={handleSubtract}
              handleAdd={handleAdd}
            />
          ))
        )}
      </div>
      {showCart && (
        <div className="cartBubble">
          <NavLink to={"/cart"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <title>cart-variant</title>
              <path d="M19 20C19 21.11 18.11 22 17 22C15.89 22 15 21.1 15 20C15 18.89 15.89 18 17 18C18.11 18 19 18.9 19 20M7 18C5.89 18 5 18.89 5 20C5 21.1 5.89 22 7 22C8.11 22 9 21.11 9 20S8.11 18 7 18M7.2 14.63L7.17 14.75C7.17 14.89 7.28 15 7.42 15H19V17H7C5.89 17 5 16.1 5 15C5 14.65 5.09 14.32 5.24 14.04L6.6 11.59L3 4H1V2H4.27L5.21 4H20C20.55 4 21 4.45 21 5C21 5.17 20.95 5.34 20.88 5.5L17.3 11.97C16.96 12.58 16.3 13 15.55 13H8.1L7.2 14.63M8.5 11H10V9H7.56L8.5 11M11 9V11H14V9H11M14 8V6H11V8H14M17.11 9H15V11H16L17.11 9M18.78 6H15V8H17.67L18.78 6M6.14 6L7.08 8H10V6H6.14Z" />
            </svg>
          </NavLink>
          {totalItem > 0 && <span className="cartCounter">{totalItem}</span>}
        </div>
      )}
    </section>
  );
}
