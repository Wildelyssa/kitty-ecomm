import "../App.css";
import image from "../Images/cart.png";
import image2 from "../Images/kitty.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.log("data in header", result);
  return (
    <div className="container">
      <Link className="logo-img-div" to="/">
        <img
          src={image2}
          alt="Meaningful Text"
          title="Meaningful Text"
          width="100%"
          height="auto"
        />
      </Link>
      <Link className="logo-container" to="/">
        <h1>I CAN HAZ THIS?</h1>
        <p>Online Store For Hoomins And Their Owners</p>
      </Link>
      <div className="cart-div">
        <span>{result.length}</span>
        <Link to="/cart">
          <img
            src={image}
            alt="Meaningful Text"
            title="Meaningful Text"
            width="70%"
            height="auto"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
