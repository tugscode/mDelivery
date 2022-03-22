import React, { useEffect, useState } from "react";
import DeleteMeal from "../img/delete_meal.png";
import "../css/cartItems.css";
import { basketService } from "../services/basketService";
import { NavLink} from "react-router-dom";
import { Spinner} from "react-bootstrap";
function CartItems() {
  const [first, setfirst] = useState({ success: false });
  const [changed, setChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    basketService
      .getBasketinfo()
      .then((res) => res.json())
      .then((data) => setfirst(data));
  }, [changed]);

  const deletedBasket = async (d) => {
    basketService
      .deleteBasket(d)
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          setChanged(!changed);
        }
      });
  };
  const updateBasket = (q, id) => {
    basketService.addItem({ count: q, food_id: id }).then((data) => {
      if (data.success) {
        setChanged(!changed);
      }
    });
  };

  const el = first.baskets;
  let summit = 0;

  return (
    <div className="main-body">
      {first.success === true ? (
        el.map((data) => {

          if (data.product.discount === 0) {
            summit += data.product.price * data.quantity;
          } else {
            summit +=
              (data.product.price / 100) *
              (100 - data.product.discount) *
              data.quantity;
          }

          return (
            <div>
              <div className="cart-items">
                <div className="thumbnail">
                  <img
                    src={
                      "https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com" +
                      data.product.image
                    }
                    alt="img"
                    className="item-image"
                  />
                </div>
                <div className="details">
                  <p className="cart-item-name">{data.product.name}</p>
                  <p className="cart-item-price">
                    {data.product.discount === 0
                      ? data.product.price
                      : (data.product.price / 100) *
                        (100 - data.product.discount)}
                    ₮
                  </p>
                  <div className="buttons">
                    <button onClick={() => updateBasket(-1, data.product._id)}>
                      -
                    </button>
                    <p>{data.quantity}</p>
                    <button
                      onClick={() => {
                        updateBasket(1, data.product._id);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="close-button">
                  <img
                    src={DeleteMeal}
                    onClick={() => deletedBasket(data)}
                    alt="delete"
                  />
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          {isLoading ? (
            <h3 className="loading">
              {" "}
              <span role="img" aria-label="">
                Loading <Spinner animation="grow" variant="warning" />
              </span>
            </h3>
          ) : (
            {}
          )}
        </div>
      )}
      <div className="order-section">
        <p className="totalPrice">{summit}₮</p>
        <NavLink to="/address">
          <button className="order-button">Захиалах</button>
        </NavLink>
      </div>
    </div>
  );
}
export default CartItems;
