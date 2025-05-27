import LoadingSpinnerImg from "../../assets/loadingSpinner.gif";
import "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="d-flex al-center jc-center loading-overlay-container">
      <img src={LoadingSpinnerImg} alt="Loading" height="80px" />
    </div>
  );
}

export default LoadingSpinner;
