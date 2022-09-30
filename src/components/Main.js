import { addToCart, removeFromCart, emptyCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.log("useSelector data", data);
  // load products when page is loaded
  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);
  // useEffect dependency array- should include someting or be removed

  return (
    <div>
      <div className="btn-container">
        <button className="primary-btn" onClick={() => dispatch(emptyCart())}>
          Empty Cart
        </button>
      </div>
      <div className="product-grid">
        {data.map((item) => (
          <div className="product-container">
            <img src={item.photo} alt={item.name} title={item.name} />
            <div className="product-info">
              <div key={item.id}></div>
              <div>
                <b>Product:</b> {item.name}
              </div>
              <div>
                <b>Brand:</b> {item.brand}
              </div>
              <div>
                <b>Description:</b> {item.subCategory}
              </div>
              <div>
                <b>Category:</b> {item.category}
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
      </div>
    </div>
  );
}

export default Main;
