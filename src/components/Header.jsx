import { Link } from "react-router";

function Header() {
  const handleShopClick = () => {
    // link
  };
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
        <Link to={"/cart"} className="navBtn">
          Cart
          <div className="cartCounter"></div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
