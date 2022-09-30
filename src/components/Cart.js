import { addToCart, removeFromCart } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData);
  let amount;
  cartData.length === 0
    ? (amount = 0)
    : (amount = cartData
        .map((item) => parseInt(item.price))
        .reduce((prev, next) => prev + next));

  return (
    <div>
      <div className="cart-container">
        <h1>In Your Cart You Can Haz.....</h1>
        {cartData.map((item) => (
          <div className="cart-product-container">
            <img src={item.photo} alt={item.name} title={item.name} />
            <div className="product-info cart-product-info">
              <div key={item.id}></div>
              <div>
                <b>Product:</b> {item.name}
              </div>
              <div>
                <b>Brand:</b> {item.brand}
              </div>
              <br />
              <div>
                <b>Price: £{item.price}</b>
              </div>
            </div>
            <div className="btn-container">
              <button
                className="primary-btn"
                onClick={() => dispatch(addToCart(item))}
              >
                Add To Cart
              </button>
              <button
                className="primary-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove From Cart
              </button>
            </div>
          </div>
        ))}
        <ul className="cost-details">
          <li>Amount: {amount}</li>
          <li>Discount:</li>
          <li>Tax:</li>
          <li>Total:</li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
