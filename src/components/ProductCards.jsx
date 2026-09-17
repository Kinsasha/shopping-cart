import "./../pages/Shop.css";

export default function ProductCards({ product, value }) {
  return (
    <div className="card">
      <div className="productImg">
        <img src={product.image} alt={product.title} />
      </div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <h4>${product.price}</h4>
      <div className="inputField">
        <button type="button">-</button>
        <input type="number" value={value} />
        <button type="button">+</button>
      </div>
      <button className="cartBtn" type="button">
        Add to Cart
      </button>
    </div>
  );
}
