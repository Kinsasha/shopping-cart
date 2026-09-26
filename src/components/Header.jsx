import { Link } from "react-router";

function Header({ totalItem }) {
  return (
    <header>
      <h1>FakeStore.stfu</h1>
      <div className="headerBtnContainer">
        <Link to={"/"} className="navBtn">
          Home
        </Link>
        <Link to={"/shop"} className="navBtn">
          Shop
        </Link>
        <div className="cartBtnContainer">
          <Link to={"/cart"} className="navBtn cartAnchor">
            Cart
            {totalItem > 0 ? (
              <span className="cartCounter">{totalItem}</span>
            ) : (
              ""
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
