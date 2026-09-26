import { useOutletContext } from "react-router";
import "./../pages/Shop.css";

export default function ProductCards({
  product,
  getQuantity,
  handleChange,
  handleSubtract,
  handleAdd,
}) {
  const { handleAddToCart } = useOutletContext();

  return (
    <div className="card">
      <div className="productImg">
        <img src={product.image} alt={product.title} />
      </div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <h4>${product.price}</h4>
      <div className="inputField">
        <button
          type="button"
          onClick={() => {
            handleSubtract(product.id);
          }}
        >
          -
        </button>
        <input
          name="quantity"
          type="number"
          value={getQuantity(product.id)}
          onChange={(e) => {
            handleChange(product.id, e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            handleAdd(product.id);
          }}
        >
          +
        </button>
      </div>
      <button
        className="cartBtn"
        type="button"
        onClick={() => {
          handleAddToCart(product.id, getQuantity(product.id));
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
