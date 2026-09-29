import emptyCart from "../assets/Empty-amico.svg";
import { NavLink } from "react-router";
import "../pages/Cart.css";

export default function EmptyCart() {
  return (
    <div className="emptyContainer">
      <div className="imgContainer">
        <img src={emptyCart} alt="Empty cart" />
      </div>
      <p>Why do you have nothing in your cart yet?</p>
      <p>Are you shy?</p>
      <NavLink to={"/shop"} className="navBtn">
        Back To Shop
      </NavLink>
    </div>
  );
}
