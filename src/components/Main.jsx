import { Link } from "react-router";

export default function Main() {
  return (
    <main>
      <div className="heroSection">
        <p className="hero">Purchase the best products your money can buy</p>
        <h2 className="mainText">Get In and Get Good Looking</h2>
        <p className="subText">
          We specialize in fashion, home appliances & jeweries
        </p>
        <div className="mainbtnContainer">
          <Link to={"/shop"} className="mainBtn">
            View Store
          </Link>
          <Link to={"/cart"} className="mainBtn">
            View Cart
          </Link>
        </div>
      </div>
      <div className="featuresContainer">
        <div className="featuresCard">
          <h3>Fast Delivery</h3>
          <p>We deliver extremely fast across the world</p>
        </div>
        <div className="featuresCard">
          <h3>Verified Quality</h3>
          <p>Our products are high quality</p>
        </div>
        <div className="featuresCard">
          <h3>Return Anytime</h3>
          <p>Not satisfied with our products? Return anytime with no problem</p>
        </div>
      </div>
    </main>
  );
}
