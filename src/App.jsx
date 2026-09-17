import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router";

function App() {
  const [products, setProducts] = useState([]);

  const callClothesData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        console.error(response.status);
        return;
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
      return;
    }
  };

  useEffect(() => {
    callClothesData();
  }, []);

  return (
    <section>
      <Header />
      <Outlet context={{ products }} />
      <Footer />
    </section>
  );
}

export default App;
