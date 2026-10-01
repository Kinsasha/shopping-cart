import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fleetingCard, setFleetingCard] = useState(false);

  const callClothesData = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        setLoading(false);
        setError("error");
        console.error(response.status);
        return;
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setLoading(false);
      setError("error");
      console.error(error);
      return;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callClothesData();
  }, []);

  const showFleeting = () => {
    setFleetingCard(true);

    setTimeout(() => {
      setFleetingCard(false);
    }, 3000);
  };

  const handleAddToCart = (id, value) => {
    const num = Number(value);
    if (num === 0) {
      showFleeting();
      return;
    }

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.productID === id);

      if (existing) {
        return prevCart.map((item) =>
          item.productID === id
            ? {
                ...item,
                quantity: item.quantity + num,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          productID: id,
          quantity: num,
        },
      ];
    });
  };

  const handleAddQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.productID === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const handleSubtractQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.productID === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };
  const getCartInput = (id) => {
    const num = Number(cart.find((item) => item.productID === id)?.quantity);

    return num;
  };

  const totalItem = cart.reduce((total, item) => total + item.quantity, 0);

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.productID !== id));
  };

  return (
    <section>
      <Header totalItem={totalItem} />
      <Outlet
        context={{
          products,
          handleAddToCart,
          cart,
          setCart,
          handleAddQuantity,
          handleSubtractQuantity,
          getCartInput,
          totalItem,
          loading,
          error,
          callClothesData,
          handleRemoveFromCart,
          setFleetingCard,
          fleetingCard,
        }}
      />
      <Footer />
    </section>
  );
}

export default App;
