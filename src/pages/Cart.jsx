import { useOutletContext } from "react-router";
import "./Cart.css";

export default function Cart() {
  const {
    cart,
    products,
    getCartInput,
    handleSubtractQuantity,
    handleAddQuantity,
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

  console.log(cart);

  return (
    <section className="cartSection">
      <div className="cartCardContainer">
        {
          cartItems?.map((item) => (
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
            </div>
          ))
          /*?? <ErrorCard />*/
        }
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
