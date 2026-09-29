import { NavLink } from "react-router";

function Header({ totalItem }) {
  return (
    <header>
      <h1>FakeStore.stfu</h1>
      <div className="headerBtnContainer">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "navBtn active" : "navBtn")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/shop"}
          className={({ isActive }) => (isActive ? "navBtn active" : "navBtn")}
        >
          Shop
        </NavLink>
        <div className="cartBtnContainer">
          <NavLink
            to={"/cart"}
            className={({ isActive }) =>
              isActive ? "navBtn cartAnchor active" : "navBtn cartAnchor"
            }
          >
            Cart
            {totalItem > 0 ? (
              <span className="cartCounter">{totalItem}</span>
            ) : (
              ""
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
