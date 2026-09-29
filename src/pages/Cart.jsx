import { useOutletContext } from "react-router";
import EmptyCart from "../components/EmptyCart";
import "./Cart.css";

export default function Cart() {
  const {
    cart,
    products,
    getCartInput,
    handleSubtractQuantity,
    handleAddQuantity,
    handleRemoveFromCart,
  } = useOutletContext();

  const cartItems = cart.map((item) => {
    const product = products.find(
      (productItem) => productItem.id === item.productID
    );

    return product;
  });

  const total = cart.map((item) => {
    const product = cartItems.find((product) => product.id === item.productID);

    return Math.ceil(item.quantity * product.price);
  });

  const totalPrice = total.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <section className="cartSection">
      <div className="cartCardContainer">
        {cart.length !== 0 ? (
          cartItems.map((item) => (
            <div className="cartCard" key={item.id}>
              <div className="itemImg">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="cartNameContainer">
                <h3>{item.title}</h3>
                <div className="cartInputField inputField">
                  <button
                    type="button"
                    onClick={() => {
                      handleSubtractQuantity(item.id);
                    }}
                  >
                    -
                  </button>
                  <input
                    name="quantity"
                    type="number"
                    value={getCartInput(item.id)}
                    readOnly
                  />
                  <button
                    type="button"
                    onClick={() => {
                      handleAddQuantity(item.id);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <h4>
                ${Math.ceil(item.price)} X {getCartInput(item.id)} = $
                {Math.ceil(item.price) * getCartInput(item.id)}
              </h4>
              <span>
                <button
                  type="button"
                  onClick={() => {
                    handleRemoveFromCart(item.id);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg>
                </button>
              </span>
            </div>
          ))
        ) : (
          <EmptyCart />
        )}
      </div>
      <div className="paymentCard">
        <h2>Check Out</h2>
        <div className="totalPrice">
          <h3>${totalPrice}</h3>
        </div>
        <button type="button">Check Out</button>
      </div>
    </section>
  );
}
