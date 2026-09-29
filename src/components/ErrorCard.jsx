import { useOutletContext } from "react-router";
import "../pages/Shop.css";

export default function ErrorCard() {
  const { callClothesData } = useOutletContext();

  return (
    <div className="statusCard">
      <div className="errorStatus">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <title>alert-circle</title>
          <path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0,0,0 2,12A10,10 0,0,0 12,22A10,10 0,0,0 22,12A10,10 0,0,0 12,2Z" />
        </svg>

        <h4 className="winHeader">Something Went Wrong</h4>

        <p className="subText">Please Try Again</p>

        <button type="button" className="resetBtn" onClick={callClothesData}>
          Retry
        </button>
      </div>
    </div>
  );
}
